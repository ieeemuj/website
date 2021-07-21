import { Box, SimpleGrid, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ResponsiveContainer from '../ResponsiveContainer';
import FooterSection from './FooterSection';
import FooterSectionContact from './FooterSectionContact';
import FooterSectionHeading from './FooterSectionHeading';
import FooterSectionLink from './FooterSectionLink';
import FooterSectionSocialIcon from './FooterSectionSocialIcon';
import FooterSectionSocialLink from './FooterSectionSocialLink';

const Footer = () => (
  <Box
    bgColor="brand.700"
    width="100%"
    backgroundImage="url(/footer.svg)"
    backgroundAttachment="fixed"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    paddingTop="96px"
    paddingBottom="96px"
  >
    <ResponsiveContainer>
      <SimpleGrid
        columns={[1, 1, 1, 1, 4]}
        alignItems="flex-start"
        justifyItems="center"
        spacing="48px"
      >
        <Image
          width="256"
          height="75"
          src="https://www.dawex.com/hubfs/migration-assets/img/events/ieee-logo.svg"
        />
        <FooterSection>
          <FooterSectionHeading>Social Media</FooterSectionHeading>
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaInstagram} />}
            href="https://www.instagram.com/ieeemuj"
            underline
          >
            @ieeemuj
          </FooterSectionSocialLink>
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaInstagram} />}
            href="https://www.instagram.com/ieee_csmuj"
            underline
          >
            @ieee_csmuj
          </FooterSectionSocialLink>
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaInstagram} />}
            href="https://www.instagram.com/ieee.wiemuj"
            underline
          >
            @ieee.wiemuj
          </FooterSectionSocialLink>
          <Box width="100%" height="8px" />
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaLinkedin} />}
            href="https://www.linkedin.com/company/ieeesbmuj/"
            underline
          >
            IEEE SB MUJ
          </FooterSectionSocialLink>
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaLinkedin} />}
            href="https://www.linkedin.com/company/ieee-cs-muj/"
            underline
          >
            IEEE CS MUJ
          </FooterSectionSocialLink>
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaLinkedin} />}
            href="https://www.linkedin.com/company/ieee-wie-muj/"
            underline
          >
            IEEE WIE MUJ
          </FooterSectionSocialLink>
          <Box width="100%" height="8px" />
          <FooterSectionSocialLink
            icon={<FooterSectionSocialIcon icon={FaFacebook} />}
            href="https://www.facebook.com/ieeemuj/"
            underline
          >
            @ieeemuj
          </FooterSectionSocialLink>
        </FooterSection>
        <VStack
          width="100%"
          spacing={10}
        >
          <FooterSection>
            <FooterSectionHeading>Contact Us</FooterSectionHeading>
            <FooterSectionContact number="+919825440501" name="Shaleen Poddar">
              +91 98254 40501
            </FooterSectionContact>
            <FooterSectionContact number="+917503584851" name="Vaibhav Khandelwal">
              +91 75035 84851
            </FooterSectionContact>
            <FooterSectionLink href="mailto:ieee@muj.manipal.edu">
              ieee@muj.manipal.edu
            </FooterSectionLink>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>Address</FooterSectionHeading>
            <FooterSectionLink>
              Manipal University Jaipur,
              Dehmi Kalan, Near GVK Toll Plaza,
              Jaipur-Ajmer Expressway, Jaipur,
              Rajasthan 303007
            </FooterSectionLink>
          </FooterSection>
        </VStack>
        <VStack
          width="100%"
          spacing={10}
        >
          <FooterSection>
            <FooterSectionHeading>Links</FooterSectionHeading>
            <FooterSectionLink
              underline
              href="http://jaipur.manipal.edu/"
            >
              MUJ Official Website
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="http://www.ieee.org/about/index.html"
            >
              IEEE Official Website
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="http://www.ieee.org/membership_services/membership/students/awards/index.html"
            >
              IEEE Scholarships
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="http://www.ieee.org/membership_services/membership/benefits/benefits.html"
            >
              IEEE Benefits
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="http://www.ieee.org/membership_services/membership/join/index.html"
            >
              IEEE Global Membership
            </FooterSectionLink>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>Faculty Messages</FooterSectionHeading>
            <FooterSectionLink
              underline
              href="www.ieee.org"
            >
              Ex-President&apos;s Message
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="www.ieee.org"
            >
              Ex-Pro-President&apos;s Message
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="www.ieee.org"
            >
              Advisor&apos;s Message
            </FooterSectionLink>
            <FooterSectionLink
              underline
              href="www.ieee.org"
            >
              Faculty Coordinator&apos;s Message
            </FooterSectionLink>
          </FooterSection>
        </VStack>

      </SimpleGrid>
    </ResponsiveContainer>

  </Box>
);

export default Footer;
