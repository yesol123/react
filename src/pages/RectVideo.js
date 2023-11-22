import React from 'react'
import ReactPlayer from 'react-player';

function RectVideo() {
  const endVideo = ()=>{
    console.log('끝났음...')
  }
  const playVideo = () => {
    console.log('플레이중...')
  }

  return (
    <div>
      <h2>RectVideo</h2>
      <ReactPlayer
      onPlay={playVideo}
      playing ={false} // 영상을 멈춰있도록 설정
      controls
      muted
      onEnded={endVideo}
      url='./puppies.mp4'
      />
      <p></p>
    </div>
  )
}

export default RectVideo