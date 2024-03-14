import React from "react";
import { useEffect,useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function UpdateUsers(){
    const {id} = useParams()
    const [img, setImages] = useState("");
    const [location, setLocation] = useState("");
    const [review, setReview] = useState("");
    const [ratings, setRatings] = useState("");

    useEffect(() => {
        axios.get(`https://s56-worst-momos-indelhi.onrender.com/getUsers/${id}`)
            .then(result => {console.log(result);
                setImages(result.data.img);
                setLocation(result.data.location);
                setReview(result.data.review);
                setRatings(result.data.ratings);
            })
            .catch(err => console.log(err));
    }, []);
    
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://s56-worst-momos-indelhi.onrender.com/getUsers/update/${id}`, {img, location, review, ratings });
      console.log(res.update,"success"); 
    //   Navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='img' value={img} onChange={(e) => { setImages(e.target.value) }} />
        <input type='text' placeholder='location' value={location} onChange={(e) => { setLocation(e.target.value) }} />
        <input type='text' placeholder='review' value={review} onChange={(e) => { setReview(e.target.value) }} />
        <input type='text' placeholder='ratings' value={ratings} onChange={(e) => { setRatings(e.target.value) }} />
        <button type='submit'>Submit</button>
        
      </form>
    </div>
    
    
  );
}


export default UpdateUsers;