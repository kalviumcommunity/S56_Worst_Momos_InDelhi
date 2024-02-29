const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const mongoose = require('mongoose')
const uri  = process.env.URI
let connection = 'Disconnected'
const Router = require('./Route')

app.use('/',Router)

const connectToDB = async() =>{
  try{
    await mongoose.connect(uri)
    connection = 'Connected Successfully';
    console.log("Connected successfull")

  }
  catch(error){
    console.error("error",error)
    connection = 'Failed'
    console.log("failed")
  }
}

app.get('/ping', (req, res) => {
  res.send('Pong')
})
app.get('/', (req, res) => {
  res.send(connection)
})

connectToDB()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
