import React, {useRef, useState} from 'react'
import Videofooter from './components/footer/Videofooter'
import VideosSideBar from './components/sideBar/VideosSideBar'
import "./Video.css"

function Video({likes, messages, shares, name, description, music, url}) {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart(){

    if(play){
      videoRef.current.pause()
      setPlay(false)
    } else{
      videoRef.current.play()
      setPlay(true)
    }
    
  }

  return (
    <div className='video'>
      <video 
      className='video_player'
      ref={videoRef}
      onClick={handleStart}
      loop
      // src='https://www.tiktok.com/@dark_sakren/video/7207878237802728710?is_from_webapp=1&sender_device=pc'
      // src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
      //  src='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74'
      src={url}
    
     >
      </video>
      <VideosSideBar
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <Videofooter
        name={name}
        description={description}
        music={music}
      />
    </div>
  )
}

export default Video