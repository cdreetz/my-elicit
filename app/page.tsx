import React from 'react';
import { 
  Box, 
  Heading, 
  Stack, 
  Input, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, 
  Button, 
  Divider, 
  Text, 
  Flex, 
  Textarea,
  Spacer
} from "@chakra-ui/react";

const NotebookUI: React.FC = () => {
  return (
    <Flex bg="gray.50" h="100vh" overflow="hidden" alignItems="center" justifyContent="center">
      <Box mx="auto" mt={10} p={5} maxW="720px" w="full">
        {/* Editable Header */}
        <Input placeholder="Add notebook title" size="lg" mb={8} textAlign="center" fontWeight="bold" variant="unstyled" />
        
        {/* Select a first step section */}
        <Text fontSize="md" mb={4}>Select a first step</Text>
        <Accordion borderWidth="1px" borderColor="gray.200" borderRadius="md" p={1}>
          <AccordionItem borderWidth="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
            <AccordionButton>
              <Box flex="1" textAlign="left">Find papers</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Textarea placeholder="Search for papers" />
                <Flex pt={2}>
                  <Spacer />
                  <Button aria-label="Search" mr="auto" color="white" bg="#147885" borderRadius="full">Go</Button>
                </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Extract data from PDFs</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>Content for asking a research question goes here.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">List of concepts</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>Content for list of concepts goes here.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
        <Divider my={5} />
        
        {/* Buttons for suggestions */}
        <Flex mt={10} alignItems="center" flexWrap="wrap" gap={2} justifyContent="center">
          <Button variant="outline">How effective are conditional cash transfer programmes?</Button>
          <Button variant="outline">What are the benefits of taking l-theanine?</Button>
          <Button variant="outline">Does wearing an activity tracker improve health outcomes?</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default NotebookUI;