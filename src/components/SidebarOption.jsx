import { Avatar } from '@mui/material'
import React from 'react'

export const SidebarOption = ({ logos, img , Icon, title  }) => {
  return (
    <div className='grid grid-cols-[13%,87%]  rounded-lg space-x-[5px] xl:space-x-[2px]  px-2 h-[44px] min-h-[44px] max-h-[44px] w-[286.5] text-left justify-center cursor-pointer hover:bg-black/10 hovert items-center '>
      {logos && <Avatar src={logos} className='h-[26px!important] w-[26px!important]'/> }
      {img && <img src={img} height='20px' width='20px' layout='fixed'  className=' object-contain  ' alt="" /> }
      {Icon && <Icon src={Icon} /> }
      <h4 className='text-left text-black text-sm flex justify-start font-semibold tracking-wider text-ellipsis'> {title} </h4>
    </div>
  )
}