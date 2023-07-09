import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button} from '@material-ui/core'
import am from '../Images/am.png'
import './connect.css'
import TextField from '@material-ui/core/TextField'
import { ConnectAction } from "../actions/messageaction";
import  Loader2  from "./loader";
import {ConnectReducer} from '../reducers/connectreducer'



const ConnectionForm=()=>{

    const dispatch = useDispatch()
    const [name, setname] = useState("");
   
    const [message, setmessage] = useState("");
    const [contactnumber, setcontactnumber] = useState();

    const getloading = useSelector(state=>state.ConnectReducer)
    const {connectProcess} = getloading

    const sendmessage=(e)=>{
        e.preventDefault();

        if(name?.length<1)
        {
            alert('Enter Name')
            return 
        }

        if(contactnumber?.length<9)
         {
             alert('Enter Contact Number')
             return 
         }

         if(message?.length<1)
         {
             alert('Enter Message')
             return 
         }



         const connect = {
            name: name,
        
            contactnumber: contactnumber,
            
            message: message,
          };
 
         dispatch(ConnectAction(connect))
    }

    return(
        <div>
            
            <p  style={{ textAlign:'center' }} >
            <h3 style={{fontFamily:'sans-serif' }}  id='heading-2' >
                   Thanks for taking time to reach out.
                </h3>

                <a href='/'>
                <img src={am} id='logo'  />
                </a>
                <h3 style={{fontFamily:'sans-serif' }}  id='heading-2' >
                  How can I help you? 
                </h3>

            </p>


            <div id='connection-box'  >

                <div className='form' >

                <form onSubmit={sendmessage} noValidate  >
                <TextField 
                required id="standard-required"
                 label="Name" variant="outlined" style={{width:'100%'}} 
                
                value={name}
                required
                onChange={(e)=>{ setname(e.target.value) }}
                
                />

                <br/> <br/>

<TextField 

required id="standard-required"

id="outlined-basic" label="Email" variant="outlined" style={{width:'100%'}}




value={contactnumber}

onChange={(e)=>{ setcontactnumber(e.target.value) }}

/>

                <br/> <br/>



                <TextField 
                required
                id="outlined-basic" label="Message" variant="outlined" style={{width:'100%'}} 
               
                value={message}

                onChange={(e)=>{ setmessage(e.target.value) }}
                
                />

<br/> <br/>
               
<p style={{textAlign:'center'}} >
<Button variant="contained"
size='large'
style={{color:'white' , backgroundColor:'black' }}
type='submit'
>
  {
      connectProcess?(<p><Loader2/></p>): ( <p> Submit</p> ) 
  }  

</Button>
</p> 
                </form>


                </div>

                

            </div>

              
            <br/><br/>      
          
        </div>
    )

}

export default ConnectionForm ;