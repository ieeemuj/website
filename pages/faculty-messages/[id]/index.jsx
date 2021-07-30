import React from 'react';
import {
  Image, Box, Heading, Text, Stack, Divider, VStack,
} from '@chakra-ui/react';
import Section from '../../../components/Home/Section';
import ResponsiveContainer from '../../../components/Layout/ResponsiveContainer';
import SectionHeader from '../../../components/Home/Section/SectionHeader';
import SectionContent from '../../../components/Home/Section/SectionContent';

const Facultymessages = () => (
  <Section>
    <SectionHeader>
      <Heading
        width="100%"
        size="lg"
        textAlign="center"
      >
        Dr.Sandeep Sancheti
      </Heading>
      <Heading
        width="100%"
        textAlign="center"
        color="brand.500"
        size="sm"
      >
        Ex-President, Manipal University Jaipur
      </Heading>
    </SectionHeader>
    <SectionContent>
      <Stack
        direction={['column', 'column', 'column', 'column', 'row']}
        justify="center"
        align="center"
        spacing="10"
        fontSize="lg"
        textAlign={['center', 'center', 'center', 'center', 'left']}
      >
        <Image
          rounded="lg"
          width="320px"
          height="320px"
          src="https://source.unsplash.com/random/650x650"
        />
        <VStack
          justify="space-between"
          spacing="10"
        >
          <Box
            width="100%"
          >
            <Text>
              I am delighted to know that IEEE Student Branch and Branch Chapter at Manipal
              University
              Jaipur (MUJ) have started their own website. It is well known that the institute of
              Electrical and Electronics Engineers (IEEE) and its constituent societies from an
              indispensable part of the core of Electrical, Electronics, and Communication,
              computer science Engineering education all over the world.
            </Text>
            <Text>
              Participation in various IEEE events and volunteering for professional activities are
              the best way to avail more opportunities to learn, network with people and get
              recognized.
              I am sure this interface with outside world through the new website would evoke good
              interest
              and response. In return, the student branch would be able to support more activities
              and
              events to engage its members and increase its visibility picking the global
              engineering
              fraternity.
            </Text>
            <Text>
              I wish IEEE student branch at MUJ a great success in all its endeavors.
            </Text>
          </Box>
          <Box
            width="100%"
          >
            <Box>
              <Text as="b">
                Prof. Sandeep
              </Text>
            </Box>
            <Box>
              <Text
                as="b"
              >
                Ex-President, Manipal University Jaipur
              </Text>
            </Box>
          </Box>
        </VStack>
      </Stack>
    </SectionContent>
  </Section>
  //   <ResponsiveContainer>
  //     <Box
  //       size="xl"
  //       width="auto"
  //     >
  //       <Image
  //         src="https://source.unsplash.com/random/650x650"
  //         marginTop="12px"
  //         border="solid 3px black"
  //       />
  //     </Box>

  //     <Heading
  //       marginTop="40px"
  //       marginBottom="20px"
  //       paddingBottom="5px"
  //       as="h2"
  //       size="md"
  //     >
  //       Dr.Sandeep Sancheti | Ex-President, Manipal University Jaipur
  //     </Heading>
  //     <Divider
  //       backgroundColor="black"
  //       height="0.7"
  //     />
  //     <Box
  //       marginTop="10px"
  //       rounded="md"
  //     >

  //       <Text
  //         marginTop="40px"
  //         fontSize="lg"
  //       >
  //         I am delighted to know that IEEE Student Branch and Branch Chapter at Manipal University
  //         Jaipur (MUJ) have started their own website. It is well known that the institute of
  //         Electrical and Electronics Engineers (IEEE) and its constituent societies from an
  //         indispensable part of the core of Electrical, Electronics, and Communication,
  //         computer science Engineering education all over the world.
  //       </Text>
  //       <Text
  //         fontSize="lg"
  //       >
  //         Participation in various IEEE events and volunteering for professional activities are
  //         the best way to avail more opportunities to learn, network with people and get recognized.
  //         I am sure this interface with outside world through the new website would evoke good interest
  //         and response. In return, the student branch would be able to support more activities and
  //         events to engage its members and increase its visibility picking the global engineering
  //         fraternity.
  //       </Text>
  //       <Text
  //         fontSize="lg"
  //       >
  //         I wish IEEE student branch at MUJ a great success in all its endeavors.
  //       </Text>
  //       <Text
  //         fontSize="lg"
  //         as="b"
  //       >
  //         Prof.Sandeep
  //       </Text>
  //       <Text
  //         fontSize="lg"
  //         as="b"
  //       >
  //         Manipal University Jaipur
  //       </Text>
  //       <Text
  //         fontSize="lg"
  //         as="b"
  //       >
  //         Ex-President
  //       </Text>
  //     </Box>

//   </ResponsiveContainer>
);

export default Facultymessages;
