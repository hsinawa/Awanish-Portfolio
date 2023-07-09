

const fs = require('fs')


require('dotenv').config()

const mongoose = require('mongoose')
var mongodburl = 'mongodb+srv://awanishmishra3:awanishmishra3@cluster0.wxurcw4.mongodb.net/awanish'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Awanish Site'  )
} )

mongoose.exports = mongoose

