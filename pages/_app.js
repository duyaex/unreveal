import React,{useState,useEffect} from 'react';
import Footer from '../Components/UI_Interface/Files/Footer'
import Navbar from '../Components/UI_Interface/Files/Navbar'
import '../styles/globals.css'
// import TopLoader from "react-top-loader";
import LoadingBar from 'react-top-loading-bar'
import {useRouter} from 'next/router';


// Here you are to send Random image request and change image of header every time
function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const [progress, setProgress] = useState(0)
useEffect(() => {
  router.events.on('routeChangeStart',()=>{
setProgress(40)
  })
  router.events.on('routeChangeComplete',()=>{
setProgress(100)
  })
 
}, [])

  return <>
   <LoadingBar
        color='#26425d'
        progress={progress}
        waitingTime={600}
        onLoaderFinished={() => setProgress(0)}
      />
  {/* <TopLoader show progress={0.2} fixed={false} backgroundColor="#ddd" /> */}
  <Navbar/> 
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
