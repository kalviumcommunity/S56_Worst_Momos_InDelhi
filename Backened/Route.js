const UserModule= require('./User.js')
const express = require('express')
const app = express.Router()
const port =  3000;
const cors = require('cors')

app.use(express.json())

app.use(cors())

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
        res.status(200).json(newData)
    }
    catch(error){
        console.log(error)
    }
  })



module.exports = app;