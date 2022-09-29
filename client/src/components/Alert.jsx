import React from 'react'
import {BsEmojiSmile,BsEmojiFrown} from "react-icons/bs"
import {motion} from "framer-motion"

const Alert = ({type}) => {
  return (
    <motion.div
    initial={{translateX:200,opacity:0}}
    animate={{translateX:0,opacity:1}}
    exit={{translateX:200,opacity:0}}
    key={type}
     className={`fixed top-12 right-12 p-4 rounded-md backdrop-blur-md flex items-center justify-center shadow-md
    ${type=== "success" && "bg-green-300" }
    ${type==="danger" && "bg-red-300"}`}>
        {type==="success" && (
            <div className='flex items-center justify-center gap-4'>
            <BsEmojiSmile className='text-3xl '/>
            <p className='text-xl font-semibold'>Data Saved</p>
            </div>
        )}
        {type==="danger" && (
            <div className='flex items-center justify-center gap-4'>
            <BsEmojiFrown className='text-3xl '/>
            <p className='text-xl font-semibold'>Failed to Save Data</p>
            </div>
        )}
        </motion.div>
  )
}

export default Alert