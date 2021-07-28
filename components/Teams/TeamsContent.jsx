import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import CreditsContent from "../Credits/CreditsContent";
import CreditsHeader from "../Credits/CreditsHeader";

const TeamsContent = ({faculty, ieeeSB, ieeeCS, ieeeWIE}) => {
    return( 
        <Box>
            <Tabs isFitted>
                <TabList>
                    <Tab _focus={{ outline: "none" }}>Faculty</Tab>
                    <Tab _focus={{ outline: "none" }}>IEEE SB MUJ</Tab>
                    <Tab _focus={{ outline: "none" }}>IEEE CS Society</Tab>
                    <Tab _focus={{ outline: "none" }}>IEEE WIE</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <CreditsHeader marginY="2" heading="The Faculty Members" subHeading="Lorem ipsum Dolorem reprehenderit, voluptatum eos"/>
                        {faculty.map((facultyMember, index) => (
                            <CreditsContent 
                                key      = {index}
                                name     = {facultyMember.name}
                                title    = {facultyMember.title}
                                linkedIn = {facultyMember.linkedIn}
                                insta    = {facultyMember.insta}
                                facebook = {facultyMember.facebook}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        <CreditsHeader marginY="2" heading="IEEE Student Team" subHeading="Lorem ipsum lorem reprehenderit, voluptatum eos"/>
                        {ieeeSB.map((ieeeSBMember, index) => (
                            <CreditsContent 
                                key      = {index}
                                name     = {ieeeSBMember.name}
                                title    = {ieeeSBMember.title}
                                linkedIn = {ieeeSBMember.linkedIn}
                                insta    = {ieeeSBMember.insta}
                                facebook = {ieeeSBMember.facebook}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        <CreditsHeader marginY="2" heading="IEEE CS Society Team" subHeading="Lorem ipsum lorem reprehenderit, voluptatum eos"/>
                        {ieeeCS.map((ieeeCSMember, index) => (
                            <CreditsContent 
                                key      = {index}
                                name     = {ieeeCSMember.name}
                                title    = {ieeeCSMember.title}
                                linkedIn = {ieeeCSMember.linkedIn}
                                insta    = {ieeeCSMember.insta}
                                facebook = {ieeeCSMember.facebook}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        <CreditsHeader marginY="2" heading="IEEE WIE Team" subHeading="Lorem ipsum lorem reprehenderit, voluptatum eos"/>
                        {ieeeWIE.map((ieeeWIEMember, index) => (
                            <CreditsContent 
                                key      = {index}
                                name     = {ieeeWIEMember.name}
                                title    = {ieeeWIEMember.title}
                                linkedIn = {ieeeWIEMember.linkedIn}
                                insta    = {ieeeWIEMember.insta}
                                facebook = {ieeeWIEMember.facebook}
                            />
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default TeamsContent;