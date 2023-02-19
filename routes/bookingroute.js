const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Booking = require('../models/Booking')
var nodemailer = require('nodemailer')

accountSid = '23a9b5d52b20b';

authToken = 'b9605668cc8';

const client = require('twilio')('AC4b987f9ad' + accountSid + '55cac0f81f', 'ebffa4353697' + authToken + 'a71c7a16c');
//zbwxvkpfjigjxant









router.post('/connection', (req, res) => {





    Booking.find({}, (err, docs) => {

        const book = new Booking({
            name: req.body.name,
            contactnumber: req.body.contactnumber,
            message: req.body.message


        })


       


        book.save(err => {

            if (!err) {

                if (req.body.contactnumber?.length == 10) {
//                     client.messages
//                         .create({
//                             body: `Dear ${req.body.name} ,
// Thanks for connecting with me . I've received your message and will connect with you very soon.
// Regards ,
// Awanish Mishra `,
//                             from: '+15087196743',
//                             to: `+91${req.body.contactnumber}`
//                         })
//                         .then(message => console.log('Message sent', message.sid))
//                         .done();


const msg = {
    from :'awanishsampleprojects@gmail.com' ,
    to:`awanishmishra003@gmail.com` ,
    subject:`Message from ${req.body.name}` ,
    text:`Dear Awanish,
${req.body.name} has sent you a message . The message reads :' ${req.body.message} '. Contact @${req.body.contactnumber} `
};

nodemailer.createTransport({
    service:'gmail' ,
    auth:{
        user:`awanishsampleprojects@gmail.com` ,
        pass:'zbwxvkpfjigjxant' 

    } ,
    port:465,
    host:`smtp.gmail.com`
}).sendMail(msg , (err)=>{
    if(err)
    {
        console.log('Error is' , err )
    }
    else
    {
        console.log('Email sent')
    }
} )



//msg2

const msg2 = {
    from :'awanishsampleprojects@gmail.com' ,
    to:`mawanish03@gmail.com` ,
    subject:`Message from ${req.body.name}` ,
    text:`Dear ${req.body.name} ,
Thanks for connecting with me . I've received your message and will connect with you soon.
Regards ,
Awanish Mishra `
};

nodemailer.createTransport({
    service:'gmail' ,
    auth:{
        user:`awanishsampleprojects@gmail.com` ,
        pass:'zbwxvkpfjigjxant' 

    } ,
    port:465,
    host:`smtp.gmail.com`
}).sendMail(msg2 , (err)=>{
    if(err)
    {
        console.log('Error is 2' , err )
    }
    else
    {
        console.log('Email sent 2')
    }
} )





                }
                else {
                    return res.send({ message: 'Invalid Mobile Number' })
                }




                return res.send(book)
            }
            else {
                return res.send({ message: 'Something went wrong' })
            }
        }

        )
    })
})




module.exports = router