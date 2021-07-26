import React from "react";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import CUForm from "../../components/Contactus/CUForm";

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  // Button,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";

const Contactus = () => (
  <ResponsiveContainer>
    <Box>
      {/* <Heading size="2xl" color="blue">Contact Us</Heading> */}
      <br />

      <br />
      <SimpleGrid
        columns={["1", "1", "1", "2", "2"]}
        spacingX="10px"
        spacingY="30px"
        marginTop="40px"
      >
        <Box align="left" paddingRight="50px">
          <Heading size="lg" align="center">
            We would love to hear from you
          </Heading>
          <Stack mt="25px">
            <Heading size="md" color="blue" marginTop="30px">
              Shaleen Poddar
            </Heading>
            <Text fontSize="sm" p="5px">
              (Chairperson IEEE SB MUJ)
            </Text>
            <Text fontSize="md">
              <Link href="tel:+91 98254 40501">+91 98254 40501</Link>
            </Text>
            <br />
            <Heading size="md" marginTop="20px" color="blue">
              Vaibhav Khandelwal
            </Heading>
            <Text fontSize="sm" p="5px">
              (Vice-Chairperson IEEE SB MUJ)
            </Text>
            <Text fontSize="md">
              <Link href="tel:+91 75035 84851">+91 75035 84851</Link>
            </Text>
          </Stack>
        </Box>
        <Box>
          <Heading size="xs" color="blue">
            Great vision without great people is irrelevant. Let's work
            together.
          </Heading>
          <br />
          <Box align="right">
            <CUForm />
          </Box>
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <SimpleGrid
        columns={["1", "1", "1", "2", "2"]}
        spacingX="100px"
        spacingY="50px"
      >
        <AspectRatio maxW="900px" ratio={2}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9088893627104!2d75.56315290391319!3d26.84285004503928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1627036239444!5m2!1sen!2sin" />
        </AspectRatio>
        <Box align="left">
          <Heading color="blue">Address</Heading>
          <br />
          <Text fontSize="lg">
            Manipal University Jaipur,
            <br />
            Dehmi Kalan, Near GVK Toll Plaza,
            <br />
            Jaipur-Ajmer Expressway,
            <br />
            Jaipur, Rajasthan 303007
          </Text>
        </Box>
      </SimpleGrid>
      {/* 
      <br /> */}
    </Box>
    <br />
    <br />
    <br />
    <br />
    <br />
  </ResponsiveContainer>
);

export default Contactus;
