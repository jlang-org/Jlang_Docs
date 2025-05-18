import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { Tutorial } from '../../types/Tutorial';

type Props = {
  tutorial: Tutorial;
};

export default function TutorialCard({ tutorial }: Props) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md">
      <Heading size="md" mb={2}>{tutorial.title}</Heading>
      <Text mb={4}>{tutorial.summary}</Text>
      <Button as={Link} to={`/tutorial/${tutorial.id}`} colorScheme="blue">
        Read More
      </Button>
    </Box>
  );
}