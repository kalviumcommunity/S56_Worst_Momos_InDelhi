// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Home from './Home';

// const Dropuser = ({data , setData}) => {
//   // const [data, setData2] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     // axios.get('http://localhost:3200/getUsers')
//     //   .then((res) => {
//     //     setData2(res.data,'all data');
//     //     // console.log(res.data,"hello")//showing all data
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });

//     axios.get('http://localhost:3200/savedUsers')
//       .then((res) => {
//         console.log(res.data,'users data')//all stored users
//         setUsers(res.data);

//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   let filteredData=[]
//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//     filteredData = filter === 'All' ? data : data.filter(el=> el.createdby === filter);
//   };
//   useEffect(()=>{
    
//     setData(filteredData)
//   },[filteredData])
//   // let filteredUsers = users.filter((user) => {
//     //   if (filter === 'All') {
//       //     // console.log(user,"hi")
//       //     return user;
      
//       //   } else {
//         //     return user.createdby == filter;
//         //   }
//         // });
        
//   return (
//     <div>
//       <div>
//         <label>
//           Filter by User:
//           <select value={filter} onChange={handleFilterChange}>
//             <option value="All">All</option>
//             {users.map((user, index) => (
//               <option key={index} value={user.username}>
//                 {user.username}
//               </option>
//             ))}
//           </select>
//         </label>
//         {/* <Home filteredData={filteredData}/> */}
//       </div>
//     </div>
//   );
// };

// export default Dropuser;
