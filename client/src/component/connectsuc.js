import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import   './cntsuc.css'


const ConnectionSuccess=()=>{

    const message = JSON.parse(sessionStorage.getItem('Connection_Message'))

    if(message)
    {
        setTimeout(function() { sessionStorage.removeItem('Connection_Message'); window.location.reload() }, (1000*10))
    }

    return(
        <div>

            {
                message?(
                    <p>



        <div style={{textAlign:'center'}} >
        <img src='https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif' id='logo' />

        <p style={{fontFamily:'cursive' , color:'#012649' }} id='heading-2' >
                    Thankyou {message.name} ! I've received your message Successfully!
                </p>

                <p style={{fontFamily:'cursive' , color:'#012649' }} id='heading-2' >
                    I've sent you an email as well on {message.contactnumber}
                </p>

        </div>

                    </p>
                ):(
                    <p style={{color:'white'}} >
                        {window.location.href='/'}
                    </p>
                )
            }

            
        </div>
    )

}

export default ConnectionSuccess 