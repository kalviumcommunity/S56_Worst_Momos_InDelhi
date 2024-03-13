import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id,location, review, ratings, img }) => {
  return (
    <div className='cont1'>
        
      <img src={img} alt={location}></img><br></br>
      <b>Location: {location}</b>
      <h4>Review: {review}</h4>
      <h4>Rating: {ratings}</h4>
       <Link to={`/update/${id}`}><button type='update'>Update</button></Link>
      <button type='delete'>Delete</button>
    </div>
  );
}

export default Card;
