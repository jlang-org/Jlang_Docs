import { Box, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box bg="blue.500" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Heading size="md"><Link to="/">JLang Tutorial Site</Link></Heading>
      </Flex>
    </Box>
  );
}
