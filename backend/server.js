require('dotenv').config()
const express = require('express')
const Routes = require('./routes/bookRoutes') 
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/books',Routes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to database and Listening on port ', process.env.PORT)
    })
    
})
.catch((err)=>{
    console.log(err)
})


