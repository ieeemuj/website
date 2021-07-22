import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';
import Section from '../../../components/Home/Section';
import Event from '../../../components/Events/EventPage';

const EventPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Section>
      <Event slug={router.query.slug} />

      {/* TODO: following event description will be markdown and needs to be redered. */}
      <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque natus illo, amet debitis recusandae quae alias, minima fugit ut laboriosam aspernatur facilis adipisci possimus voluptatum eius praesentium pariatur. Porro molestias, blanditiis dolorem laboriosam ipsa perferendis quis cumque sunt placeat quasi consequatur dignissimos unde quisquam commodi.</Text>
    </Section>
  );
};

export default EventPage;
