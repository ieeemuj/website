import { Text } from '@chakra-ui/react';

const FooterSectionLink = ({ href, children }) => (
  <a
    href={href}
    aria-label="id"
    target="_blank"
    rel="noreferrer"
  >
    <Text
      color="white"
      size="sm"
    >
      {children}
    </Text>
  </a>
);

export default FooterSectionLink;
