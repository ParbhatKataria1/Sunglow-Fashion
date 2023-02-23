// import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import LandingPage from './Home/LandingPage'
// <Navbar/>
import Dresses from "./dresses/index"
import Navbar from '@/components/navbar'
export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Navbar/>
    {/* <LandingPage/> */}
    {/* <Dresses/> */}
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
