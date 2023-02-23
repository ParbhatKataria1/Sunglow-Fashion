import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import LandingPage from '../components/Anthropologie'
// import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import LandingPage from './Home/LandingPage'
// <Navbar/>
export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <LandingPage/>
    <Footer/>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
