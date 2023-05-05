import { SignalCellularAltOutlined } from '@mui/icons-material'
import React from 'react'
import './index.css'
import MiniVideoCard from '../miniVideoCard'

export default function EnjoyForFree() {
  const videos = [
    {
      title: "Video 1"
    },
    {
      title: "Video 2"
    },
    {
      title: "Video 3"
    }
  ]

  return (
    <div className='enjoyForFreeSection'>
        <div className='labelSection'>
          <SignalCellularAltOutlined/> Em alta
        </div>

        <div className='enjoyForFreeVideosGrid'>
          {videos.map((video) => (
              <MiniVideoCard title={video.title}/>
          ))}
        </div>
        
    </div>
  )
}