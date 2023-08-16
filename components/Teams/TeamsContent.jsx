import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Divider,
} from "@chakra-ui/react";
import TeamsSection from "./TeamsSection";
import FilterDropdown from "../Events/EventControl/FilterDropdown";

const TeamsContent = ({ teamsData }) => {
  const [yearState, setYearState] = useState("2023");

  return (
    <Box>
      <Tabs defaultIndex={1} isFitted>
        <TabList>
          <Tab _focus={{ outline: "none" }}>Advisory</Tab>
          <Tab _focus={{ outline: "none" }}>IEEE SB MUJ</Tab>
          <Tab _focus={{ outline: "none" }}>IEEE CS Society</Tab>
          <Tab _focus={{ outline: "none" }}>IEEE WIE</Tab>
        </TabList>
        <Box display="flex" justifyContent="flex-end" width="100%">
  <Box justifySelf="flex-end" width="35%" alignSelf="flex-end">
    <FilterDropdown
      width="100%"
      items={[2022, 2023]}
      initialValue="2023"
      onChange={setYearState}
    />
  </Box>
</Box>

        <TabPanels>
          <TabPanel>
            <TeamsSection
              heading="Faculty"
              yearState={yearState}
              data={teamsData.faculty}
            />
            <TeamsSection
              heading="Advisors"
              yearState={yearState}
              data={teamsData.advisors}
            />
          </TabPanel>
          <TabPanel>
            <TeamsSection
              heading="Executive Committee"
              data={teamsData.ecSb}
              yearState={yearState}
              ec="true"
            />
            <Divider />
            
            <TeamsSection
              heading="Core Committee"
              yearState={yearState}
              data={teamsData.ccSb}
            />
            <Divider />
            <TeamsSection
              heading="Operating Committee"
              yearState={yearState}
              data={teamsData.ocSb}
            />
          </TabPanel>
          <TabPanel>
            <TeamsSection
              heading="Executive Committee"
              yearState={yearState}
              data={teamsData.ecCs}
              ec="true"
            />
            <Divider />
            <TeamsSection
              heading="MUJ Central Developers Team"
              yearState={yearState}
              data={teamsData.ttCS}
            />
            <Divider />
            <TeamsSection
              heading="Core Committee"
              yearState={yearState}
              data={teamsData.ccCs}
            />
          </TabPanel>
          <TabPanel>
            <TeamsSection
              heading="Executive Committee"
              yearState={yearState}
              data={teamsData.ecWie}
              ec="true"
            />
            <Divider />
            <TeamsSection
              heading="Core Committee"
              data={teamsData.ccWie}
              yearState={yearState}
            />
            <Divider />
            <TeamsSection
              heading="Operating Committee"
              data={teamsData.ocWie}
              yearState={yearState}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TeamsContent;