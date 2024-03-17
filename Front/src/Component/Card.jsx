import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const handleDelete = (id)=>{
  axios.delete('https://s56-worst-momos-indelhi.onrender.com/getUsers/delete/'+id)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}
const Card = ({ id,location, review, ratings, img }) => {
  return (
    <div className='cont1'>
        
      <img src={img} alt={location}></img><br></br>
      <b>Location: {location}</b>
      <h4>Review: {review}</h4>
      <h4>Rating: {ratings}</h4>
       <Link to={`/update/${id}`}><button type='update' classname='update'>Update</button></Link>
      <button type='delete' onClick={(e)=>handleDelete(id)} classname='Delete'>Delete</button>
    </div>
  );
}

export default Card;
