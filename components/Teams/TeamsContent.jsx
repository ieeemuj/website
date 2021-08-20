import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box, Divider,
} from '@chakra-ui/react';
import TeamsSection from './TeamsSection';

const TeamsContent = ({
  teamsData,
}) => (
  <Box>
    <Tabs
      defaultIndex={1}
      isFitted
    >
      <TabList>
        <Tab
          _focus={{ outline: 'none' }}
        >
          Faculty
        </Tab>
        <Tab
          _focus={{ outline: 'none' }}
        >
          IEEE SB MUJ
        </Tab>
        <Tab
          _focus={{ outline: 'none' }}
        >
          IEEE CS Society
        </Tab>
        <Tab
          _focus={{ outline: 'none' }}
        >
          IEEE WIE
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TeamsSection
            data={teamsData.ecSb}
          />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecSb}
          />
          <Divider />
          <TeamsSection
            heading="Core Committee"
            data={teamsData.ccSb}
          />
          <Divider />
          <TeamsSection
            heading="Operating Committee"
            data={teamsData.ocSb}
          />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecCs}
          />
          <Divider />
          <TeamsSection
            heading="Core Committee"
            data={teamsData.ccCs}
          />
          <Divider />
          <TeamsSection
            heading="Technical Team"
            data={teamsData.ttCS}
          />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecWie}
          />
          <Divider />
          <TeamsSection
            heading="Core Committee"
            data={teamsData.ccWie}
          />
          <Divider />
          <TeamsSection
            heading="Operating Committee"
            data={teamsData.ocWie}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default TeamsContent;
