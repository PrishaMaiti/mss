import { Box, Flex, HStack, Text, Spacer } from "@chakra-ui/react";
import { NextRouter } from 'next/router'

interface Props {
    router: NextRouter
}

const TopNavBar = ({ router }: Props) => {
    return (
        <Flex className='topnavbar' h='4vh' align='center' justify='space-between'>
            <Text  px={5} fontFamily='helvetica' onClick={() => router.push("./")}><b>Mukti Support Schools</b></Text>
            <Spacer />
            <Flex mx='10'>
                <button onClick={() => router.push("./admin-login")}>Admin Login</button>
            </Flex>
            <br />
        </Flex>
    );
}
export default TopNavBar