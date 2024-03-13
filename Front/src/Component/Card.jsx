import React from 'react';

const Card = ({ location, review, ratings, img }) => {
  return (
    <div className='cont1'>
        
      <img src={img} alt={location}></img><br></br>
      <b>Location: {location}</b>
      <h4>Review: {review}</h4>
      <h4>Rating: {ratings}</h4>
       <button type='update'>Update</button>
      <button type='delete'>Delete</button>
    </div>
  );
}

export default Card;
