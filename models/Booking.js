const mongoose = require('mongoose')


const BookingSchema = mongoose.Schema({
    
    name:{
        type:String ,
        require
    } ,
    message:{
        type:String ,
        require
    } ,
    contactnumber:{
        type:String ,
        require
    }

} , {
    timestamps:true
} )

const Booking = mongoose.model('booking' , BookingSchema )
module.exports = Booking