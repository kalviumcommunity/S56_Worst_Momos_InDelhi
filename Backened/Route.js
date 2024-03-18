const UserModule= require('./User.js')
// const UserDetail = require('/User.js')
const express = require('express')
const app = express.Router()
const port =  3200;
const cors = require('cors')
const {validateSignup}  = require('./Validate.js')
const jwt = require('jsonwebtoken')

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
        
        const{error} = validateSignup(req.body)
        if(error){
            return res.status(400).send(error.details)
        }
        else{
            const user = new UserModule(req.body)
            await user.save()
            res.send(user)
        }
        console.log(error)
        res.status(200).json(newData)
    }
    catch(error){
        console.log(error)
    }
  })

  app.get("/savedUser",async(req,res)=>{
    try{
        const data = await UserDetail.find({})
        res.json(data)
    }
    catch(error){
        res.status(200).json({error:error})
    }
  })

  app.post("/addUsers",(req,res)=>{
    try{
        UserDetail.create(req.body).then((el)=>res.json(el))
        .catch(error => res.json(error))
    }
    catch(error){
        console.log(error)
    }
  })

  app.get("/getData",(req,res)=>{
    res.json("Success")
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
        console.log(error)
    }
  })

  app.post('/auth',async(req,res)=>{
    
    try{
        const{username,password} = req.body
        const user ={
            "username": username,
            "password": password
        }
        var token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        console.log(token)
        res.send(token)
        res.cookie('token',token,{maxAge:365*24*60*60*1000})

    }
    catch(error){
        console.log(error)
    }
  })



module.exports = app;
