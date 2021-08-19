import { Box, VStack } from '@chakra-ui/react';
import BlogCard from './BlogCard';

const BlogsContent = ({ blogs }) => (
  <Box
    width="100%"
    py="16px"
  >
    <VStack
      spacing="10"
    >
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </VStack>
  </Box>
);

export default BlogsContent;
