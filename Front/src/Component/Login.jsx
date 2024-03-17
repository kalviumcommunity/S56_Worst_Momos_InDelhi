import { useEffect, useState } from "react";


function Login(){
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(true)
    try{
        document.cookie = `username=${username};expires=`+new Date(2028,2,1).toUTCString
        const response = await axios.post('https://s56-worst-momos-indelhi.onrender.com/token',{username,password})
        document.cookie = `token=${response.data};expires=`+new Date(2028,2,1).toUTCString
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
    <input type="text" placeholder="UserName" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <input type="submit" value="login" />
        </form>

    </div>
    </>
)
}

export default Login;