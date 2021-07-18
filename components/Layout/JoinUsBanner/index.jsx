import {
  Box, Button, Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import ResponsiveContainer from '../ResponsiveContainer';

const JoinUsBanner = () => (
  <Box
    width="100%"
    paddingTop="32px"
    paddingBottom="32px"
    boxShadow="0px -10px 15px -15px rgb(0 0 0 / 25%)"
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
            color="brand.500"
          >
            What Are You Waiting For? Join Our Awesome Community
          </Heading>
          <Text
            width="100%"
            textAlign={['center', 'center', 'center', 'center', 'left', 'left']}
            color="brand.400"
            fontSize="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci
          </Text>
        </VStack>
        <Button
          rounded="xl"
          padding="32px"
          colorScheme="brand"
        >
          JOIN NOW
        </Button>
      </HStack>
    </ResponsiveContainer>

  </Box>
);

export default JoinUsBanner;
