import { Box, SimpleGrid, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import ResponsiveContainer from '../ResponsiveContainer';
import FooterSection from './FooterSection';
import FooterSectionContact from './FooterSectionContact';
import FooterSectionHeading from './FooterSectionHeading';
import FooterSectionLink from './FooterSectionLink';

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
        </FooterSection>
        <VStack
          width="100%"
          spacing={10}
        >
          <FooterSection>
            <FooterSectionHeading>Contact Us</FooterSectionHeading>
            <FooterSectionContact number="+91123456789" name="Shaleen Poddar" />
            <FooterSectionContact number="+91123456789" name="Vaibhav Khandelwal" />
            <FooterSectionLink href="mailto:acmmuj@gmail.com">acmmuj@gmail.com</FooterSectionLink>
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
