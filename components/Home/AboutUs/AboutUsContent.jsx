import {
  Stack, Text, VStack,
} from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import AboutUsContentText from './AboutUsContentText';
import StatGroup from './StatGroup';

import styles from '../../../styles/Navbar.module.css';

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
      <a
        className={styles.underLineAnimation}
        href="https://www.ieee.org/"
        aria-label="id"
        target="_blank"
        rel="noreferrer"
      >
        <Text
          color="brand.500"
          size="sm"
          fontWeight="bold"
        >
          Learn more at ieee.org
        </Text>
      </a>
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
