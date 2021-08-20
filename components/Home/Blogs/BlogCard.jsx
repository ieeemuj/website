import {
  Heading, Image, LinkBox, LinkOverlay, Stack, Text, VStack,
} from '@chakra-ui/react';
import styles from '../../../styles/NextLink.module.css';

const BlogCard = ({ blog }) => (
  <LinkBox as="article">
    <Stack
      direction={['column', 'column', 'column', 'column', 'row']}
      spacing="10"
      align="center"
      width="100%"
      maxWidth="1080px"
    >
      <Image
        rounded="lg"
        width="250px"
        height="144px"
        src={blog.image.url}
      />
      <VStack
        minHeight="144px"
        align="flex-start"
        justify="space-between"
        padding="8px"
        textAlign={['center', 'center', 'center', 'center', 'left']}
      >
        <LinkOverlay
          width="100%"
          target="_blank"
          href={blog.blog_link.url}
        >
          <Heading
            size="md"
            className={styles.link}
          >
            {blog.title}
          </Heading>
        </LinkOverlay>
        <Text
          width="100%"
          fontSize="md"
          noOfLines="2"
        >
          {blog.summary}
        </Text>
        <Text
          width="100%"
          color="gray"
        >
          Jul 29, &#39;21 |
          {' '}
          {blog.author_name}
        </Text>
      </VStack>
    </Stack>
  </LinkBox>
);

export default BlogCard;
