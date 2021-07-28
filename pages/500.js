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
            <Image src="/imgs/pg500.png"></Image>
          </Box>
          <Box>
            <Stack p="50px" spacing="60px">
              <Heading size="xl" align="center" marginTop="50px">
                OHH RATS !!
              </Heading>
              <Text align="center" fontSize="lg">
                Something here caused an Internal Server Error
              </Text>
              <Text align="center" color="grey">
                &lt;/ Error code : 500 &gt;
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
