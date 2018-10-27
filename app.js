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

app.listen(port);

console.log("Server started");
