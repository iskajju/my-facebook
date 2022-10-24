import React from 'react'

export const Options = ({logos,title}) => {
  return (
    <div className='flex items-center justify-center flex-1 gap-2 hover:bgcomment h-full md:w-[156px] cursor-pointer rounded-lg hovert  '>
            <img
            height='22px'
            width='22px'
            src={logos} alt="" />
            <h4 className='text-black font-semibold text-[12px] md:text-[15px] '>{title}</h4>
    </div>
  )
}
