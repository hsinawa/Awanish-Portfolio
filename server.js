const express = require('express')
const bodyparser= require('body-parser')
const app = express()

var bookingroute = require('./routes/bookingroute')
var adminroute = require('./routes/adminroute')


app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')



app.get("/" , (req,res)=>{
    res.send("Welcome to Awanish Site")
} )





app.use('/api/connect/' , bookingroute )
app.use('/api/admin' , adminroute )



const port =  3333 ;

 app.listen( port , ()=>{
    console.log('Server started of Awanish Site')
} )