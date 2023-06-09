const express = require("express")
const app = express()
const dotenv =  require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const port = process.env.PORT
const bodyParser = require("body-parser")
const userRouter = require("./router/userRoute")


app.use("/public", express.static("public"));

app.use("/user",userRouter)

mongoose.set("strictQuery",true)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log("Database connected successfully")
})




app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}))








app.listen(port, ()=>{
    console.log(`server start at port successfully : http://localhost:${port}`)
})