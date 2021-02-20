const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    "Access-Control-Allow-Origin": "*"
  }
};


//connecting to mongodb
mongoose.connect(process.env.ATLAS_URI,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
  
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))

 const port = 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// here the routes
app.use('/api/user', require('./backend/routes/user'))
app.use('/tweets', require('./backend/routes/tweet'))

//server listening
server.listen(port , () => console.log(`Server listening to port ${port}.`))
