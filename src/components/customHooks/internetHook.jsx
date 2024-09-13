import { useEffect, useState } from "react"

const CustomInternetHook  =()=>{

    const [online,setOnline]=useState(navigator.onLine)
    useEffect(()=>{
        const statusHandler = ()=>{
            setOnline(navigator.onLine)
        }

        window.addEventListener("online",statusHandler)

        window.addEventListener("offline",statusHandler)

        return () => {
            window.removeEventListener('online', statusHandler);
            window.removeEventListener('offline', statusHandler);
          }
    },[online])
    return [online]
}
export default CustomInternetHook