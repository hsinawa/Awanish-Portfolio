const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Booking = require("../models/Booking");
var nodemailer = require("nodemailer");

router.post("/connection", (req, res) => {
  Booking.find({}, (err, docs) => {
    const book = new Booking({
      name: req.body.name,
      contactnumber: req.body.contactnumber,
      message: req.body.message,
    });

    book.save((err) => {
      if (!err) {
        

        const HTMLTemplate = `<!DOCTYPE html>
<html>

<head>
    <title>Message Confirmation</title>
    <style>
        #BackGround-3 {

            /* Created with https://www.css-gradient.com */
            /* Created with https://www.css-gradient.com */
            background: #2FD7E1;
            background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
            background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
            background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
            height: 200px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        }

        .grid-1 {
            display: grid;
            grid-template-columns: auto auto;
        }

        #upper-half {

            width: 80%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;

        }


        #BackGround-2 {

            background: #FAF9F6;

            height: 500px;
            width: 80%;
            height: fit-content;
            margin-top: -10%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


        }


 @media screen and (max-width:800px) {
            #BackGround-3 {

                /* Created with https://www.css-gradient.com */
                background: #2FD7E1;
                background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                height: 120px;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

            }


            #BackGround-2 {

                background: #FAF9F6;

                height: 450px;
                width: 70%;
                margin-top: -10%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


            }

            .grid-1 {
                display: block;
                grid-template-columns: auto;
            }

        }



        @media screen and (max-width:500px) {

            .grid-1 {
                display: grid;
                grid-template-columns: auto;
            }


            #BackGround-3 {

                /* Created with https://www.css-gradient.com */
                background: #2FD7E1;
                background: -webkit-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: -moz-linear-gradient(bottom right, #2FD7E1, #DDDDE6);
                background: linear-gradient(to top left, #2FD7E1, #DDDDE6);
                height: 140px;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

            }


            #BackGround-2 {

                background: #FAF9F6;

                height: auto;
                width: 90%;
                margin-top: -20%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;


            }
        }
    </style>
</head>

<body>

   <div id='upper-half'>
   Hello ${req.body.name} I've received your message and I'll connect with you soon.

   </div>
   <p>Awanish</p>

</body>

</html>`;

        const msg = {
          from: "awanishsampleprojects@gmail.com",
          to: `${req.body.contactnumber}`,
          subject: `Message Received`,
          html: HTMLTemplate,
        };
        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: "awanishsampleprojects@gmail.com",
              pass: "wevwcvaaiipftztf",
            },
            port: 465,
            host: `smtp.gmail.com`,
          })
          .sendMail(msg, (err) => {
            if (err) {
              console.log("Error is", err);
            } else {
              console.log("Email sent to", req.body.contactnumber);
            }
          });

        //msg2

        const msg2 = {
          from: "awanishsampleprojects@gmail.com",
          to: `mawanish03@gmail.com`,
          subject: `Message from ${req.body.name}`,
          text: `Dear ${req.body.name} ,
Thanks for connecting with me . I've received your message and will connect with you soon.
Regards ,
Awanish Mishra `,
        };

        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: `awanishsampleprojects@gmail.com`,
              pass: "wevwcvaaiipftztf",
            },
            port: 465,
            host: `smtp.gmail.com`,
          })
          .sendMail(msg2, (err) => {
            if (err) {
              console.log("Error is 2", err);
            } else {
              console.log("Email sent 2");
            }
          });

       

        return res.send(book);
      } else {
        console.log("Printing Wrong",err);
        return res.send({ message: "Something went wrong" });
      }
    });
  });
});

module.exports = router;
