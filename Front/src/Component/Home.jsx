import React from 'react'
import chandi from '../assets/chandi.jpg'
import karolbagh from '../assets/karolbagh.jpg'
import vish from '../assets/vish.jpg'
function Home() {
  return (
    <div className='container'>
        <div className='cont1'> 
            <img src={chandi} alt='heh'></img><br></br>
            <b>Location:-Karol Bagh</b>
            <h4>Review:-"N/A"</h4>
            <h4>Rating:-"4.0/5"</h4>
        </div>
        <div className='cont2'> 
            <img src={karolbagh} alt='heh'></img><br></br>
            <b>Location:-Vishwavidyalaya</b>
            <h4>Review:-"N/A"</h4>
            <h4>Rating:-"3.8/5"</h4>
        </div>
        <div className='cont3'> 
            <img src={vish} alt='heh'></img><br></br>
            <b>Location:-Chandi Chowk</b>
            <h4>Review:-"N/A"</h4>
            <h4>Rating:-"3.0/5"</h4>
        </div>
      
    </div>
  )
}

export default Home
