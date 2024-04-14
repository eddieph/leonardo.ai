import { Container, Skeleton as ChakraSkeleton, Box, SimpleGrid } from "@chakra-ui/react";

export default function Skeleton() {
  return <Container maxW='7xl'>
    <ChakraSkeleton height="50px" />
    <SimpleGrid minChildWidth='120px' spacing='40px'>
      {Array.from({ length: 16 }).map((_, index) => (
        <Box key={index} p={4} shadow="md" borderRadius="lg">
          <ChakraSkeleton height="160px" />
          <ChakraSkeleton height="20px" mt={4} mb={2} />
        </Box>
      ))}
    </SimpleGrid>
    <ChakraSkeleton height="50px" />
  </Container>
}