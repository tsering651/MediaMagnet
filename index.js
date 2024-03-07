import express from 'express'
import indexRouter from './routes/index.js'

const app=express();
const port=8001;

//middleware to redirect the url to the routes folder
app.use('/',indexRouter)

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