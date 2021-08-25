import {
  Box, Heading, Text, Image, Link, Button, Stack, HStack,
} from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const SocietiesContent = ({
  society, reverse,
}) => {
  const direction = reverse ? 'row-reverse' : 'row';
  return (
    <Stack
      direction={['column', 'column', 'column', 'column', direction]}
      spacing="2"
      alignItems="flex-start"
      justify="space-between"
    >
      <Box
        marginX="6"
        maxW="300px"
        display={['block', 'block', 'inline', 'inline-block', 'inline-block']}
      >
        <Image
          borderRadius="md"
          src={society.logo.url}
          alt={society.logo.alt}
          paddingBottom="20px"
        />
      </Box>
      <Box
        width={['100%', '100%', '100%', '100%', '100%']}
        paddingX="6"
      >
        <Heading
          size="md"
          marginBottom="4"
        >
          {society.name}
        </Heading>
        <Text>
          {RichText.render(society.description)}
        </Text>
        <HStack
          spacing="1"
          marginTop="1em"
        >
          {society.website && (
            <Link
              target="_blank"
              href={society.website.url}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                colorScheme="twitter"
                variant="ghost"
                size="sm"
                rounded="full"
              >
                Website
              </Button>
            </Link>
          )}
          {society.instagram && (
            <Link
              target="_blank"
              href={society.instagram.url}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                colorScheme="pink"
                variant="ghost"
                size="sm"
                rounded="full"
                w="10"
                h="10"
              >
                <FaInstagram />
              </Button>
            </Link>
          )}
          {society.linkedin && (
            <Link
              target="_blank"
              href={society.linkedin.url}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                colorScheme="linkedin"
                variant="ghost"
                size="sm"
                rounded="full"
                w="10"
                h="10"
              >
                <FaLinkedinIn />
              </Button>
            </Link>
          )}
        </HStack>
      </Box>
    </Stack>
  );
};

export default SocietiesContent;
