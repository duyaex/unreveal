import Footer from '../Components/UI_Interface/Files/Footer'
import Navbar from '../Components/UI_Interface/Files/Navbar'
import '../styles/globals.css'
// Here you are to send Random image request and change image of header every time
function MyApp({ Component, pageProps }) {
  
  return <><Navbar/> <Component {...pageProps} /><Footer/></>
}

export default MyApp
