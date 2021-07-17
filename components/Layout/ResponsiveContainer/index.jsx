import { Container } from '@chakra-ui/react';

const ResponsiveContainer = ({ children }) => (
  <Container maxW={['95%', '90%', '85%', '90%', '85%', '70%']}>
    {children}
  </Container>
);

export default ResponsiveContainer;
