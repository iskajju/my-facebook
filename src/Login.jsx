import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { opensignup, selectSignUp } from './features/popupSlice'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import { SignUp } from './SignUp'

export const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signUppopup = useSelector(selectSignUp)
    const signUphandler = (e) => {
        e.preventDefault()
        dispatch(opensignup())
    }
   const googlesignin = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
    }
    const loginTo = (e) => {
        e.preventDefault()
        if (!email) {
            alert("Incorrect I'd or Password")
        } else if (!password) {
            alert("Incorrect I'd or Password")
        }
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photo: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    };
    return (
        <>
            
            <div className='bgcomment overflow-x-hidden h-screen  flex md:items-center    '>

                <div className='  flex flex-col md:flex-row  xl:gap-[30px] mx-auto md:gap-[50px]  w-[400px] md:w-[92%] lg:w-[90%] xl:w-[70%]  '>
                    <div className='flex  flex-col md:pt-[80px] items-center  md:items-start   '>
                        <img  height="107px" width="302px" className=' md:-ml-[28px] ' src="./loginlogo.svg" alt="" />
                        <p className=' text-center md:text-left text-[20px] md:text-[28px] leading-none '>
                            Facebook helps you connect and share with the people in your life.
                        </p>
                    </div>

                    <div className='flex flex-col items-center md:items-end justify-center ' >
                        <form className='flex flex-col items-center w-[350px] md:w-[396px] gap-[13px] shadow-2xl py-[10px] px-[14px] bg-white rounded-lg mt-[50px] '>
                            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' className=' text-lg h-[52px] p-[8px] w-full outline-[#1877F2] border-[0.1px] rounded-md border-gray-200 ' type="text" />
                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className=' text-lg h-[52px] p-[8px] w-full outline-[#1877F2] border-[0.1px] rounded-md border-gray-200 ' type="password" />
                            <button onClick={loginTo} type="submit" className='bg-[#1877F2] h-[52px] w-full rounded-md text-white text-xl font-[800] '>Log in</button>

                            <div className='w-full flex items-center justify-center '>
                                <button  className=' text-blue-500 text-sm border-b border-transparent hover:border-b hover:border-blue-500 '>Forgotten Password?</button>
                            </div>
                            <hr className='mt-[6px] mb-[12px] w-full' />

                            <button onClick={signUphandler} className='h-[48px] bg-[#42B72A] px-[16px] rounded-lg text-[17px] font-semibold text-white mb-3 hover:bg-[#42B60A] '>Create New Account</button>
                        </form>

                        <p className='mt-5 text-[10px] md:text-[14px] w-[60%] md:w-full text-center'><span className='font-bold border-b border-transparent hover:border-gray-500 '><button>Create a page </button></span> for a celebrity, brand or business.</p>

                        <div className='flex items-center justify-center w-full py-[10px] my-[5px] space-x-[10px] ' >
                            <button onClick={googlesignin} type='submit' className='flex items-center bg-gray-400 gap-2 text-white text-semibold py-[8px] px-[10px] transition-all ease-out 200 rounded-md hover:scale-[104%]  ' >
                            <img height="26px" width="26px"  src="./google.png" alt='' /> Sign in with Google
                            </button>
                         </div>
                    </div>

                </div >
                {signUppopup && <SignUp />}
            </div >
        </>
    )
}
