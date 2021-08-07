import React from "react"
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import {Heading,CircularProgress,Center} from "@chakra-ui/react"
import BlogComponent from "../../components/Blogs/index"
import BlogMockData from "../../constants/BlogMockData"

const Blogs=()=>{
console.log(BlogMockData.length)
    return(
       <main>
           <Section bg="whitesmoke">
               <SectionHeader>
               <Heading
                as="h6"
                width="100%"
                size="lg"
                padding={4}
                textAlign="center"
                >
                    Blogs
                </Heading>
               </SectionHeader>
               <SectionContent>
                 {
                     !BlogMockData.length?
                     <Center>
                     <CircularProgress isIndeterminate color="blue.600"/>
                     </Center>
                     :(
                        BlogMockData.map(props=><BlogComponent props={props}/>)
                     )
                 }
               </SectionContent>
           </Section>
       </main>
    )
}

export default Blogs