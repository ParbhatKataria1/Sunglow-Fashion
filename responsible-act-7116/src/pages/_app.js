import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '@/components/navbar'
import LandingPage from './Home/LandingPage'
import ArticleList from './Article'


export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Navbar/>
    <LandingPage/>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
