import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openpost } from '../features/popupSlice'
import { selectUser } from '../features/userSlice'
import { Options } from './Options'

export const Posts = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const openhandler = (e) => {
        e.preventDefault()
        dispatch(openpost())

    }
    return (
        <div className='flex flex-col gap-2 justify-center  bg-white shadow-md w-[358px] md:w-[505px] p-[10px]  rounded-lg'>
            <div className='flex gap-2 mb-1 pl-1 cursor-pointer  ' >
                <Avatar src={user?.photo} > {user?.displayName[0]} </Avatar>
                <form className='bg-[#F0F2F5]/80 h-full flex justify-center w-full rounded-full hover:bg-[#F0F2F5]  '>

                    <button onClick={openhandler} className='text-gray-500 text-left  w-full rounded-full px-4' type="submit">Whats On Your Mind,{user?.displayName}</button>
                </form>
            </div>
            <hr />
            <div className='flex h-[38px] ' >

                <Options logos="livevideo.png" title='Live Video' />
                <div onClick={openhandler}  >
                <Options logos="photoicon.png" title='Photo/video' />
                </div>
                <Options logos="smile.png" title='Feeling/activity' />
            </div>



        </div>
    )
}
