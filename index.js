import express from 'express';
import fs from 'fs';
import {format} from  'date-fns';

const app = express();
const PORT =4000;
let filePath;

app.get('/',(req,res)=>{
    res.status(200).json({message:'I am good'})
})
app.get('/write',(req,res)=>{
    let currentDate=format(new Date(),'dd-mm-yyyy-hh-mm-ss')
    filePath = `TimeStamp/${currentDate}.txt`;
    fs.writeFileSync(filePath,`${currentDate}`,'utf8')
    res.status(200).send({message:'hey!!! i am starting to Write'})
})

app.get('/read',(req,res)=>{
    let data = fs.readFileSync(filePath,'utf8')
    res.status(200).send(`<h2>${data}</h2>`)
})
app.listen(PORT,()=>{
    console.log(`i am running at port: ${PORT}`);
})