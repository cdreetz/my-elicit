'use client'
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
  useAccordionItemState,
  Button, 
  Divider, 
  Text, 
  Flex, 
  Textarea,
  Spacer
} from "@chakra-ui/react";
import Dropzone from '@/components/fileUpload';

//const CustomAccordionItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
//  const { isOpen } = useAccordionItemState();
//
//  return (
//    <AccordionItem borderWidth="1px" borderColor="gray.200" borderRadius="md" boxShadow="md" bg={isOpen ? "white" : "gray.50"}>
//      <AccordionButton>
//        <Box flex="1" textAlign="left">{title}</Box>
//      </AccordionButton>
//      <AccordionPanel pb={4}>
//        {children}
//      </AccordionPanel>
//    </AccordionItem>
//  );
//}

const NotebookUI: React.FC = () => {
  return (
    <Flex bg="#f0f0f0" h="100vh" overflow="hidden" justifyContent="center">
      <Box mx="auto" mt={10} p={5} maxW="720px" w="full">
        {/* Editable Header */}
        <Input placeholder="Add notebook title" fontSize="2xl" mb={8} fontWeight="bold" variant="unstyled" />
        
        {/* Select a first step section */}
        <Text fontSize="md" mb={4}>Select a first step</Text>
        <Accordion borderWidth="1px" borderColor="gray.200" borderRadius="md" p={1}>
          <AccordionItem title="Find papers">
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

          <AccordionItem title="Extract data from PDFs">
            <AccordionButton>
              <Box flex="1" textAlign="left">Extract data from PDFs</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Dropzone onFileAccepted={(file: File) => { console.log(file); }} />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem title="List of concepts">
            <AccordionButton>
              <Box flex="1" textAlign="left">List of concepts</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>What concepts are you looking for across papers? e.g. treatments for hair loss, scientific fact-checking datasets</Text>
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