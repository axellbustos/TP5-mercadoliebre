require("dotenv").config();
const express=require('express');
const app=express();
const path=require('path');


app.use(express.static('public'));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/register',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/',(req,res)=>{res.send()});
app.listen(process.env.PORT || 3030,()=>console.log('servidor corriendo'));