import {
  Stack, Text, VStack,
} from '@chakra-ui/react';
import AboutUsContentText from './AboutUsContentText';
import StatGroup from './StatGroup';

import styles from '../../../styles/Navbar.module.css';

const AboutUsContent = ({ visionText, missionText, stats }) => (
  <VStack
    spacing="10"
  >
    <VStack
      width="100%"
      spacing="5"
      textAlign="center"
    >
      <Text>
        IEEE is the world’s largest technical professional organization
        dedicated to advancing technology for the benefit of humanity.
      </Text>
      <Text>
        IEEE and its members inspire a global community to innovate for a better tomorrow
        through its more than 400,000 members in over 160 countries, and its highly cited
        publications, conferences, technology standards, and professional and educational
        activities.
        IEEE is the trusted “voice” for engineering, computing, and technology information
        around the globe.
      </Text>
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
        height={['50%', '50%', '50%', '50%', '400px', '440px']}
      >
        <AboutUsContentText heading="About IEEE SB MUJ" text={visionText} />
        <AboutUsContentText heading="Our Vision" text={visionText} />
        <AboutUsContentText heading="Our Mission" text={missionText} />
      </VStack>
    </Stack>
  </VStack>
);

export default AboutUsContent;
