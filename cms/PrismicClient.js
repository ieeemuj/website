import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

import { apiEndpoint } from './config';
import { PrismicLink } from './PrismicLink';

const PrismicClient = new ApolloClient({
  link: PrismicLink({
    uri: apiEndpoint,
  }),
  cache: new InMemoryCache(),
});

export default PrismicClient;
