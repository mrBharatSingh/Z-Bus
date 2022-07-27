const express=require("express")

path=require("path")


const app=express()

app.use(express.static(__dirname+'./dist/zbus'))

app.get("/*",(req,res)=>{
    res.sendFile(__dirname+'dist/zbus/index.html')
})

app.listen(process.env.PORT|| 4200)