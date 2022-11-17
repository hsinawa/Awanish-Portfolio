import axios from "axios";
import { get } from "mongoose";
import { useHistory } from "react-router-dom";


export const ConnectAction=(connect)=>dispatch=>{
    dispatch({ type: "Connect_Request" });
    axios.post('/api/connect/connection' , connect ).then((res)=>{
        dispatch({ type: "Connect_Success" , payload:res.data});
        window.location.href='/connection_success'
        sessionStorage.setItem("Connection_Message", JSON.stringify(res.data) );
    }).catch( (err)=>{
        dispatch({ type: "Connect_Error" });
       
       window.location.href='/error'
        console.log('Error is ' , err )
    }

    )
}