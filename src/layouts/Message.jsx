import { useState, useEffect } from "react"

function Message({type, msg}) {

     const [visible, setVisible] = useState(false)

     useEffect(() => {

         if(!msg) {
            setVisible(false)
            return
         }

         setVisible(true)

         const timer = setTimeout(() => {
             setVisible(false)
         }, 2000)

         return () => clearTimeout(timer)
     }, [msg])

     const typeStyles = {
        success: 'bg-green-100 text-green-800 border-green-400',
        error: 'bg-red-100 text-red-800 border-red-400',
      }[type];

    return (
        <>
          {visible && (
            <div className={`w-full  p-4 border border-black mx-auto  text-center mb-8 rounded-[5px] ${typeStyles}`}>{msg}</div>
          )}
        </>
    )
}

export default Message