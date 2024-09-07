import React, {useState , useEffect} from 'react'

const WindowResize = () => {

    const [ width , setWidth ] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize" , handleResize)

        //cleanup function
        
        window.removeEventListener("resize" , handleResize)


    },[])
  return (
    <div>WindowResize : {width}</div>
  )
}

export default WindowResize