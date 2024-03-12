import UserModule from './User';
const express = require('express')
const app = express.Router()
const port =  3000;

app.get('/get',(req,res)=>{
    res.json('get')
})
app.post('/post',(req,res)=>{
    res.json('post')
})
app.patch('/patch',(req,res)=>{
    res.json('patch')
})
app.put('/put',(req,res)=>{
    res.json('put')
})
app.post('/entry',async(req,res)=>{
    try{
        const newData =  await UserModule.create(req.body)
        res.send(newData)
    }
    catch(error){
        console.log(error)
    }
  })



module.exports = app;