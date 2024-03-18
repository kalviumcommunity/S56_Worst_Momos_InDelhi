import { useEffect, useState } from "react";
import axios from 'axios'

function Login(){
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(true)
    try{
        document.cookie = `username=${username};expires=`+new Date(2028,2,1).toUTCString
        axios.post('https://s56-worst-momos-indelhi.onrender.com/auth',{username,password})
        .then((response)=>{

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