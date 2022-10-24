import { MoreHoriz, Settings } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { Options } from './Options'
import { motion } from "framer-motion"

export const NewPosts = ({ message, name, image, time, postimage }) => {
  return (
    <motion.div
      initial={{scale:0,opacity:0, }}
      animate={{scale:1,opacity:1,}}
      transition={{ duration: 0.5 }}
      viewport={{once:true}}
      className='bg-white shadow-xl w-[355px] md:w-[505px] rounded-lg  ' >
        <div className="flex items-center p-[10px] w-full gap-[10px] " >
          <Avatar src={image} />
          <div className='flex justify-between items-center w-full ' >
            <div className='flex flex-col   ' >
              <h2 className='font-semibold text-lg cursor-pointer ' >{name}</h2>
              <p className='flex items-center text-xs cursor-pointer  text-gray-500 text-left' >{time} <Settings className=' h-[15px!important] ' /></p>
            </div>
            <IconButton >
              <MoreHoriz />
            </IconButton>
        </div>
      </div>
      <div className='px-[20px]' >
        <p className='text-md font-semibold' > {message} </p>
      </div>
      
      {postimage && ( 
        <div className='flex items-center  justify-center border-t overflow-hidden relative border-b mt-3 bg-gray-300/30 w-full ' >
        <img className=' w-[100%] object-center  object-cover mx-auto '  src={postimage} alt="" />
        </div>
     
      )}
        <div className='flex h-[50px]  m-[10px] py-[5px] border-t border-b text-gray-500  ' >

          <Options logos="like.png" title='Like' />
          <Options logos="comment.png" title='Comment' />
          <Options logos="forward.png" title='Share' />
       
      </div>
    </motion.div>
  )
}
