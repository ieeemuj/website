/**
 * This is the same code as https://github.com/prismicio/apollo-link-prismic/ using new Apollo v3
 */

import Prismic from '@prismicio/client';
import { HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const PRISMIC_ENDPOINT_REG = /^https?:\/\/([^.]+)\.(?:cdn\.)?(wroom\.(?:test|io)|prismic\.io)\/graphql\/?/;

const removeWhiteSpace = (str) => {
  const regexp = /(%0A|%20)*(%20|%7B|%7D)(%0A|%20)*/g;

  const [path, query] = str.split('?');
  if (!query) return str;

  const shortQuery = query.split('&').map((param) => {
    const [name, value] = param.split('=');
    if (name === 'query') {
      return `${name}=${value.replace(regexp, (chars, spaces, brackets) => brackets)}`;
    }
    return param;
  }).join('&');

  return [path, shortQuery].join('?');
};

function parsePrismicEndpoint(endpoint) {
  const tokens = endpoint.match(PRISMIC_ENDPOINT_REG);

  if (tokens !== null && Array.isArray(tokens) && tokens.length === 3) {
    const [/* endpoint */, repository, domain] = tokens;

    return `https://${repository}.cdn.${domain}`;
  }

  return null;
}

export function PrismicLink({
  uri, accessToken, repositoryName, ...options
}) {
  const prismicEndpoint = parsePrismicEndpoint(uri);

  let apiEndpoint;
  let gqlEndpoint;

  if (prismicEndpoint) {
    apiEndpoint = `${prismicEndpoint}/api/v2`;
    gqlEndpoint = `${prismicEndpoint}/graphql`;
  } else {
    apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`;
    gqlEndpoint = uri;
  }

  const prismicClient = Prismic.client(apiEndpoint, { accessToken });

  const prismicLink = setContext(
    (request, previousContext) => prismicClient
      .getApi()
      .then(
        (api) => ({
          headers: {
            'Prismic-ref': api.masterRef.ref,
            ...previousContext.headers,
            ...(api.integrationFieldsRef ? { 'Prismic-integration-field-ref': api.integrationFieldsRef } : {}),
            ...(accessToken ? { Authorization: `Token ${accessToken}` } : {}),
          },
        }),
      ),
  );

  const httpLink = new HttpLink({
    uri: gqlEndpoint,
    useGETForQueries: true,
    fetch: (url, opt) => {
      const trimmed = removeWhiteSpace(url);
      return fetch(trimmed, opt);
    },
    ...options,
  });

  return prismicLink.concat(httpLink);
}

export default {
  PrismicLink,
};
