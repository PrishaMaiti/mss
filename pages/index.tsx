import { Box, Flex, Spacer, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <div className='landing-page'>
      <Flex direction='column' padding={5} mx='10vw' bg='#3D165E'>
        <Text ml='25vw' mb='10vh' fontSize={70} className='title'><b>Welcome to MSS</b></Text>
        <Flex>
          <Box w='10vw' h='15vh' bg='red.500'>
            <Text>1000 students</Text>
          </Box>
          <Spacer />
          <Box w='10vw' h='15vh' bg='red.500'>
            <Text>100 teachers</Text>
          </Box>
          <Spacer />
          <Box w='10vw' h='15vh' bg='red.500'>
            <Text>20 schools</Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  )
}