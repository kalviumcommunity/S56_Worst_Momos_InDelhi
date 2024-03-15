const UserModule= require('./User.js')
const express = require('express')
const app = express.Router()
const port =  3000;
const cors = require('cors')
const {validateInput} = require('./Validate.js')

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
        const{error} = validateInput(req.body)
        console.log(error)
        res.status(200).json(newData)
    }
    catch(error){
        console.log(error)
    }
  })

  app.get('/getUsers/:id',(req,res)=>{
    try{
        const id = req.params.id
        console.log(id,"iddddd")
    UserModule.findById({_id:id})
    .then((el)=>res.json(el))
    .catch((err)=>res.json(err))
        // console.log(newResp)
        // res.send(newResp)
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