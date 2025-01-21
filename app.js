const express = require('express');
const app = express();

function verefikimiAutorizimit(req,res,next){
    const userAuthorized = true;

    if(userAuthorized){
        next();
}
else{
    res.send('User is not authorized');
}
};

app.get('/aboutus',verefikimiAutorizimit,(req,res)=>{
    res.send('Mire se vjen ne faqen about us');
});

app.listen(3000,()=>{
    console.log('Serveri eshte i gatshem ne portin 3000');
});