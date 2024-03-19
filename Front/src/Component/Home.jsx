import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://s56-worst-momos-indelhi.onrender.com/getUsers');
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  

    fetchData();
  }, []);

  return (
    <div className='container'>
      {data.map((item) => (
        <Card
          key={item._id}
          id={item._id}
          img={item.img}
          location={item.location}
          review={item.review}
          ratings={item.ratings}
        />
       
      ))}
      
     
    </div>
  );
}

export default Home;