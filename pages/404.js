import react from "react";
import { Box } from "@chakra-ui/react";
import ResponsiveContainer from "../components/Layout/ResponsiveContainer";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
function PageNotFound() {
  return (
    <>
      <ResponsiveContainer>
        <br />
        <br />
        <SimpleGrid columns={["1", "1", "1", "2", "2"]}>
          <Box>
            <Image src="/imgs/9.png"></Image>
          </Box>
          <Box>
            <Stack p="40px" spacing="60px">
              <Heading size="xl" align="center" marginTop="30px">
                Whoops !!
              </Heading>
              <Text align="center" fontSize="lg">
                We can't seem to find the page you're looking for.
              </Text>
              <Text align="center" color="grey">
                &lt;/ Error code : 404 &gt;
              </Text>
              <Button>
                <Link href="/home/">Go Back Home</Link>
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
        <br />
        <br />
        <br />
      </ResponsiveContainer>
    </>
  );
}

export default PageNotFound;
