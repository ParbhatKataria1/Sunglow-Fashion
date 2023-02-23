import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import LandingPage from '../components/Anthropologie'
export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </ChakraProvider>
  )
}
