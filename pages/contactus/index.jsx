import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  AspectRatio,
  VStack,
} from '@chakra-ui/react';
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import ContactUsForm from '../../components/ContactUsForm';
import TitleHeader from '../../components/Layout/TitleHeader';

const Contactus = () => (
  <main>
    <TitleHeader
      heading="Contact Us"
      subheading=""
    />
    <ResponsiveContainer>
      <Box
        paddingY="64px"
      >
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
              <Box
                width="100%"
              >
                <Heading
                  size="md"
                  color="brand.400"
                >
                  Shaleen Poddar
                </Heading>
                <Text
                  py={1}
                  color="gray.500"
                >
                  Chairperson IEEE SB MUJ
                </Text>
                <Text
                  fontSize="md"
                >
                  <Link
                    href="tel:+91 98254 40501"
                  >
                    +91 98254 40501
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading
                  size="md"
                  color="brand.400"
                >
                  Vaibhav Khandelwal
                </Heading>
                <Text
                  color="gray.500"
                // fontSize="sm"
                  py={1}
                >
                  Vice-Chairperson IEEE SB MUJ
                </Text>
                <Text
                  fontSize="md"
                >
                  <Link
                    href="tel:+91 75035 84851"
                  >
                    +91 75035 84851
                  </Link>
                </Text>
              </Box>
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
              Manipal University Jaipur,
              <br />
              Dehmi Kalan, Near GVK Toll Plaza,
              <br />
              Jaipur-Ajmer Expressway,
              <br />
              Jaipur, Rajasthan 303007
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
      </Box>
    </ResponsiveContainer>
  </main>
);

export default Contactus;
