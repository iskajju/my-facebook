import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

export const FreindStories = ({icon, bgstory }) => {
  const user = useSelector(selectUser)
  return (
    <div className='relative max-h-[200px] min-h-[200px] min-w-[112px] max-w-[112px] rounded-xl grid place-items-center shadow-lg cursor-pointer bg-white hover:opacity-90 hover:shadow-2xl hover:scale-[101%] group '>
        <img
        className=' max-h-[200px] min-h-[200px] min-w-[112px] max-w-[112px]  items-center rounded-xl  '
        src={bgstory} 
        alt="" />
        <div className='absolute top-4 left-3 bg-green-500 rounded-full hover:scale-105 ' >
        <Avatar  src={icon}>{user?.displayName[0]}</Avatar>

         </div>
     </div>
  )
}
