import react from 'react'
import logo from '../Images/logo.png'
import './component-navbar.css'
 const NavBar=()=>{


    return(
        <div>
          
<div>
    
<img src={logo} id='navbar-logo' onClick={()=>{ window.location.reload() }} style={{cursor:'pointer'}} />

<p id='connect' >

Let's Connect

</p>

</div>




        </div>
    )


}

export default NavBar