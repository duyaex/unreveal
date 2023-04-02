import React,{useState,useEffect} from 'react';
import baseUrl from '../mongodb/baseUrl'
import Navbar from '../Components/UI_Interface/Files/Navbar'
import '../styles/globals.css'
import { parseCookies } from 'nookies';
import LoadingBar from 'react-top-loading-bar'
import {useRouter} from 'next/router';


function MyApp({ Component, pageProps }) {
  const {token}=parseCookies()
  const router=useRouter()
  const [progress, setProgress] = useState(0)
  const [notifications, setNotifications] = useState([])
useEffect(() => {
  router.events.on('routeChangeStart',()=>{
setProgress(40)
  })
  router.events.on('routeChangeComplete',()=>{
setProgress(100)
  })
 
}, [router.events])

useEffect(() => {
 async function getAllNotifications(){
  const req=await fetch(`${baseUrl}/api/account/notifications`,{
    method:"GET",
    headers:{
      "AUthorization":token
    }
  })
  const res=await req.json()
  console.log("The notifications are ",res)
  setNotifications(res.notifications)
 }
 if(token){
  getAllNotifications()
 }
}, [token])


  return <>
   <LoadingBar
        color='#26425d'
        progress={progress}
        waitingTime={600}
        onLoaderFinished={() => setProgress(0)}
      />

  <Navbar notifications={notifications} setNotifications={setNotifications}/> 
 
  <Component {...pageProps} notifications={notifications} setNotifications={setNotifications} />

  </>
}

export default MyApp
