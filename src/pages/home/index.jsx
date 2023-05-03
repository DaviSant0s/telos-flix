import { Link } from 'react-router-dom';
import React from 'react'
import MainVideo from '../../components/mainVideo';
import Trending from '../../components/trending';

function Home() {
  return (
    <div>
      <MainVideo/>
      <Trending/>
    </div>
  )
}

export default Home