
import { Avatar, Button } from '@mui/material'
import React from 'react'

export const FreindRequestOption = ({mutual}) => {
    return (
        <div className='flex w-full rounded-lg hover:bg-gray-200 hover:shadow-md p-[10px] gap-1 cursor-pointer '>
            <div className='p-1'>
                <Avatar className='h-[40px!important]' />
            </div>
            <div className='w-full flex flex-col    '>
                <div className='flex items-center justify-between w-[100%] ' >
                    <h4 className=' font-semibold text-black text-lg '>Ronaldo</h4>
                    <p className=' text-xs text-gray-500 '>  21h</p>
                </div>
               {mutual ? <div className='flex items-center gap-2 '>
                <div className='flex items-center ' >
                    <Avatar className = ' h-[18px!important] w-[18px!important] -mr-2 ' />
                    <Avatar className = ' h-[18px!important] w-[18px!important] -mr-2 ' />
                    <Avatar className = ' h-[18px!important] w-[18px!important] ' />
                </div>
                    <span className=' text-gray-500 text-xs'>3 mutual freinds</span> 
                </div>: null}
                <div className='w-full flex gap-1 mt-2' >
                    <Button className='capitalize bg-blue-500  w-full ' variant='contained' color='primary' >Confirm</Button>
                    <Button className='capitalize bg-gray-500 text-white w-full hover:bg-gray-600 ' >Delete</Button>
                </div>

            </div>
        </div>
    )
}

