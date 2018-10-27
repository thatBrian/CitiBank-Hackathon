const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const publicPath = path.resolve(__dirname,'public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.get('/',(req,res) =>{
  // res.send();
  res.render("home");

})
app.get('/login',(req,res) =>{
  res.render("login",{layout: false});
})
app.get('/home',(req,res) =>{
  res.render("home",{layout: false});
})
app.get('/goals',(req,res) =>{
  res.render("goals",{layout: false});
})
app.get('/spending',(req,res) =>{
  res.render("spending",{layout: false});
})
app.get('/transaction',(req,res) =>{
  res.render("transaction",{layout: false});
})

app.listen(port);

console.log("Server started");
