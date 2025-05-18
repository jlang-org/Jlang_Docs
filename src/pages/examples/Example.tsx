import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import examples from '../../data/examples.json';
import { type Example as ExampleType } from '../../types/Example';

export default function Example() {
  const { id } = useParams<{ id: string }>();
  const example = (examples as ExampleType[]).find(e => e.id === id);

  if (!example) return <Text>Example not found</Text>;

  return (
    <Box>
      <Heading mb={4}>{example.title}</Heading>
      <Text>{example.description}</Text>
      <Box mt={4} p={4} bg="gray.900" color="white" borderRadius="md" fontFamily="monospace">
        {example.code}
      </Box>
    </Box>
  );
}
