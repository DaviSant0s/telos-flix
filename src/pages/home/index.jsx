import React from 'react'
import MainVideo from '../../components/mainVideo';
import Trending from '../../components/trending';

function Home() {
  return (
    <div style={{marginTop: '0.80%', marginLeft: '3.52%'}}>
      <div style={{paddingTop: '1%'}}>
        <MainVideo/>
        <Trending/>
      </div>
    </div>
  )
}

export default Home