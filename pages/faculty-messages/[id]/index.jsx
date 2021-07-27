import React from 'react';
import { Image, Box } from "@chakra-ui/react";
import ResponsiveContainer from '../../../components/Layout/ResponsiveContainer';
import { Heading, Text, Stack, } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";


const Facultymessages = () => (
    <ResponsiveContainer>
                <Heading marginTop="40px" marginBottom="20px" paddingBottom="5px" as="h2" size="md">
                    Dr.Sandeep Sancheti | Ex-President, Manipal University Jaipur
                </Heading>
                <Divider backgroundColor="black" height="0.7" />
             <Box marginTop="10px" rounded="md">
            <Stack direction={["column", "row"]} spacing="10">


                    <Text marginTop="40px" fontSize="lg">I am delighted to know that IEEE Student Branch and Branch Chapter at Manipal University Jaipur (MUJ) have started their own website. It is well known that the institute of Electrical and Electronics Engineers (IEEE) and its constituent societies from an indispensable part of the core of Electrical, Electronics, and Communication, computer science Engineering education all over the world.</Text>
                    <Box size="xl" width="auto">
                        
                    <Image
                        src="https://source.unsplash.com/random/650x650"
                        marginTop="12px"
                        border="solid 3px black"
                        />
                </Box>

            </Stack>
        </Box>
        <br />
        <Text fontSize="lg">Participation in various IEEE events and volunteering for professional activities are the best way to avail more opportunities to learn, network with people and get recognized. I am sure this interface with outside world through the new website would evoke good interest and response. In return, the student branch would be able to support more activities and events to engage its members and increase its visibility picking the global engineering fraternity.</Text>
        <br />
        <Text fontSize="lg">I wish IEEE student branch at MUJ a great success in all its endeavors.</Text>
        <br />
        <Text fontSize="lg" as="b">Prof.Sandeep</Text><br />
        <Text fontSize="lg" as="b">Manipal University Jaipur</Text><br />
        <Text fontSize="lg" as="b">Ex-President</Text><br />
        <br />

    </ResponsiveContainer>
);

export default Facultymessages;