import express from 'express'
import indexRouter from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url';


const app=express();
const port=8001;

//setting up the file path
const _fileName=fileURLToPath(import.meta.url);
const _dirName=path.dirname(_fileName);

app.set('view engine','ejs');
app.set('views',path.join(_dirName,'views'));

app.use(express.static('views'));

//middleware to redirect the url to the routes folder
app.use('/',indexRouter)



// app.use(express.static(path.join(_dirName, 'styles')));




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