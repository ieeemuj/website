import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  AspectRatio,
  VStack,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { RichText } from 'prismic-reactjs';
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import ContactUsForm from '../../components/ContactUsForm';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';
import getContactUsData from '../../cms/queries/contactus';

const Contactus = ({ contactUsData }) => (
  <main>
    <NextSeo
      title={contactUsData.seo.title}
      description={contactUsData.seo.description}
      canonical="https://ieeemuj.com/contactus"
      openGraph={{
        description: contactUsData.seo.description,
        images: [
          {
            height: contactUsData.seo.image.dimensions.height,
            width: contactUsData.seo.image.dimensions.width,
            url: contactUsData.seo.image.url,
            alt: contactUsData.seo.image.alt,
          },
        ],
      }}
    />
    <TitleHeader>
      <FadeInUp>
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          Contact Us
        </Heading>
      </FadeInUp>
    </TitleHeader>
    <ResponsiveContainer>
      <Box
        paddingY="64px"
      >
        <FadeInUp>
          <SimpleGrid
            columns={['1', '1', '1', '2', '2']}
            spacing="10"
            marginY="32px"
          >
            <Box
              align="left"
              paddingRight="50px"
            >
              <Heading
                size="lg"
              >
                Contacts
              </Heading>
              <VStack
                paddingY="32px"
                alignItems="flex-start"
                spacing="10"
              >
                {contactUsData.contacts.map((contact) => (
                  <Box
                    width="100%"
                  >
                    <Heading
                      size="md"
                      color="brand.500"
                    >
                      {contact.name}
                    </Heading>
                    <Text
                      py={1}
                      color="gray.700"
                    >
                      {contact.position}
                    </Text>
                    <Text
                      fontSize="md"
                    >
                      <Link
                        href={`tel:+91${contact.indian_mobile_number}`}
                      >
                        +91
                        {' '}
                        {contact.indian_mobile_number}
                      </Link>
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
            <Box>
              <Heading
                size="lg"
              >
                Write to us!
              </Heading>
              <Box
                align="right"
              >
                <ContactUsForm />
              </Box>
            </Box>
          </SimpleGrid>
        </FadeInUp>
        <FadeInUp>
          <SimpleGrid
            columns={['1', '1', '1', '2', '2']}
            spacing={10}
            marginY="32px"
          >
            <Box
              align="left"
            >
              <Heading
                size="lg"
              >
                Address
              </Heading>
              <Text
                paddingY="32px"
                fontSize="lg"
              >
                {RichText.render(contactUsData.address)}
              </Text>
            </Box>
            <AspectRatio
              maxW="900px"
              ratio={2}
            >
              <iframe
                title="Address on Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9088893627104!2d75.56315290391319!3d26.84285004503928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1627036239444!5m2!1sen!2sin"
              />
            </AspectRatio>
          </SimpleGrid>
        </FadeInUp>
      </Box>
    </ResponsiveContainer>
  </main>
);

export async function getStaticProps() {
  const contactUsData = await getContactUsData();

  if (contactUsData) {
    return {
      props: {
        contactUsData,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Contactus;
