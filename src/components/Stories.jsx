import { Close } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { db, storage } from '../firebase'
import firebase from 'firebase/compat/app'

export const Stories = ({ icon }) => {
  const user = useSelector(selectUser)
  const storypicker = useRef()
  const [imagetostory, setImagetostory] = useState(null)
  const addimagetostory = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent)  => {
      setImagetostory(readerEvent.target.result)
    }
  } 
  const sendStory = () => {
      if(imagetostory){
        db.collection("stories").add({
          name: user.displayName,
          email: user.email,
          image: user.photo,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }).then((doc) => {
          if(imagetostory){
            const uploadTask = storage.ref(`stories/${doc.id}`).putString(imagetostory, 'data_url')
            uploadTask.on("state_change", null, (error)=>console.error(error), () => {
              storage.ref("stories").child(doc.id).getDownloadURL().then((url)=>
              {db.collection('stories').doc(doc.id).set({ 
                  story: url,
                },{merge:true})
              })
            })
          }
        })
        setImagetostory('')
      }
  }
  
  return (
    <div className='max-h-[200px] min-h-[200px] min-w-[112px] max-w-[112px] rounded-xl grid grid-rows-[75%,25%] place-items-center shadow-lg cursor-pointer bg-white hover:opacity-90 hover:shadow-2xl hover:scale-[101%] overflow-hidden border-[0.1px] border-t-black/10 ' >

     {imagetostory ?
     <div className='relative w-full h-full ' >

         <img 
          className='overflow-hidden h-full w-full object-conatin '
          src={imagetostory} alt="" />
          <Close onClick={()=> setImagetostory('')} className=' absolute top-2 right-[10%] bg-white/90 rounded-full  ' /> 
       </div>
          : (<Avatar src={icon} />)}
       {/* {icon ? <img
          className='bg-gray-500 overflow-hidden h-full w-full object-cover   '
          src={icon} alt="" /> : <Avatar className='w-[100px!important] h-[100px!important] overflow-hidden object-cover '>{user?.displayName[0]}</Avatar> } */}

    { !imagetostory ? <label
      for="storypick"
      className=' rounded-b-lg flex flex-col justify-center items-center border border-t-black/20 h-full w-full '>
        <img
          className=' h-[30px] w-[30px]  border border-black/30 border-b-0 border-r-0 border-l-0 -mt-5 bg-white rounded-full object-contain p-[3px]'
          src="./add.png"
          alt=''
        />
        <input type="file" ref={storypicker} onChange={addimagetostory}  id='storypick' className='' hidden name=""/>
      
        <h4 className='text-sm pb-2 font-semibold'>Create Story</h4>
      </label> : (<button onClick={sendStory} >Send</button>)
}
    </div>
  )
}
