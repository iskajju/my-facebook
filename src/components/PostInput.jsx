import { Close, Collections, Flag, LocationOn, Mood, PersonAdd, Public } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import firebase from 'firebase/compat/app'
import { motion } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'
import { closepost } from '../features/popupSlice'
import { db, storage } from '../firebase'
import { selectUser } from '../features/userSlice'

export const PostInput = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const filepickerRef = useRef(null)
    const [imagetopost, setimagetopost] = useState(null)
    const [iscontainerActive, setiscontainerActive] = useState(false)


    const addimagetopost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setimagetopost(readerEvent.target.result)
        }

    }
    const removeimage = () => {
        setimagetopost('')
    }

    const imageaddoption = () => {
        setiscontainerActive(true)
    }

    const imagecloseoption = () => {
        setiscontainerActive(false)
        removeimage()
    }
    // if(!input){

    // }
     const sendpost = (e) => {
        if(input || imagetopost ){
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            email: user.email,
            image: user.photo,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then((doc) => {
            if (imagetopost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imagetopost, 'data_url')

                removeimage()
                uploadTask.on("state_change", null, (error) => console.error(error), () => {
                    storage.ref('posts').child(doc.id).getDownloadURL()
                    .then((url) => 
                    {db.collection('posts').doc(doc.id).set({
                            postImage : url,
                        },{merge:true})

                    })
                })
            }
        })

        setInput('')
        dispatch(closepost())
    } else {
        return false;
    }
    };
    const handlerclose = () => {
        dispatch(closepost())
    };

    return (
        <div className='absolute top-0 bg-[#F0F2F5]/70  h-full  w-full z-50 flex items-center justify-center '>
            <div className=' flex flex-col bg-white w-[340px] md:w-[500px] shadow-2xl shadow-gray-800/80 rounded-lg  ' >
                <div className='grid grid-cols-[90%,10%] place-items-center py-2  ' >
                    <h2 className='text-[26px] font-semibold' >Create post</h2>
                    <IconButton className=' bgcomment' onClick={handlerclose}  >
                        <Close />
                    </IconButton>

                </div>
                <hr />

                <div className=' px-[20px] flex p-[10px] items-center  '>
                    <Avatar src={user?.photo} > {user?.displayName[0]} </Avatar>
                    <div className='ml-[10px] flex flex-col items-center  ' >
                        <h2 className=' text-md '>Username</h2>
                        <button className=' flex items-center rounded-sm text-white h-[18px] w-[60px] capitalize text-[10px] bg-slate-500/90 pr-[5px] hover:bg-gray-500 text-center ' variant='contained'><Public className='h-[14px!important] rounded-md text-white ' />Public</button>
                    </div>
                </div>

                <div className={`${iscontainerActive ? ` h-[80px] ` : ` md:h-[160px]`}   p-[13px] `}>
                    <textarea className={` text-sm h-full w-full outline-none ${iscontainerActive ? ` text-xl ` : ` text-sm md:text-4xl `} scrollbar-none`} placeholder='Whats On Your mind,' value={input} onChange={(e) => setInput(e.target.value)} cols="50" rows='4' />
                </div>



                {/* /////// { for add image popup} /////// */}

                <motion.div
                    initial={{bottom: -100,opacity: 0}}
                    whileInView={{ bottom: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{loop:true}}
                    className={` relative ${iscontainerActive ? ` inline-flex ` : ` hidden `} overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full border border-gray-400 h-[140px] mx-auto p-[5px] w-[95%] rounded-lg  items-center cursor-pointer z-0 `}>
                    <div className='hover:bg-slate-200 w-full transition duration-200 h-full rounded-md flex flex-col items-center justify-center z-50 '>
                        {imagetopost ? (
                            <div className='h-full rounded-md flex flex-col  mb-[5px] ' >
                                <img className='rounded-md object-cover w-full ' src={imagetopost} alt="" />
                            </div>

                        ) : (
                            <>
                                <label for='selcfile' className='bg-gray-500/20 rounded-full h-[40px] w-[40px] flex  items-center justify-center cursor-cell ' onClick={imageaddoption}>

                                    <img src="addimgicon.png" alt="" />
                                    <input ref={filepickerRef} onChange={addimagetopost} type="file" name="" id="selcfile" hidden />
                                </label>
                                <p className=' m-[5px] text-gray-500  text-sm font-semibold '>Add photos </p>
                            </>
                        )}


                        {imagetopost &&
                            <label for='selcfile' className='absolute top-[15px] left-[15px] px-[5px] py-0 shadow-lg   bg-white rounded-md  h-[40px] flex items-center justify-center cursor-cell hover:scale-[102%]  ' onClick={imageaddoption}>
                                <img className='h-[20px]  object-fill ' src="addimgicon.png" alt="" />
                                <input ref={filepickerRef} onChange={addimagetopost} type="file" name="" id="selcfile" hidden />
                                <p className=' p-[2px] ml-[3px] text-xs font-bold ' >Add photos </p>
                            </label>}

                    </div>
                    <div className='absolute flex items-center justify-center top-[7px] right-[8px] z-50 hover:bg-gray-200 bg-white border rounded-full p-[2px]' >
                        <CloseIcon fontSize='small' onClick={imagecloseoption} />
                    </div>
                    <div>
                    </div>
                </motion.div>
                <div className='flex items-center justify-between border border-gray-400 m-[10px] shadow-md rounded-md h-[50px] p-2 cursor-pointer '>

                    <h2>Add to your post</h2>
                    <div className='flex items-center justify-around w-[50%] '>
                        <div onClick={imageaddoption} >
                            <Collections />
                        </div>
                        <PersonAdd />
                        <LocationOn />
                        <Mood />
                        <Flag />
                    </div>

                </div>
                <button type='submit' onClick={sendpost} className=' overflow-hidden bg-blue-500 m-[10px] h-[40px] rounded-md text-gray-500 hover:bg-blue-500/80 hover:text-white font-semibold' variant='contained'>
                    Post
                </button>
            </div>
        </div>
    )
}
