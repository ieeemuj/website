import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CreditsContent from "../../components/Credits/CreditsContent";
import CreditsHeader from "../../components/Credits/CreditsHeader";
import Section from "../../components/Home/Section";
import SectionContent from "../../components/Home/Section/SectionContent";
import SectionHeader from "../../components/Home/Section/SectionHeader";

const Credits = () => {
    const teamData = [
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
        {
            name: "Lorem Ipsum",
            title: "Error ab perspicitias",
            linkedIn: "#",
            insta: "#",
            facebook: "#"
        },
    ]
    return(
        <main>
            {/* Tech stack used Section */}
            <Section>
                <SectionHeader>
                    <CreditsHeader heading="Tech Stack Used" subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
                </SectionHeader>
                <SectionContent>
                    <Box paddingX={["2.4em", "6em", "6em", "7em", "8em"]} marginBottom="10">
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                    </Text> 
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium magnam rerum nihil assumenda! Delectus numquam harum necessitatibus culpa non atque error. 
                        Ea quae, tempora vero excepturi itaque explicabo quasi officiis!
                    </Text>
                    </Box>
                </SectionContent>
            </Section>
            {/* Credit section */}
            <Section>
                <SectionHeader>
                    <CreditsHeader heading="Get to Know The Team" subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
                </SectionHeader>
                <SectionContent>
                    {teamData.map((teamMember, index) => (
                        <CreditsContent
                            key      = {index}
                            name     = {teamMember.name}
                            title    = {teamMember.title}
                            linkedIn = {teamMember.linkedIn}
                            insta    = {teamMember.insta}
                            facebook = {teamMember.facebook}
                        />
                    ))}
                    
                    
                    
                    
                </SectionContent>
            </Section>
        </main>
    )
}

export default Credits;