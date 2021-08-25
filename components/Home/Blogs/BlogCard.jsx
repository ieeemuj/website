import {
  Heading, Image, LinkBox, LinkOverlay, Stack, Text, VStack,
} from '@chakra-ui/react';
import styles from '../../../styles/NextLink.module.css';
import { formatBlogDate } from '../../../utils';

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
        width={['300px', '300px', '300px', '300px', '250px']}
        height={['194px', '194px', '194px', '194px', '144px']}
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
            as="h3"
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
          {formatBlogDate(blog.published_date)}
          {' '}
          |
          {' '}
          {blog.author_name}
        </Text>
      </VStack>
    </Stack>
  </LinkBox>
);

export default BlogCard;
