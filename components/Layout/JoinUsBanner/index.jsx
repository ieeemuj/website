import {
  Box, Button, Heading, HStack, Link, Text, VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ResponsiveContainer from '../ResponsiveContainer';

const JoinUsBanner = () => (
  <Box
    width="100%"
    paddingTop="32px"
    paddingBottom="64px"
  >
    <ResponsiveContainer>
      <HStack
        justify="space-evenly"
        wrap="wrap"
      >
        <VStack
          width={['100%', '100%', '100%', '100%', '80%']}
          alignItems="flex-start"
          marginBottom={['32px', '32px', '32px', '32px', '0px']}
        >
          <Heading
            width="100%"
            textAlign={['center', 'center', 'center', 'center', 'left', 'left']}
            color="brand.700"
            size="lg"
          >
            Discover what IEEE has to offer. Become a member.
          </Heading>
          <Text
            width="100%"
            textAlign={['center', 'center', 'center', 'center', 'left', 'left']}
            color="brand.500"
            fontSize="lg"
          >
            Be a part of a community that prepares you for college and beyond.
          </Text>
        </VStack>
        <NextLink
          href="/membership"
          passHref
        >
          <Button
            as={Link}
            bgColor="brand.700"
            boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
            padding="32px"
            rounded="lg"
            color="white"
            _hover={{
              border: 'none',
              textDecoration: 'none',
            }}
            _active={{
              border: 'none',
              boxShadow: 'none',
              transform: 'scale(0.97)',
            }}
            _focus={{
              border: 'none',
              boxShadow: 'none',
              bg: 'brand',
            }}
          >
            JOIN NOW
          </Button>
        </NextLink>
      </HStack>
    </ResponsiveContainer>

  </Box>
);

export default JoinUsBanner;
