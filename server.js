const express=require("express")
const p
ath=require("path")


const app=express()

app.use(express.static('./dist/zbus'))

app.get("/*",(req,res)=>{
    res.sendFile('index.html',{root:'dist/zbus/'})
})

app.listen(process.env.PORT|| 4200)