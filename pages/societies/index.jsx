import React from 'react';
import { Heading,  Box, Text, Button} from "@chakra-ui/react";
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
            imgMarginTop: "2.5em",
            imgMarginRight: "8em"
        },
    ]
    return (
        <main>
            <Section>
                <SectionHeader>
                    <SocietiesHeader heading="Societies"/>
                </SectionHeader>
                <SectionContent>
                    <Box 
                        as = "a"
                        href = "#cs"
                        minWidth="md" 
                        maxW="md"
                        p="5" 
                        borderWidth="1px" 
                        rounded="md" 
                        borderColor ="brand.500" 
                        textAlign="center" 
                        display="inline-block"
                        minH={455}
                        boxShadow ="md"
                        position= "relative"
                    >
                        <Heading marginTop="3em" marginBottom="18" >
                            IEEE CS Society
                        </Heading>
                        <Text fontSize="lg" >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quae blanditiis ipsum aut vero atque doloribus rem eum neque, 
                            voluptates deleniti. Iusto laudantium dolorum consequuntur quae 
                            nam magni, omnis obcaecati dolores?
                        </Text>
                        <Button marginTop= "12" color="brand.500" href="#cs_society">Read More</Button>
                    </Box>
                    <Box 
                        as = "a"
                        href = "#"
                        cursor = "pointer"
                        minWidth= "md"
                        maxW="md"
                        p="5"
                        borderWidth="1px" 
                        rounded="md" 
                        borderColor ="brand.500" 
                        textAlign="center"
                        display="inline-block"
                        float = "right"
                        minH={455}
                        boxShadow ="md"
                        >
                        <Heading  marginTop="3em" marginBottom="18">
                            IEEE WIE
                        </Heading>
                        <Text fontSize="lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quae blanditiis ipsum aut vero atque doloribus rem eum neque, 
                            voluptates deleniti. Iusto laudantium dolorum consequuntur quae 
                            nam magni, omnis obcaecati dolores?
                        </Text>
                            <Button marginTop= "12" color="brand.500">Read More</Button>
                    </Box>
                </SectionContent>
            </Section>
            {sectionData.map((item, index) => (
                <Section key={index}>
                    <SectionHeader>
                        <SocietiesHeader 
                            heading = {item.heading}
                            headingColor = {item.headingColor}
                            subHeading = {item.subHeading}
                            subHeadingColor = {item.subHeadingColor}/>
                    </SectionHeader>
                    <SectionContent>
                        <SocietiesContent
                            altText        = {item.heading}
                            titleQues      = {item.titleQues}
                            alignText      = {item.alignText}
                            alignImg       = {item.alignImg}
                            dividerBg      = {item.dividerBg}  
                            instaUrl       = {item.instaUrl}
                            twitterUrl     = {item.twitterUrl}
                            linkedInUrl    = {item.linkedInUrl}
                            imgSrc         = {item.imgSrc}
                            imgMarginTop   = {item.imgMarginTop} 
                            imgMarginRight = {item.imgMarginRight}
                        />
                    </SectionContent>
                </Section>
            ))}
        </main>
    )
};

export default Societies;
