import React from 'react'
import TopNavBar from '../components/topnavbar';
import { Flex, Box, Container } from "@chakra-ui/react";
import { NextRouter } from 'next/router';

type LayoutProps = {
    children: React.ReactNode,
    router: NextRouter,
}

const NavigationView: React.FC<LayoutProps> = ({ children, router }: LayoutProps) => {
    return (
        <div>
            <Box id='topnavbar'>
                <TopNavBar router={router} />
            </Box>
            <Flex id='main-nav-view' direction='column'>

                <Box id='children' >
                    {children}
                </Box>
            </Flex>
        </div>
    )
}



export default NavigationView;