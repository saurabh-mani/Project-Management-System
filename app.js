const express = require('express');


const app = express();

let port = 3000;

app.use(express.static('./src'));
app.set('views','./src');
app.set('view engine', 'ejs');

//Login Page
app.get('/',(req,res)=>{
    res.render('login',{
        msg:'',
        clr:''
    });
});

//Signup Page
app.get('/signup',(req,res)=>{
    res.render('signup',{
        msg:'',
        clr:''
    });
});


app.listen(port,()=>{
	console.log("App is running in port "+port+"...");
});
