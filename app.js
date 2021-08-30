const express=require('express')
const app=express();
const connectdb=require('./config/connectdb')
const contactRoutes=require('./Route/contact')

// const bodyParser = require('body-parser')

connectdb()
app.use(express.json())
app.use('/api/contacts',contactRoutes)


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))