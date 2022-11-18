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



if(process.env.NODE_ENV==='production'){
    app.use('/' , express.static('client/build') )
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    } )
}





const port = process.env.PORT ||  3333 ;

 app.listen( port , ()=>{
    console.log('Server started of Awanish Site')
} )
