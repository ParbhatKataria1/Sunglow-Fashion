import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/homePage/navbar'

export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Navbar/>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
