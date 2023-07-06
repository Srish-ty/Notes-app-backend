const express = require('express');

let d = new Date();
let yr = d.getFullYear();
const app = express();
let i=1;

app.get('/notes',(req, res)=>{
   res.json({ 
        1:{ title:'first title', content:'this is the para', createdDate:'today', updatedDate: yr },
        2:{ title:'second title', content:'hey yyy is the para', createdDate:'tmrw', updatedDate:'day aft tmrw' }
    });
    console.log('done successfully '+ (i++) + "th times");

});

const port_n = 5000;
app.listen(port_n, ()=>{console.log('Serveris running, Srish on port '+port_n)})