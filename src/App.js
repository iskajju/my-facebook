import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Setting } from './components/Setting';
import { PostInput } from './components/PostInput'
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed'
import { Suggestions } from './components/Suggestions'
import { selectPost, selectprofile } from './features/popupSlice';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './globals.css'
import { Login } from './Login';

function App() {
  const profile = useSelector(selectprofile)
  const postpopup = useSelector(selectPost)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  // const closepopup = () => {
  //   if(profile){
  //     dispatch(closeprofile())
  //   }
  // }

  useEffect(() => {
  auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photo : userAuth.photoURL,
        }));}

      else {
        dispatch(logout())
      }
  })
  }, [dispatch])
  

  return (
    <>
    {!user ? <Login />:( 
    <div className=" h-screen overflow-x-hidden ">
      <Header />
       <div className='flex bgcomment text-black h-screen overflow-hidden  '>
          {/* sidebar */}
          <Sidebar />

          {/* feed */}
          <Feed />

          {/* suggestions */}
          {/* <Suggestions freinds contact birthday /> */}
          <Suggestions freinds contact birthday />
        </div>


    {postpopup && <PostInput /> }
    {profile && <Setting />}
    </div>)}
    </>
  );
}

export default App;
