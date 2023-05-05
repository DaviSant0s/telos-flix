import React from 'react'
import MainVideo from '../../components/mainVideo';
import Trending from '../../components/trending';
import EnjoyForFree from '../../components/enjoyForFree';

function Home() {
  return (
    <div style={{marginTop: '0.80%', marginLeft: '3.52%'}}>
      <div style={{paddingTop: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <MainVideo/>
        <Trending/>
        <EnjoyForFree/>
      </div>
    </div>
  )
}

export default Home