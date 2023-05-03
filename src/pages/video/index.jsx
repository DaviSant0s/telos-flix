import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function Video() {
  return (
    <div className='video'>
      Video
      <Link to="/">Home</Link>
    </div>
  )
}
