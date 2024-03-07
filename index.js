import express from 'express'

const app=express();
const port=8001;

app.get('/',(req,res)=>{
    return res.send("Hello world");
})

app.listen(port,(err)=>{
    if(err){
        console.log(`there is error ${err} in the system`);
        return;
    }
    console.log("Server started at port :", port);
})