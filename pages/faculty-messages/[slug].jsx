import React from 'react';
import {
  Image, Box, Heading, Text, Stack, VStack,
} from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import { NextSeo } from 'next-seo';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import { getAllFacultyMessageNameSlug, getFacultyMessageByUID } from '../../cms/queries/facultymsg';

const Facultymessages = ({ msgObj }) => (
  <main>
    <NextSeo
      title={msgObj.seo.title}
      description={msgObj.seo.description}
      canonical={`https://ieeemuj.com/faculty-messages/${msgObj.uid}`}
      openGraph={{
        description: msgObj.seo.description,
        images: [
          {
            height: msgObj.seo.image.dimensions.height,
            width: msgObj.seo.image.dimensions.width,
            url: msgObj.seo.image.url,
            alt: msgObj.seo.image.alt,
          },
        ],
      }}
    />
    <Section>
      <SectionHeader>
        <Heading
          width="100%"
          size="lg"
          textAlign="center"
        >
          {msgObj.name}
        </Heading>
        <Heading
          width="100%"
          textAlign="center"
          color="brand.500"
          size="sm"
        >
          {msgObj.position}
        </Heading>
      </SectionHeader>
      <SectionContent>
        <Stack
          direction={['column', 'column', 'column', 'column', 'row']}
          justify="center"
          align={['center', 'center', 'center', 'center', 'start']}
          spacing="10"
          fontSize="lg"
          textAlign={['center', 'center', 'center', 'center', 'left']}
        >
          <Image
            flexShrink="0"
            flexGrow="0"
            rounded="lg"
            width={msgObj.image.dimensions.width}
            height={msgObj.image.dimensions.height}
            src={msgObj.image.url}
            alt={msgObj.image.alt}
          />
          <VStack
            justify="space-between"
            spacing="10"
          >
            <Box
              width="100%"
            >
              {RichText.render(msgObj.message)}
            </Box>
            <Box
              width="100%"
            >
              <Box>
                <Text as="b">
                  {msgObj.name}

                </Text>
              </Box>
              <Box>
                <Text
                  as="b"
                >
                  {msgObj.position}
                </Text>
              </Box>
            </Box>
          </VStack>
        </Stack>
      </SectionContent>
    </Section>
  </main>
);

export async function getStaticProps({ params }) {
  const msgObj = (await getFacultyMessageByUID(params.slug));

  if (msgObj) {
    return {
      props: {
        msgObj,
      },
    };
  }
  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const [documents] = await getAllFacultyMessageNameSlug();

  return {
    paths: documents.map((slug) => `/faculty-messages/${slug}`),
    fallback: false,
  };
}

export default Facultymessages;
