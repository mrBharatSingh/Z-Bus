const express=require("express")
const env=require("dotenv")

path=require("path")


const app=express()

app.use(express.static(__dirname+'./dist/zbus'))

app.get("/*",(req,res)=>{
    // res.sendFile(__dirname+'dist/zbus/index.html')
    res.send({"peeka bhoo"})
})

app.listen(process.env.PORT|| 4200)