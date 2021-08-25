import {
  Stack, VStack,
} from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import AboutUsContentText from './AboutUsContentText';
import StatGroup from './StatGroup';

import NextLink from '../../NextLink';

const AboutUsContent = ({
  aboutIEEE, aboutIEEESBMUJ, visionText, missionText, stats,
}) => (
  <VStack
    spacing="10"
  >
    <VStack
      width="100%"
      spacing="5"
      textAlign="center"
    >
      {RichText.render(aboutIEEE)}
      <NextLink
        to="https://ieee.org/"
        color="brand.500"
        fontWeight="bold"
      >
        Learn more at ieee.org
      </NextLink>
    </VStack>
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
        height={['50%', '50%', '50%', '50%', '100%', '100%']}
      >
        <AboutUsContentText heading="About IEEE SB MUJ" text={aboutIEEESBMUJ} />
        <AboutUsContentText heading="Our Vision" text={visionText} />
        <AboutUsContentText heading="Our Mission" text={missionText} />
      </VStack>
    </Stack>
  </VStack>
);

export default AboutUsContent;
