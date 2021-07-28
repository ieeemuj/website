import React from 'react';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import CreditsHeader from "../../components/Credits/CreditsHeader";
import TeamsContent from '../../components/Teams/TeamsContent';

const AboutUs = () => {
    const faculty = [
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
    ];
    const ieeeSB = [
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
    ];
    const ieeeCS = [
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
    ];
    const ieeeWIE = [
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
    return (
        <main>
            <Section>
                <SectionContent>
                    <TeamsContent faculty={faculty} ieeeCS={ieeeCS} ieeeSB= {ieeeSB} ieeeWIE={ieeeWIE}/>
                </SectionContent>
            </Section>
        </main>
    )
}

export default AboutUs;
