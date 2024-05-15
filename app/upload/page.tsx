'use client'
import Dropzone from '@/components/fileUpload';
import { Flex } from '@chakra-ui/react';

export default function UploadPage() {
  const handleFileAccepted = (file: File) => {
    console.log(file);
  };
  return (
    <Flex>
      <Dropzone onFileAccepted={handleFileAccepted} />
    </Flex>
  )
}