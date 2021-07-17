import { HStack, VStack } from '@chakra-ui/react';
import AboutUsContentText from './AboutUsContentText';
import StatPlaceholder from './StatPlaceholder';

const AboutUsContent = () => (
  <HStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
    justify={['space-around', 'space-around', 'space-around', 'space-around', 'space-between']}
    wrap="wrap"
    height="100%"
    flexGrow="1"
  >
    <VStack
      marginBottom={['32px', '32px', '32px', '32px', '0px']}
      justify="space-around"
      width={['100%', '100%', '100%', '100%', '60%']}
      height={['50%', '50%', '50%', '50%', '400px', '480px']}
    >
      <AboutUsContentText />
      <AboutUsContentText />
    </VStack>
    <StatPlaceholder />
  </HStack>
);

export default AboutUsContent;
