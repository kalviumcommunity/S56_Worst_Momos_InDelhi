import React from 'react'
import { useState } from 'react'

function Form() {
const[images,setImages]=useState("")
const[location,setLocatiom]=useState("")
const[review,setReview]=useState("")
const[ratings,setRatings]=useState("")

const handleSubmit=async(e)=>{
  
  try{
    const res = await axios.post('https://s56-worst-momos-indelhi.onrender.com/entry',{images,location,review,ratings})
    return res;
  }
  catch(error){
    console.log(error)
  }
}

  return (
  <div className='form' onSubmit={handleSubmit}>
    <div>
      <form action="">
       <input type='text' placeholder='images' onChange={(e)=>{setImages(e.target.value)}}></input>
        <input type='text' placeholder='location' onChange={(e)=>{setLocatiom(e.target.value)}}></input>
        <input type='text' placeholder='review' onChange={(e)=>{setReview(e.target.value)}}></input>
        <input type='text' placeholder='ratings' onChange={(e)=>{setRatings(e.target.value)}}></input>
        </form>
        <button type='submit'></button>
    </div>



  </div>
  )
}

export default Form
