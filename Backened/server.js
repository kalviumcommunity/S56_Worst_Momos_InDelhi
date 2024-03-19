const express = require('express')
const app = express()
const port = 3200
require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.URI;
let connection = 'Disconnected'
const Router = require('./Route')
const cors = require('cors')
const UserModule = require('./User.js')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())
app.use(express.json())
app.use('/', Router)

app.get('/', (req, res) => {
  res.send(connection)
})

app.get('/ping', (req, res) => {
  res.send('Pong')
})

app.get('/getUsers', (req, res) => {
  UserModule.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




const connectToDB = async () => {
  try {
    await mongoose.connect(uri)
    connection = 'Connected Successfully';
    console.log("Connected successfull")

  }
  catch (error) {
    console.error("error", error)
    connection = 'Failed'
    console.log("failed")
  }
}







app.listen(port, () => {
  connectToDB()
  console.log(`Example app listening on port ${port}`)
})