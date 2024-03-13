import React, { useEffect } from "react";
import axios from axios
import { useParams } from "react-router-dom";

function updateUsers(){
    const {id}= useParams

}

useEffect(()=>{
    const data = async()=>{
        try{
            const res = await axios.get('https://s56-worst-momos-indelhi.onrender.com/getUsers/${id}')
        }
        catch(error){
            console.log(error)
        }
    }
})

export default updateUsers;