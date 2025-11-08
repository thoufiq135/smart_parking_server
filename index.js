const express=require("express")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>hello from server</h1>")
})
app.listen("3000",()=>{
    console.log("server is running on port 3000")
})