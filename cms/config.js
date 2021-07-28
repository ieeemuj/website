export const apiEndpoint = 'https://ieeemuj.cdn.prismic.io/graphql';

export const accessToken = '';

export const linkResolver = (doc) => {
  if (doc.type === 'event') {
    return `/events/${doc.uid}`;
  }
  return '/events/';
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'event') {
    return '/events/[uid]';
  }
  return '/events/';
};
