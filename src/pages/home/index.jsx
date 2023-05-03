import { Link } from 'react-router-dom';
import React from 'react'

function Home() {
  return (
    <div>
        Home
        <Link to="/videos">Video</Link>
    </div>
  )
}

export default Home