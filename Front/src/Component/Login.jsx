import { useEffect, useState } from "react";
import axios from 'axios'

function Login(){
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [user,setUser] = useState([])//edited


useEffect(()=>{//edited 
    axios.get('https://s56-worst-momos-indelhi.onrender.com/savedUsers')
    .then((res)=>{setUser(res.data)})
    .catch((error)=>console.log(error))
},[])

// let users = user.map((el)=>el.username)
// console.log(users)

const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(true)
    try{
        document.cookie = `username=${username};expires=`+new Date(2028,2,1).toUTCString
        sessionStorage.setItem('username',username)
        axios.post('https://s56-worst-momos-indelhi.onrender.com/auth',{username})
        .then((response)=>{
            console.log(response.data)
            document.cookie = `token=${response.data};expires=`+new Date(2028,2,1).toUTCString
        })
        .catch((err)=>console.error(err))
        // sessionStorage.setItem('username',username)
        // console.log(sessionStorage)
        // console.log(response)
    }
    catch(error){
        console.log(error)
    }

    if(username.includes(`${username}`)){
        console.log(username)
        return;
    }else{
        axios.post('https://s56-worst-momos-indelhi.onrender.com/addUsers')
        .then((res)=>console.log(res))

        
    }
}

return (
    <>
    <div>
        <form onSubmit={handleSubmit} className='loginbox' >
    <input type="text" placeholder="UserName" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <input type="submit" value="login" />
        </form>

    </div>
    </>
)
}

export default Login;