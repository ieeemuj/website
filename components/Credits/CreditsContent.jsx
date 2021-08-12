import {
  Avatar, Heading, Text, IconButton, Link, VStack, HStack,
} from '@chakra-ui/react';

import {
  FaLinkedinIn, FaInstagram, FaGithub, FaTwitter, FaBehance,
} from 'react-icons/fa';
import FadeInUp from '../FadeInUp';

const CreditsContent = ({
  name, image, position, linkedIn, instagram, github, twitter, behance,
}) => (
  <FadeInUp>

    <VStack
      marginY="2em"
      justifyItems="start"
      alignItems="center"
    >
      <Avatar
        size="xl"
        src={image}
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
        {position}
      </Text>
      <HStack
        width="100%"
        justify="center"
      >
        {linkedIn && (
        <IconButton
          target="_blank"
          as={Link}
          href={linkedIn}
          variant="ghost"
          aria-label={`Linkedin link of ${name}`}
          icon={<FaLinkedinIn />}
          colorScheme="linkedin"
        />
        )}
        {instagram && (
        <IconButton
          target="_blank"
          as={Link}
          href={instagram}
          variant="ghost"
          aria-label={`Instagram link of ${name}`}
          icon={<FaInstagram />}
          colorScheme="pink"
        />
        )}
        {github && (
        <IconButton
          target="_blank"
          as={Link}
          href={github}
          variant="ghost"
          aria-label={`GitHub link of ${name}`}
          icon={<FaGithub />}
          colorScheme="facebook"
        />
        )}
        {twitter && (
        <IconButton
          target="_blank"
          as={Link}
          href={twitter}
          variant="ghost"
          aria-label={`GitHub link of ${name}`}
          icon={<FaTwitter />}
          colorScheme="facebook"
        />
        )}
        {behance && (
        <IconButton
          target="_blank"
          as={Link}
          href={twitter}
          variant="ghost"
          aria-label={`GitHub link of ${name}`}
          icon={<FaBehance />}
          colorScheme="facebook"
        />
        )}
      </HStack>
    </VStack>
  </FadeInUp>
);

export default CreditsContent;
