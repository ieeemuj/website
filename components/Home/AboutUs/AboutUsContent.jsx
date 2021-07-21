import { HStack, VStack } from '@chakra-ui/react';
import AboutUsContentText from './AboutUsContentText';
import StatGroup from './StatGroup';

const AboutUsContent = ({ visionText, missionText, stats }) => (
  <HStack
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
    justify={['space-around', 'space-around', 'space-around', 'space-around', 'space-between']}
    wrap="wrap"
    flexGrow="1"
  >
    <StatGroup stats={stats} />
    <VStack
      spacing="10"
      justify="space-around"
      width={['100%', '100%', '100%', '100%', '55%']}
      height={['50%', '50%', '50%', '50%', '400px', '440px']}
    >
      <AboutUsContentText heading="Our Vision" text={visionText} />
      <AboutUsContentText heading="Our Mission" text={missionText} />
    </VStack>
  </HStack>
);

export default AboutUsContent;
