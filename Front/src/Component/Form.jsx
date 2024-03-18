import React, { useState } from 'react';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function Form() {
  const [images, setImages] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState(0);
  const [createdby,setCreatedBy] = useState("")


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setCreatedBy(`${sessionStorage.getItem('username')}`)
      const res = await axios.post('https://s56-worst-momos-indelhi.onrender.com/entry', { img:images, location, review, ratings,createdby});
      console.log(res.data,"success"); 
      // Navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='formbox'>
      <h1>Form Application</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='images' value={images} onChange={(e) => { setImages(e.target.value) }} />
        <input type='text' placeholder='location' value={location} onChange={(e) => { setLocation(e.target.value) }} />
        <input type='text' placeholder='review' value={review} onChange={(e) => { setReview(e.target.value) }} />
        <input type='number' placeholder='ratings' value={ratings} onChange={(e) => { setRatings(e.target.value) }} />
        <button type='submit' className='formsubmit'>Submit</button>
        
      </form>
    </div>
  );
}

export default Form;
