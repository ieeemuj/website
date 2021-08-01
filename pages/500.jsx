import {
  Box, Heading, SimpleGrid, Link, Stack, Text, Image, Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import FadeInUp from '../components/FadeInUp';

import ResponsiveContainer from '../components/Layout/ResponsiveContainer';

function PageNotFound() {
  return (
    <>
      <ResponsiveContainer>
        <FadeInUp>
          <SimpleGrid
            columns={['1', '1', '1', '2', '2']}
            paddingY="64px"
          >
            <Box>
              <Image src="/imgs/pg500.png" />
            </Box>
            <Box>
              <Stack p="50px" spacing="60px">
                <Heading size="xl" align="center" marginTop="50px">
                  OHH RATS !!
                </Heading>
                <Text align="center" fontSize="lg">
                  Something went wrong on our side.
                </Text>
                <Text align="center" color="grey">
                  &lt;/ Error code : 500 Internal Server Error &gt;
                </Text>
                <NextLink
                  href="/"
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
                    GO BACK TO HOME
                  </Button>
                </NextLink>
              </Stack>
            </Box>
          </SimpleGrid>
        </FadeInUp>
      </ResponsiveContainer>
    </>
  );
}

export default PageNotFound;
