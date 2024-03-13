const express = require("express")
const margan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()
const blogRoute = require('./routes/blog') 

const app = express()

//connect cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})
.then(()=>console.log(`connect with mongoDB Success...`))
.catch((err)=>console.log(`connection fail cuase : ${err}`))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
// app.get("*",(req,res)=>{
//     res.json({
//         data: "message from server"
//     })
// })

app.use('/api',blogRoute)

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server on port ${port}`))