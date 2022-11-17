import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationView from './layouts/NavigationView'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider>
      <NavigationView router={router}>
        <Component {...pageProps} />
      </NavigationView>
    </ChakraProvider>
  )
}

export default MyApp;