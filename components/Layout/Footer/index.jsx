import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

import { HiLocationMarker, HiMailOpen } from "react-icons/hi";

import styles from '../../../styles/Home.module.css';

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

const Level1Buttons = ({ children, label, href }) => (
  <chakra.button
    rounded="full"
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
      <div className={styles.level1}>
        <a href="#" className={styles.location}>
          <Level1Buttons label="Location" href="#">
            <div className={styles.footerLevel1Icon}>
              <HiLocationMarker />
            </div>
          </Level1Buttons>
          <div className={styles.locationText}>
            <span>Find Us.</span>
            <span>Lorem ipsum, dolor sit amet</span>
          </div>
        </a>
        <a href="#" className={styles.subscribe}>
          <Level1Buttons label="Subscribe" href="#">
            <div className={styles.footerLevel1Icon}>
              <FaTelegramPlane />
            </div>
          </Level1Buttons>
          <div className={styles.subscribeText}>
            <span>Subscribe for the Latest Tech News.</span>
            <span>Lorem ipsum, dolor sit amet</span>
          </div>
        </a>
        <a href="#" className={styles.email}>
          <Level1Buttons label="Email" href="#">
            <div className={styles.footerLevel1Icon}>
              <HiMailOpen />
            </div>
          </Level1Buttons>
          <div className={styles.emailText}>
            <span>Mail Us.</span>
            <span>someone@example.com</span>
          </div>
        </a>
      </div>
      <hr className={styles.footerRule}></hr>
      <div className={styles.level2}>
        <div className={styles.logoContainer}>
          <a href="#"><img src="https://www.dawex.com/hubfs/migration-assets/img/events/ieee-logo.svg" alt="logo" /></a>
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