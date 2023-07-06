const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let d = new Date();
let m_name = month[d.getMonth()];
let yr = d.getFullYear();
let dat = d.getDate();
let i=1;

app.get('/notes',(req, res)=>{
   res.json({notes:[
        { title:'first title', content:'this is the para', createdDate:`${dat} ${m_name} ${yr}`, updatedDate: yr },
        { title:'second title', content:"hey this is new para.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of L", 
        createdDate:`${dat+1} ${m_name}`, updatedDate:yr }
   ]});
    console.log('done successfully '+ (i++) + "th times");

});

const port_n = 5000;
app.listen(port_n, ()=>{console.log('Serveris running, Srish on port '+port_n)})