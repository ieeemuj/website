import { Text } from '@chakra-ui/react';
import styles from '../../../styles/Navbar.module.css';

const FooterSectionLink = ({ underline, href, children }) => (
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
);

export default FooterSectionLink;
