const express=require("express")
const app=express()
app.use(express.json())
let slot1="green"
let slot2="green"
let slot3="green"
let slot4="green"
app.get("/",(req,res)=>{
    res.send("<h1>hello from server</h1>")
})
app.post("/get_data_esp",(req,res)=>{
    const {s1,s2,s3,s4}= req.body
    console.log(slot1)
    console.log(slot2)
    console.log(slot3)
    console.log(slot4)
    if(s1&&s2&&s3&&s4){
        slot1=s1
        slot2=s2
        slot3=s3
        slot4=s4
        res.status(200).json({message:"got data😊"})
    }else{
        console.log(s1)
        console.log(s2)
        console.log(s3)
        console.log(s4)
        res.status(401).json({message:"no data😔"})
    }
})
app.listen("3000",()=>{
    console.log("server is running on port 3000")
})