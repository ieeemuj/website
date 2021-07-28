import React from 'react';
import {
  Flex, VStack, Heading, Text,
} from '@chakra-ui/react';
import ResponsiveContainer from '../Layout/ResponsiveContainer';

const Header = ({ title, subtitle }) => (
  <header>
    <Flex w="100%" h="30vh" bg="brand.700" color="gray.50" justify="flex-start" align="center">
      <ResponsiveContainer>
        <VStack>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Text color="gray.500">
            {subtitle}
          </Text>
        </VStack>
      </ResponsiveContainer>

    </Flex>
  </header>
);

export default Header;
