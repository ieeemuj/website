import React from 'react';
import { Heading,  Box, Text, Button, Divider} from "@chakra-ui/react";
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import SocietiesHeader from '../../components/Societies/SocietiesHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import SocietiesContent from '../../components/Societies/SocietiesContent';

const Societies = () =>{ 
    const sectionData =[
        {
            heading:"IEEE CS Society",
            headingColor: "#f89a0f" ,
            subHeading:"Iusto laudantium dolorum consequuntur quae", 
            subHeadingColor:"#DBB81A",
            titleQues:"Lorem ipsum dolor sit, amet consectetur" ,
            alignText: "right" ,
            alignImg: "left",
            dividerBg : "#FF8427",
            instaUrl: "#",
            linkedInUrl: "#",
            twitterUrl: "#",
            imgSrc: "/svg/ieee_cs_logo.svg",
            imgMarginTop: "5em"
        },
        {
            heading:"IEEE WIE",
            headingColor: "#6c258c" ,
            subHeading:"Quae blanditiis ipsum aut vero atque doloribus", 
            subHeadingColor:"#F04273",
            titleQues:"Lorem ipsum dolor sit, amet consectetur" ,
            alignText: "left" ,
            alignImg: "right",
            dividerBg : "#D11149",
            instaUrl: "#",
            linkedInUrl: "#",
            twitterUrl: "#",
            imgSrc: "/svg/ieee_wie_logo.svg",
            imgMarginTop: "3em",
            imgMarginRight: "8em"
        },
    ]
    return (
        <main>
            {sectionData.map((item, index) => (
                <Section key={index}>
                    <SectionHeader>
                        <SocietiesHeader 
                            heading = {item.heading}
                            headingColor = {item.headingColor}
                            subHeading = {item.subHeading}
                            subHeadingColor = {item.subHeadingColor}/>
                    </SectionHeader>
                    <Divider backgroundColor={item.dividerBg} height="0.7"/>
                    <SectionContent>
                        <SocietiesContent
                            altText        = {item.heading}
                            titleQues      = {item.titleQues}
                            alignText      = {item.alignText}
                            alignImg       = {item.alignImg}
                            instaUrl       = {item.instaUrl}
                            twitterUrl     = {item.twitterUrl}
                            linkedInUrl    = {item.linkedInUrl}
                            imgSrc         = {item.imgSrc}
                            imgMarginTop   = {item.imgMarginTop} 
                            imgMarginRight = {item.imgMarginRight}
                        />
                    </SectionContent>
                    <Divider backgroundColor={item.dividerBg} height="0.7"/>
                </Section>
            ))}
        </main>
    )
};

export default Societies;
