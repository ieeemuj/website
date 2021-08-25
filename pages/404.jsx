import {
  Box, Heading, SimpleGrid, Link, Stack, Text, Image, Button,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import FadeInUp from '../components/FadeInUp';

import ResponsiveContainer from '../components/Layout/ResponsiveContainer';

function PageNotFound() {
  return (
    <>
      <NextSeo
        title="404"
        canonical="https://ieeemuj.com/404"
      />
      <ResponsiveContainer>
        <FadeInUp>
          <SimpleGrid
            columns={['1', '1', '1', '2', '2']}
            paddingY="64px"
          >
            <Box>
              <Image src="/imgs/9.png" />
            </Box>
            <Box>
              <Stack p="40px" spacing="60px">
                <Heading as="h1" size="xl" align="center" marginTop="30px">
                  Whoops !!
                </Heading>
                <Text align="center" fontSize="lg">
                  We can&apos;t seem to find the page you&apos;re looking for.
                </Text>
                <Text align="center" color="grey">
                  &lt;/ Error code : 404 Not Found &gt;
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
