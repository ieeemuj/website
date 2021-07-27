import { Stack, VStack } from '@chakra-ui/react';
import AboutUsContentText from './AboutUsContentText';
import StatGroup from './StatGroup';

const AboutUsContent = ({ visionText, missionText, stats }) => (
  <Stack
    direction={['column', 'column', 'column', 'column', 'row']}
    alignItems={['center', 'center', 'center', 'center', 'flex-start']}
    justify="space-around"
    spacing="10"
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
  </Stack>
);

export default AboutUsContent;
