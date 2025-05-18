import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Header from "./components/header/Header";
import Sidebar from "./shared/Sidebar";
import Home from './pages/home/Home';
import Tutorial from './pages/tutorial/Tutorial';
import Example from './pages/examples/Example';

function App() {
  return (
    <Router>
      <Flex direction="column" height="100vh">
        <Header />
        <Flex flex="1">
          <Sidebar />
          <Box flex="1" p={4} overflowY="auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorial/:id" element={<Tutorial />} />
              <Route path="/example/:id" element={<Example />} />
            </Routes>
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;