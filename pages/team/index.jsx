import { useState } from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, SimpleGrid, Text, Flex } from "@chakra-ui/react";

import TeamMemberCard from '../../components/Teams/Member';

const Teams = () => {

    const colors = useColorModeValue(
        ["gray.200", "purple.200", "blue.200", "pink.100"],
        ["gray.400", "green.400", "blue.400", "pink.400"]
    )
    
    const [tabIndex, setTabIndex] = useState(0)
    
    const bg = colors[tabIndex]
    
    return (
        <main>
            <Flex align="center" justify="center" direction="column" h="96" backgroundImage="url('https://bit.ly/3rrQgkk')" borderRadius="1rem" boxSizing="border-box" marginBottom="2rem" marginX="8rem">
                <Text fontSize="5xl" fontWeight="extrabold" color="gray.50">Team</Text>
                <Text fontSize="2xl" fontWeight="normal" color="gray.50">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
            </Flex>
            <Tabs onChange={(index) => setTabIndex(index)} bg={bg} isFitted variant="enclosed">
                <TabList>
                    <Tab fontSize={18} fontWeight='bold' py="0.8rem" border="1px" borderColor="gray.500">FACULTY</Tab>
                    <Tab fontSize={18} fontWeight='bold' py="0.8rem" border="1px" borderColor="gray.500">IEEE CS SOCIETY</Tab>
                    <Tab fontSize={18} fontWeight='bold' py="0.8rem" border="1px" borderColor="gray.500">IEEE SB MUJ</Tab>
                    <Tab fontSize={18} fontWeight='bold' py="0.8rem" border="1px" borderColor="gray.500">IEEE WIE</Tab>
                </TabList>
                <TabPanels py="4rem" px="8rem">
                    <TabPanel>
                        <SimpleGrid columns={3} spacing={10} marginBottom={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                        <SimpleGrid columns={5} spacing={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={3} spacing={10} marginBottom={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                        <SimpleGrid columns={5} spacing={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={3} spacing={10} marginBottom={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                        <SimpleGrid columns={5} spacing={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={3} spacing={10} marginBottom={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                        <SimpleGrid columns={5} spacing={10}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </SimpleGrid>
                    </TabPanel>
            </TabPanels>
            </Tabs>
        </main>

)};

export default Teams;
