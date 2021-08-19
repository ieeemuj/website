import {
  Box, Heading, Text, Image, Link, Button, Stack, HStack,
} from '@chakra-ui/react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocietiesContent = ({
  alignment,
  titleQues, alignImg, alignText, twitterUrl, instaUrl,
  linkedInUrl, imgSrc, altText, imgMarginTop, imgMarginBottom, imgMarginRight, imgWidth,
}) => (
  <Stack
    direction={['column', 'column', 'column', 'column', 'row']}
    spacing="2"
    alignItems="center"
    justify="space-between"
  >
    {alignment === 'left'
      && (
      <Box
        float={alignImg}
        marginX="6"
        maxW="300px"
        display={['block', 'block', 'inline', 'inline-block', 'inline-block']}
      >
        <Image
          marginTop={imgMarginTop}
          marginBottom={imgMarginBottom}
          width={imgWidth}
          marginRight={imgMarginRight}
          borderRadius="md"
          src={imgSrc}
          alt={`${altText} logo`}
        />
      </Box>
      )}
    <Box
      width={['100%', '100%', '100%', '100%', '100%']}
      float={alignText}
      paddingX="6"
    >
      <Heading
        size="md"
        marginBottom="4"
      >
        {titleQues}
      </Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Velit nisi eligendi doloremque facere aspernatur deleniti, totam odio.
        Asperiores praesentium quisquam nobis aut, odio cupiditate nulla
        fugit porro eligendi ipsum earum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Distinctio iure ducimus quod perferendis quo. Officia deleniti sunt at deserunt,
        odit quas eaque exercitationem, nemo facere repellat quidem et quo adipisci.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.

      </Text>
      <HStack
        spacing="1"
        // float={alignText}
        marginTop="1em"
      >
        <Link href={twitterUrl}>
          <Button colorScheme="twitter" variant="ghost" size="sm" rounded="full" w="10" h="10">
            <FaTwitter color="twitter" />
          </Button>
        </Link>
        <Link href={instaUrl}>
          <Button colorScheme="pink" variant="ghost" size="sm" rounded="full" w="10" h="10">
            <FaInstagram />
          </Button>
        </Link>
        <Link href={linkedInUrl}>
          <Button colorScheme="linkedin" variant="ghost" size="sm" rounded="full" w="10" h="10">
            <FaLinkedinIn />
          </Button>
        </Link>
      </HStack>
    </Box>
    {alignment === 'right'
      && (
      <Box
        float={alignImg}
        marginX="6"
        display={['block', 'block', 'inline', 'inline-block', 'inline-block']}
        maxW="300px"
      >
        <Image
          marginTop={imgMarginTop}
          width={imgWidth}
          marginRight={imgMarginRight}
          borderRadius="md"
          src={imgSrc}
          alt={`${altText} logo`}
        />
      </Box>
      )}
  </Stack>
);

export default SocietiesContent;
