import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps, session }) {
  return(
  <ChakraProvider>
    <SessionProvider session={session} >
      <Provider store={store}>
        <Navbar/>
        <Component {...pageProps} />
      </Provider>
    <Footer/>
    </SessionProvider>
  </ChakraProvider>
  )
}
