import React from 'react';
import {
  Heading, Image, SimpleGrid, Wrap,
} from '@chakra-ui/react';
import CreditsContent from '../../components/Credits/CreditsContent';
import CreditsHeader from '../../components/Credits/CreditsHeader';
import Section from '../../components/Home/Section';
import SectionContent from '../../components/Home/Section/SectionContent';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';
import getCreditsData from '../../cms/queries/credits';

const Credits = ({ creditsData }) => (
  <main>
    <TitleHeader>
      <FadeInUp>
        <Heading
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          Website Team & Credits
        </Heading>
      </FadeInUp>
    </TitleHeader>
    <Section>
      <FadeInUp>
        <SectionHeader>
          <CreditsHeader
            heading="Development Team"
          />
        </SectionHeader>
        <SectionContent>
          <SimpleGrid
            columns={['1', '1', '2', '2', '3']}
            height="100%"
            width="100%"
            gap="10"
            alignItems="center"
            wrap="wrap"
          >
            {creditsData.team.map((member) => (
              <CreditsContent
                key={member.title}
                image={member.image.url}
                name={member.title}
                position={member.dev_position}
                linkedIn={member.linkedIn}
                instagram={member.instagram}
                github={member.github}
                twitter={member.twitter}
                behance={member.behance}
              />
            ))}
          </SimpleGrid>
        </SectionContent>
      </FadeInUp>
    </Section>
    <Section>
      <FadeInUp>
        <SectionHeader>
          <CreditsHeader
            heading="Technologies"
          />
        </SectionHeader>
        <SectionContent>
          <Wrap
            align="center"
            justify="center"
            spacing="16"
          >
            {creditsData.technologyLogos.map((logoObj) => (
              <Image
                objectFit="cover"
                height="100%"
                minHeight="72px"
                maxHeight="128px"
                src={logoObj.logo.url}
                alt={logoObj.logo.alt}
              />
            ))}
          </Wrap>
        </SectionContent>
      </FadeInUp>
    </Section>
  </main>
);

export async function getStaticProps() {
  const creditsData = await getCreditsData();

  if (creditsData) {
    return {
      props: {
        creditsData,
      },
    };
  }
  return {
    notFound: false,
  };
}

export default Credits;
