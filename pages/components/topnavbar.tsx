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
            <Flex>
                <Text px={5} onClick={() => router.push("./about")}>About</Text>
                <Spacer />
                <Text px={5} onClick={() => router.push("./documentation")}>Documentation</Text>
            </Flex>
            <br />
        </Flex>
    );
}
export default TopNavBar