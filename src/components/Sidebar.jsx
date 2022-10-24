import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { FooterItems } from './FooterItems'
import { Headings } from './Headings'
import { SidebarOption } from './SidebarOption'




export const Sidebar = () => {
    const user = useSelector(selectUser)
    // console.log(user)
    return (
        <div className=' hidden lg:inline-flex w-[22%] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-transparent  hover:scrollbar-thumb-[#c2bbbb]   scrollbar-medium scroll-m-2   '>
            <div className='flex flex-col mt-3 ml-2  w-full px-[0.8px]  '>
                {/* for user profile */}
                <div className='grid grid-cols-[13%,87%]  rounded-lg space-x-[5px] xl:space-x-[2px]  px-2 h-[44px] min-h-[44px] max-h-[44px] w-[286.5] text-left justify-center cursor-pointer hover:bg-black/10 hovert items-center '>
                     <Avatar src={user.photo} className='h-[26px!important] w-[26px!important]' > {user?.displayName[0]} </Avatar> 
                    <h4 className='text-left text-black text-sm flex justify-start font-semibold tracking-wider text-ellipsis'> {!user.displayName ? 'Profile' : user?.displayName} </h4>
                </div>
                {/* for user profile */}
                <SidebarOption img="./people.png" title='Freinds' />
                <SidebarOption img="./blackmessenger.png"title='Messenger' />
                <SidebarOption img="./group.png" title='Groups' />
                <SidebarOption img="./market.png" title='Marketplace' />
                <SidebarOption img="./video.png" title='Watch' />
                <SidebarOption img="./memories.png" title='Memories' />
                <SidebarOption img="./saved.png" title='Saved' />

                <hr className='my-4   ' />


                <Headings heading='Your Shortcuts' btnhidden='edit' />

                
                <SidebarOption img="./group.png"  title='Groups' />
                <SidebarOption img="./group.png"  title='Freinds' />
                <SidebarOption img="./group.png"  title='YOoo' />
                <SidebarOption img="./group.png"  title='OOppp!!' />

                <footer className='text-xs py-2 pb-4 text-gray-400'>

                    <div className='flex  space-x-1  '>
                        <FooterItems para='Privacy' />
                        <p>•</p>
                        <FooterItems para='Terms' />
                        <p>•</p>
                        <FooterItems para='Advertising' />
                        <p>•</p>
                        <FooterItems para='Ad choices' />

                    </div>
                    <div className='flex space-x-1'>
                        <FooterItems para='Cookies ' />
                        <p>•</p>
                        <FooterItems para='More' />
                        <p>•</p>
                        <FooterItems para='Meta © 20222' />
                    </div>


                </footer>
            </div>
        </div>
    )
}
