import { Box, Flex, Spacer, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <div className='landing-page' width='100vw'>
      <Flex direction='column' >
        <Text height='10vh' mx='10' align='center' fontSize='7xl' className='title' ><b>Welcome to MSS</b></Text>
        <Flex height='86vh' mx='20' alignItems='center'>
          <Box className='landing-page-btnbox'>1000 students</Box>
          <Spacer />
          <Box className='landing-page-btnbox'>200 teachers</Box>
          <Spacer />
          <Box className='landing-page-btnbox'>60 schools</Box>
        </Flex>
      </Flex>
    </div>
  )
}