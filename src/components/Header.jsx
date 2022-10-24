import React, { useState } from 'react'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import { Add, Groups3, HomeOutlined, SportsEsportsOutlined, TableRows } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { closeprofile, openProfile } from '../features/popupSlice';
;


export const Header = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [count, setCount]= useState(1)
    const openpopup = () => {
        setCount(count + 1)
        if(count % 2 !== 0 ){
            dispatch(openProfile())
        } else {
            dispatch(closeprofile())
        }
    }

    return (
        <div className='sticky  top-0 p-[5px] z-10 bg-white grid grid-cols-[32%,18%,55%] 
         md:grid-cols-[25%,auto,25%] md:p-0  border-b border-white shadow-md '>

            <div className='flex items-center px-3  h-[100%] '>
                {/* left */}
                <img
                height='42px'
                width="42px"
                priority
                className='cursor-pointer '
                src="./logoheader.png"
                alt="Loading...." />
                <form className='flex items-center space-x-1 bgcomment textcomment rounded-full px-1 py-2 xl:px-2 md:py-2 ml-2 md:mr-0 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input className='hidden xl:inline-flex outline-none pr-2 bg-transparent placeholder:textcomment placeholder:text-sm placeholder:font-semibold font-semibold w-[180px] ' type="text" placeholder='Search facebook' />
                </form>
            </div>
            {/* center */}
            <div className='hidden md:inline-flex md:space-x-1 lg:space-x-2  items-center  md:justify-center  m-1 '>

                <div className='headerCenterButton w-[16%!important] h-[50px!important] '>
                    <HomeOutlined className=' w-[100%] h-[80%]' />
                </div>
                <div className='headerCenterButton' >
                    <OndemandVideoIcon className=' w-[100%] h-[80%]' />
                </div>
                <div className='headerCenterButton ' >
                    <StoreIcon className=' w-[100%] h-[80%]' />
                </div>
                <div className='headerCenterButton ' >
                    <Groups3 className='  w-[100%] h-[80%] ' />
                </div>
                <div className='hidden lg:inline-flex headerCenterButton' >
                    <SportsEsportsOutlined className='  w-[100%] h-[80%]' />
                </div>
                <div className='flex items-center justify-start lg:hidden '>
                    <div className='headerCenterButton w-[120%] rounded-md'>
                        <TableRows className='  w-full h-full ' />
                    </div>
                </div>

            </div>
            {/* menu Icon */}
            <div className=' flex items-center justify-start w-[100%] md:hidden  '>
                <div className='headerCenterButton w-[70%] rounded-md h-[98%] m-[2%] '>
                    <TableRows className='  w-full h-full min-h-[34px] min-w-[36.5px] max-h-[34px] max-w-[36.5px] ' />
                </div>
            </div>

            {/* Right */}
            <div className='flex space-x-0 items-center justify-evenly pr-5'>
                <div className='flex h-[100%] w-[100%] items-center space-x-2 justify-end'>


                    <div className='hidden lg:inline-flex rightIcon' >
                        <img 
                            className=' h-[22px]  object-cover ' src="./ninedot.png " alt="" />
                    </div>
                    <div className='rightIcon ml-[20px] lg:hidden' >
                        <Add className=' h-[32px]' />
                    </div>
                    <div className='rightIcon ' >
                        <img
                           className=' h-[22px]   object-cover ' src="./blackmessenger.png" alt="" />
                    </div>
                    <div className='rightIcon' >
                        <img
                           className=' h-[25px]  object-contain ' src="./fbnoti.png"alt="" />
                    </div>
                    <div >
                        <Avatar onClick={openpopup}  src={user.photo}  className='text-white h-[40px!important] w-[40px!important] hover:opacity-90 ' >{user?.displayName[0]}</Avatar>
                        
                    </div>
                </div>
            </div>



        </div>
    )
}
