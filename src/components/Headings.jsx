import React from 'react'
import { MoreHoriz } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export const Headings = ({heading, icon, btnhidden, btn}) => {
  return (

    <div className='flex items-center justify-between pb-2'>
        <h3 className='pl-1 text-lg font-semibold text-gray-500'>{heading}</h3>
       {btnhidden ? ( <button className='px-3 py-1 mr-3 rounded-md opacity-0 hovert bg-blue-400/20 font-semibold hover:opacity-100 text-blue-800 shadow-md ' href="">{btnhidden}</button>) : null }
       {btn ? (<button className='px-3 py-1 mr-3 rounded-md hovert hover:bg-blue-400/20 font-semibold  text-blue-500 hover:shadow-md ' href="" >{btn}</button> ) : null }
       {icon ? (
        <IconButton>
            <MoreHoriz />
        </IconButton>
       ): null }
     </div>
  )
}
