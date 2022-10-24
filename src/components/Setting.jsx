import { DarkMode, Feedback, Help, Logout, Settings } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeprofile } from '../features/popupSlice'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { FooterItems } from './FooterItems'
import { SidebarOption } from './SidebarOption'

export const Setting = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logouthandler = ()=>{
        const ConfirmBox = window.confirm( "Do you really want to Sign Out?")
        if(ConfirmBox === true){
            auth.signOut()
            dispatch(closeprofile())
        }
    }
    return (
        <div className=' overflow-hidden absolute top-[44px] md:top-[54px] border right-[26px] md:right-[50px] rounded-md shadow-2xl z-50 bg-white w-[220px] md:w-[360px] px-[14px] py-[10px] ' >
            <div className=' w-full shadow-md border-white border-t-black/10 border  shadow-black/20 rounded-lg flex flex-col p-[5px] '>
                <div className='grid grid-cols-[30%,70%] md:grid-cols-[13%,87%]  rounded-md space-x-[10px] px-2 h-[54px] min-h-[54px] max-h-[44px] w-full text-left justify-center cursor-pointer hover:bgcomment hovert items-center mb-2 '>
                     <Avatar src={user?.photo} className='h-[38px!important] w-[38px!important] ' /> 
                    <h4 className='text-left text-black text-lg flex justify-start font-semibold tracking-wider text-ellipsis'> {user?.displayName} </h4>
                </div>
                <hr className=' mx-[5px]' />
                <div className='  rounded-md space-x-[1px] px-2 h-[34px] min-h-[34px] max-h-[34px] w-full text-left  cursor-pointer hover:bgcomment hovert  mt-2 '>
                    <buttton className='flex items-center text-left w-full h-full  text-blue-500 text-sm  font-bold tracking-wider text-ellipsis'> See all Profiles </buttton>
                </div>
            </div>
            <div className='mt-4'>
                <SidebarOption Icon={Settings} title='Settings' />
                <SidebarOption Icon={Help} title='Help & Support' />
                <SidebarOption Icon={DarkMode} title='Display & Accessebility' />
                <SidebarOption Icon={Feedback} title='Give Feedback' />
                <button onClick={logouthandler} className='w-full ' >
                <SidebarOption Icon={Logout} title='Log Out' />
                </button>
            </div>
            <footer className='text-xs py-2 pb-4 text-gray-400'>
                    
                    <div className='flex  space-x-1  '>
                        <FooterItems para='Privacy' />
                        <p>•</p>
                        <FooterItems para='Terms' />
                        <p>•</p>
                        <FooterItems para='Advertising' />
                        <p>•</p>
                        <FooterItems para='Ad choices' />
                        <p>•</p>
                        <FooterItems para='Cookies ' />
                        <p>•</p>
                       
                    </div>
                    <div className='flex space-x-2'>
                        <FooterItems para='More' />
                        <p>•</p>
                        <FooterItems para='Meta © 20222' />
                    </div>
                    
                
                </footer>
        </div>
    )
}
