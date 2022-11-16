const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Booking = require('../models/Booking')


accountSid = '23a9b5d52b20b';

authToken = 'b9605668cc8';

const client = require('twilio')('AC4b987f9ad' + accountSid + '55cac0f81f', 'ebffa4353697' + authToken + 'a71c7a16c');









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
                    client.messages
                        .create({
                            body: `Dear ${req.body.name} ,
Thanks for connecting with me . I've received your message and will connect with you very soon.
Regards ,
Awanish Mishra `,
                            from: '+15087196743',
                            to: `+91${req.body.contactnumber}`
                        })
                        .then(message => console.log('Message sent', message.sid))
                        .done();


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