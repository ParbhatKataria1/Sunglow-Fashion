import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
// import LandingPage from '../components/Anthropologie'
// <Navbar/>
export default function App({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Navbar/>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    <Footer/>
  </ChakraProvider>
  )
}
