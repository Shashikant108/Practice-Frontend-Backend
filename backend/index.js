const express=require('express')
const app=express();
const cors=require('cors');
const route= require('./router/route');
require('./database/db');
const ftype=require('./model/schema')

app.use(express.json())
app.use(cors());
app.use("/api",route);




app.listen(7100, (req, res)=>{
    console.log("server is running")
})