const express = require('express')
const bodyparser= require('body-parser')
const app = express()

var bookingroute = require('./routes/bookingroute')
var adminroute = require('./routes/adminroute')


app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')







app.use('/api/connect/' , bookingroute )
app.use('/api/admin' , adminroute )


app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = process.env.PORT || 3333;



 app.listen( port , ()=>{
    console.log('Server started of Awanish Site')
} )