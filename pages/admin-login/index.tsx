import { Box, Flex, FormControl, FormHelperText, FormLabel, Input, Spacer, Text } from "@chakra-ui/react";


export default function AdminLogin() {
    return (
        <div className='landing-page login' width='100vw'>
            <Flex direction='column' h='96vh' alignItems='center'>
                <FormControl width='20vw' mt='10vh'>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl width='20vw' mt='2vh'>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                </FormControl>
            </Flex>
        </div>
    )
}