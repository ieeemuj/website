import { Box, Text } from '@chakra-ui/react';
import styles from '../../../styles/Navbar.module.css';

const FooterSectionSocialLink = ({
  icon, underline, href, children,
}) => (
  <Box
    width="100%"
    textAlign="center"
  >
    {icon}
    <a
      className={underline ? styles.underLineAnimation : ''}
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
  </Box>
);

export default FooterSectionSocialLink;
