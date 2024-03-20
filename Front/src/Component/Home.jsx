import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from "axios";


function Home() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [curuser, setcuruser] = useState("All");

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
    
    axios.get('https://s56-worst-momos-indelhi.onrender.com/savedUsers')
      .then((res) => {
        console.log(res.data,'users data')//all stored users
        setUsers(res.data);

      })
      .catch((error) => {
        console.log(error);
      });

    fetchData();
  }, []);

  console.log(data)
  let filteredData = curuser === 'All' ? data : data.filter(el=> el.createdby === curuser);

  return (
    <>
     <div className='Search'>

        <form>
          <input type='text' placeholder='Search items' ></input>
        </form>
        <div>
        <label>
          Filter by User:
          <select value={curuser} onChange={(e)=>{setcuruser(e.target.value)}}>
            <option value="All">All</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </label>
        {/* <Home filteredData={filteredData}/> */}
      </div>
      </div> 

    <div className='container'>
      {filteredData.map((item) => (
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
    </>
  );
}

export default Home;
