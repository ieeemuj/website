import React from "react";
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
            <Section>
                <SectionHeader>
                    <CreditsHeader heading="Get to Know The Team" subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                </SectionHeader>
                <SectionContent>
                    {teamData.map((teamMember) => (
                        <CreditsContent
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