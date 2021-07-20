import { HStack, VStack } from '@chakra-ui/react';
import AboutUsContentText from './AboutUsContentText';
import StatPlaceholder from './StatPlaceholder';

const AboutUsContent = () => (
  <HStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
    justify={['space-around', 'space-around', 'space-around', 'space-around', 'space-between']}
    wrap="wrap"
    flexGrow="1"
  >
    <StatPlaceholder />
    <VStack
      spacing="10"
      marginTop={['48px', '48px', '48px', '48px', '0px']}
      justify="space-around"
      width={['100%', '100%', '100%', '100%', '55%']}
      height={['50%', '50%', '50%', '50%', '400px', '440px']}
    >
      <AboutUsContentText />
      <AboutUsContentText />
    </VStack>
  </HStack>
);

export default AboutUsContent;
