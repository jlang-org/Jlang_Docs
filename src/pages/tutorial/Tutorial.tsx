import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import tutorials from "../../data/tutorials.json";
import type { Tutorial as TutorialType } from "../../types/Tutorial";

export default function Tutorial() {
  const { id } = useParams<{ id: string }>();
  const tutorial = (tutorials as TutorialType[]).find(t => t.id === id);

  if (!tutorial) return <Text>Tutorial not found</Text>;

  return (
    <Box>
      <Heading mb={4}>{tutorial.title}</Heading>
      <Text>{tutorial.content}</Text>
    </Box>
  );
}