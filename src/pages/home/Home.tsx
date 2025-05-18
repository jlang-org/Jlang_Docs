import { SimpleGrid } from '@chakra-ui/react';
import TutorialCard from "../../components/tutorial_card/TutorialCard";
import tutorials from '../../data/tutorials.json';
import type { Tutorial } from '../../types/Tutorial';

console.log("Tutorials loaded:", tutorials);

export default function Home() {
  return (

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {(tutorials as Tutorial[]).map(tut => <TutorialCard key={tut.id} tutorial={tut} />)}
    </SimpleGrid>
  );
}
