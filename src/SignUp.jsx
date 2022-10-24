import { Close, Help } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closesignup } from './features/popupSlice'
import { login } from './features/userSlice'
import {auth} from './firebase'

export const SignUp = () => {
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState('')
    const [displaypic, setDisplaypic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = (e) => {
            e.preventDefault()
            if(!firstname){
                alert("name is required ")
            } else if (!email){
                alert("Email or Mobile Number is required ")
            } else if (!password){
                alert("Password is required ")
            } 

            auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName: firstname,
                    photoURL: displaypic,
                }).then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:firstname,
                        photoURL:displaypic,
                    }))
                })
            }).catch(error => alert(error));
               
    }

    return (
        <>
           
            <div className='absolute top-0 bg-white/80 h-screen w-full z-50 flex mt-[20px] md:mt-0 items-start md:items-center justify-center '>
                <div className='shadow-2xl  w-[350px] md:w-[432px] bg-white rounded-md' >
                    <div className='flex items-center justify-between px-[16px] py-[10px] '>
                        <div className='' >
                            <h1 className='text-[32px] font-bold '>Sign Up</h1>
                            <h5 className='text-gray-500 ' >Its quick and easy</h5>
                        </div>
                        <IconButton onClick={() => dispatch(closesignup())}>
                            <Close />
                        </IconButton>
                    </div>
                    <hr />

                    <form className='p-[16px] flex flex-col gap-[10px] '>
                        <div className='flex items-center justify-center gap-3'>
                            <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='First name' className='signupinput w-[50%] ' type="text"/>
                            <input value={displaypic} onChange={e => setDisplaypic(e.target.value)} placeholder='Image link' className='signupinput w-[50%] ' type="text" />
                        </div>
                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' className='signupinput' type="text" />
                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='New password' className='signupinput' type="password" />
                        <p className='text-sm text-gray-500 -mb-2'>Date of birth<Help className='h-[16px!important]' /></p>
                        <div className='flex items-center justify-center gap-5'>
                            <select className='signupinput bg-white p-[6px] ' name="" id="" required >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>


                            </select>
                            <select className='signupinput bg-white p-[6px] ' name="" id="">
                                <option value='Jan'>Jan</option>
                                <option value='Feb'>Feb</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>


                            </select>
                            <select className='signupinput bg-white p-[6px] ' name="" id="">
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>


                            </select>

                        </div>
                        <p className='text-sm text-gray-500 -mb-2'>Gender<Help className='h-[16px!important]' /></p>
                        <div className='flex items-center  justify-center gap-5'>
                            <div className='signupinput bg-white flex items-center justify-between '>
                                Male <input type="radio" name="gender" id="select" />
                            </div>
                            <div className='signupinput bg-white flex items-center justify-between '>
                                Female <input type="radio" name="gender" id="select" />
                            </div>
                            <div className='signupinput bg-white flex items-center justify-between '>
                                Custom <input type="radio" name="gender" id="select" />
                            </div>

                        </div>
                        <p className='text-[11px] text-gray-500 '>People who use our service may have uploaded your contact information to Facebook. <button className='text-[#385898] font-semibold hover:border-b border-[#385898] ' href="">Learn more. </button></p>
                        <p className='text-[11px] text-gray-500 '>By clicking Sign Up, you agree to our <button className='text-[#385898] font-semibold hover:border-b border-[#385898] ' href="">Terms</button>,<button className='text-[#385898] font-semibold hover:border-b border-[#385898] ' href="">Privacy Policy</button>  and <button className='text-[#385898] font-semibold hover:border-b border-[#385898] ' href="">Cookies Policy</button>
                            . You may receive SMS notifications from us and can opt out at any time</p>
                        <div className='flex items-center justify-center h-[56px]  ' >

                            <button onClick={register} type='submit' className='h-[36px] w-[194px] bg-[#00a400] px-[16px] rounded-lg text-[17px] font-semibold text-white mb-3 hover:inset-52 hover:bg-[#00a400]/80  transition-all ease-in-out '>Sign Up</button>
                        </div>
                    </form>




                </div>
            </div>
        </>
    )
}
