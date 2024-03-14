const UserModule= require('./User.js')
const express = require('express')
const app = express.Router()
const port =  3000;
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use(express.json())

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

  app.get('/getUsers/:_id',async(req,res)=>{
    try{
        const id = req.params._id
        console.log(id,"iddddd")
        const newResp = await UserModule.findById({_id:id})
        console.log(newResp)
        res.send(newResp)
    }
    catch(error){
        console.log(error)

    }
  })

  app.delete('/getUsers/delete/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const newDelete = await UserModule.findByIdAndDelete({_id:id})
        console.log(newDelete)
        res.send(newDelete)
    }
    catch(error){
        console.log(error)
    }
  })
  app.put('/getUsers/update/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const newUpd = await UserModule.findByIdAndUpdate({_id:id},{
            img:req.body.img,
            location:req.body.location,
            review: req.body.review,
            ratings:req.body.raings
        })
        console.log(newUpd)
        res.send(newUpd)
    }
    catch(error){
        console.lof(error)
    }
  })



module.exports = app;
