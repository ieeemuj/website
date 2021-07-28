import {
  Avatar, Heading, Text, IconButton, Link, VStack, HStack,
} from '@chakra-ui/react';

import {
  FaLinkedinIn, FaInstagram, FaGithub,
} from 'react-icons/fa';

const CreditsContent = ({
  name, title, linkedIn, insta, github,
}) => (
  <VStack
    marginY="2em"
    justifyItems="center"
    alignItems="center"
  >
    <Avatar
      size="xl"
      src="https://bit.ly/code-beast"
    />
    <Heading
      as="h4"
      size="md"
    >
      {name}
    </Heading>
    <Text
      fontSize="lg"
      color="#8a9494"
      fontWeight="medium"
    >
      {title}
    </Text>
    <HStack
      width="100%"
      justify="center"
    >
      <IconButton
        as={Link}
        href={`https://www.linkedin.com/in/${linkedIn}`}
        variant="ghost"
        aria-label={`Linkedin link of ${name}`}
        icon={<FaLinkedinIn />}
        colorScheme="linkedin"
      />
      <IconButton
        as={Link}
        href={`https://www.instagram.com/${insta}`}
        variant="ghost"
        aria-label={`Instagram link of ${name}`}
        icon={<FaInstagram />}
        colorScheme="pink"
      />
      <IconButton
        as={Link}
        href={`https://www.github.com/${github}`}
        variant="ghost"
        aria-label={`GitHub link of ${name}`}
        icon={<FaGithub />}
        colorScheme="facebook"
      />
    </HStack>
  </VStack>
);

export default CreditsContent;