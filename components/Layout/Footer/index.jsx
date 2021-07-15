import {
  chakra,
  Link,
  VisuallyHidden,
} from '@chakra-ui/react';

import {
  FaInstagram, FaTwitter, FaYoutube,
} from 'react-icons/fa';

import styles from '../../../styles/Footer.module.css';

const SocialButton = ({ children, label, href }) => (
  <chakra.button
    cursor="pointer"
    as="a"
    href={href}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.button>
);

const Footer = () => {
  const Links = [
    'Home',
    'Events',
    'Projects',
    'Team',
    'IEEE-WIE',
    'IEEE-CS',
    'Join Us',
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.level2}>
        <div className={styles.logoContainer}>
          <a href="www.ieee.org"><img src="https://www.dawex.com/hubfs/migration-assets/img/events/ieee-logo.svg" alt="logo" /></a>
        </div>
        <div className={styles.linksContainer}>
          {Links.map((link) => (
            <div className={styles.link}>
              <Link key={link} href={link.toLowerCase()}>
                {link}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.level3}>
        <div className={styles.copyrightInfo}>
          © 2021 IEEE SB MUJ. All rights reserved
        </div>
        <div className={styles.socialMedia}>
          <SocialButton label="Twitter" href="#">
            <div className={styles.footerLevel3Icon}>
              <FaTwitter />
            </div>
          </SocialButton>
          <SocialButton label="YouTube" href="#">
            <div className={styles.footerLevel3Icon}>
              <FaYoutube />
            </div>
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <div className={styles.footerLevel3Icon}>
              <FaInstagram />
            </div>
          </SocialButton>
        </div>
      </div>
    </div>

  );
};

export default Footer;
