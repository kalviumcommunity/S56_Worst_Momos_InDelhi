import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dropuser = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('https://s56-worst-momos-indelhi.onrender.com/getUsers')
      .then((res) => {
        setData(res.data);
        // console.log(res.data,"hello")
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('https://s56-worst-momos-indelhi.onrender.com/savedUser')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredUsers = users.filter((user) => {
    if (filter === 'All') {
      return true;
    } else {
      return user.username === filter;
    }
  });

  return (
    <div>
      <div>
        <label>
          Filter by User:
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            {filteredUsers.map((user, index) => (
              <option key={index} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Dropuser;
