import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Box, SimpleGrid,
} from '@chakra-ui/react';
import CreditsContent from '../Credits/CreditsContent';

const TeamsContent = ({
  faculty, ieeeSB, ieeeCS, ieeeWIE,
}) => {
  const minH = (Math.max(
    faculty.length,
    ieeeSB.length,
    ieeeCS.length,
    ieeeWIE.length,
  ) / 3) * 250;
  return (
    <Box>
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ outline: 'none' }}>Faculty</Tab>
          <Tab _focus={{ outline: 'none' }}>IEEE SB MUJ</Tab>
          <Tab _focus={{ outline: 'none' }}>IEEE CS Society</Tab>
          <Tab _focus={{ outline: 'none' }}>IEEE WIE</Tab>
        </TabList>
        <TabPanels
          minH={`${minH}px`}
        >
          <TabPanel>
            <SimpleGrid
              columns={['1', '1', '2', '2', '3']}
              height="100%"
              width="100%"
              gap="10"
              alignItems="center"
              wrap="wrap"
            >
              {faculty.map((facultyMember) => (
                <CreditsContent
                  key={facultyMember.name}
                  name={facultyMember.name}
                  title={facultyMember.title}
                  linkedIn={facultyMember.linkedIn}
                  insta={facultyMember.insta}
                  facebook={facultyMember.facebook}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={['1', '1', '2', '2', '3']}
              height="100%"
              width="100%"
              gap="10"
              alignItems="center"
              wrap="wrap"
            >
              {ieeeSB.map((ieeeSBMember) => (
                <CreditsContent
                  key={ieeeSBMember.name}
                  name={ieeeSBMember.name}
                  title={ieeeSBMember.title}
                  linkedIn={ieeeSBMember.linkedIn}
                  insta={ieeeSBMember.insta}
                  facebook={ieeeSBMember.facebook}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={['1', '1', '2', '2', '3']}
              height="100%"
              width="100%"
              gap="10"
              alignItems="center"
              wrap="wrap"
            >
              {ieeeCS.map((ieeeCSMember) => (
                <CreditsContent
                  key={ieeeCSMember.name}
                  name={ieeeCSMember.name}
                  title={ieeeCSMember.title}
                  linkedIn={ieeeCSMember.linkedIn}
                  insta={ieeeCSMember.insta}
                  facebook={ieeeCSMember.facebook}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={['1', '1', '2', '2', '3']}
              height="100%"
              width="100%"
              gap="10"
              alignItems="center"
              wrap="wrap"
            >
              {ieeeWIE.map((ieeeWIEMember) => (
                <CreditsContent
                  key={ieeeWIEMember.name}
                  name={ieeeWIEMember.name}
                  title={ieeeWIEMember.title}
                  linkedIn={ieeeWIEMember.linkedIn}
                  insta={ieeeWIEMember.insta}
                  facebook={ieeeWIEMember.facebook}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TeamsContent;
