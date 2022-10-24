import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import { db } from '../firebase';
import { FreindStories } from './FreindStories';
import { NewPosts } from './NewPosts'
import { Options } from './Options'
import { Posts } from './Posts'
import { Stories } from './Stories'


export const Feed = () => {
  const user = useSelector(selectUser)
  // useEffect(()=> {
  //   db.collection("stories").orderBy("timestamp","desc").onSnapshot(snapshot=>{
  //     setStory(
  //       snapshot.docs.map((doc)=>({
  //         id:doc.id,
  //         data:doc.data(),
  //       }))
  //       )
  //     })
  //   },[]);
  // const [story,setStory] = useState([])
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
  }, []);

  return (
    <div className='flex flex-col items-center gap-[20px] h-screen overflow-x-hidden overflow-y-scroll scrollbar-none w-[100%] lg:w-[56%] md:w-[70%] pb-[26px] '>
      <div className='flex flex-col bg-white text-black mt-3  md:mt-6 rounded-lg shadow-md w-[358px] md:w-[505px] '>
        <div className='flex items-center  justify-between p-1 space-x-2 md:w-full h-[60px] '>
          <Options logos="book.png" title='Stories' />
          <Options logos="reel.png" title='Reels' />
          <Options logos="video.png" title='Rooms' />
        </div>
        <hr />
        <div className='flex space-x-2 p-[16px] overflow-y-hidden overflow-x-scroll 
        scrollbar-thumb-white md:scrollbar-thumb-blue-500 scrollbar-thin md:scrollbar-thumb-rounded-full '>
        <Stories icon={user?.photo} story />

        {/* freind storiess section */}
        {/* {story.map(({id,data:{name,story}})=>(
          <FreindStories
          key={id}
          icon={name}
          bgstory={story}
           />
        ))} */}
        <FreindStories icon={user?.photo} bgstory="https://assets.vogue.in/photos/6239a88deb60bae3c5bc6821/2:3/w_2560%2Cc_limit/Dubai.jpg" />
          <FreindStories icon="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/09/virat-kohli-ians-1125240-1657384748.png?itok=NtGcIUs4" bgstory="https://www.cricket.com.au/~/media/News/2022/10/23KohliCelebrates.ashx?la=en&hash=C2C18E3EA795C23E538D2914989C1A23E24456CB" />
          <FreindStories icon="https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds" bgstory="ronaldo.jfif" />
          <FreindStories icon="https://wallpaperaccess.com/full/213588.jpg" bgstory="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg.large.jpg" />
         
          
        </div>
      </div>

      <Posts />
     
      {posts.map(({id,data:{ message,name,image,timestamp,email,postImage }})=>(
          <NewPosts
          key={id}
          image={image}
          name={name}
          postimage={postImage}
          email={email}
          message={message}
          time={new Date (timestamp?.seconds * 1000).toLocaleTimeString()}
           />
      ))}

    </div>
  )
}
