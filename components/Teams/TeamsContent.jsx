import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading,
} from '@chakra-ui/react';
import TeamsGrid from './TeamsGrid';

const TeamsContent = ({
  teamsData,
}) => (
  <Box>
    <Tabs isFitted>
      <TabList>
        <Tab _focus={{ outline: 'none' }}>Faculty</Tab>
        <Tab _focus={{ outline: 'none' }}>IEEE SB MUJ</Tab>
        <Tab _focus={{ outline: 'none' }}>IEEE CS Society</Tab>
        <Tab _focus={{ outline: 'none' }}>IEEE WIE</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TeamsGrid members={teamsData.ecWie} />
        </TabPanel>
        <TabPanel>
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Executive Committee
          </Heading>
          <TeamsGrid members={teamsData.ecWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Core Committee
          </Heading>
          <TeamsGrid members={teamsData.ccWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Operating Committee
          </Heading>
          <TeamsGrid members={teamsData.ocWie} />
        </TabPanel>
        <TabPanel>
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Executive Committee
          </Heading>
          <TeamsGrid members={teamsData.ecWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Core Committee
          </Heading>
          <TeamsGrid members={teamsData.ccWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Operating Committee
          </Heading>
          <TeamsGrid members={teamsData.ocWie} />
        </TabPanel>
        <TabPanel>
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Executive Committee
          </Heading>
          <TeamsGrid members={teamsData.ecWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Core Committee
          </Heading>
          <TeamsGrid members={teamsData.ccWie} />
          <Heading
            as="h6"
            width="100%"
            size="md"
            padding={4}
            textAlign="center"
          >
            Operating Committee
          </Heading>
          <TeamsGrid members={teamsData.ocWie} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default TeamsContent;
