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
//esp main endpoints
app.post("/get_data_esp",(req,res)=>{
    const {s1,s2,s3,s4}= req.body
    console.log(s1)
    console.log(s2)
    console.log(s3)
    console.log(s4)
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
app.get("/data_esp32",(req,res)=>{
    if(slot1&&slot2&&slot3&&slot4){
        res.status(200).json({s1:{slot1},s2:{slot2},s3:{slot3},s4:{slot4}})
    }else{
        res.status(400).json({message:"no data"})
    }
})
//esp book end point
app.get("/data_esp",(req,res)=>{
    if(slot1&&slot2&&slot3&&slot4){
        res.status(200).json({s1:{slot1},s2:{slot2},s3:{slot3},s4:{slot4}})
    }else{
        res.status(400).json({message:"no data"})
    }
})
//esp mit end points
app.post("/mit_get_data",(req,res)=>{
    const {book_slot}=req.body
    console.log(book_slot)
    if(book_slot=="s1"){
slot1="yellow"
  res.status(200).send({message:"slot booked"})
    }else if(book_slot=="s2"){
        slot2="yellow"
        res.status(200).send({message:"slot booked"})
    }else if(book_slot=="s3"){
        slot3="yellow"
        res.status(200).send({message:"slot booked"})
    }else if(book_slot=="s4"){
        slot4="yellow"
        res.status(200).send({message:"slot booked"})
    }else{
        res.status(401).send({message:"slot not found"})
    }

})
app.get("/mit_send_data",(req,res)=>{
   if(slot1&&slot2&&slot3&&slot4){
        res.status(200).json({s1:{slot1},s2:{slot2},s3:{slot3},s4:{slot4}})
    }else{
        res.status(400).json({message:"no data"})
    }
   

})
app.listen("3000",()=>{
    console.log("server is running on port 3000")
}) 