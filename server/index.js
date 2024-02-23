const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/user',userRoutes)

app.listen(process.env.PORT,()=>{
  console.log(`Server running in port ${process.env.PORT}`);
})

mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log('Database Connection Successfully');
  }).catch((err)=>{
    console.error(err);
})