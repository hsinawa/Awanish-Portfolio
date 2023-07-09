import react from 'react'
import './recent.css'
import fd from '../Images/FreeDemy.png'
import checkup from '../Images/checkup.png'
import riva from '../Images/riva.png'
const RecentWork=()=>{

    const FreeDemy=()=>{
        return(
            <div>
             A platform where anyone can learn any skill for free .
              <br/>           <br/>
              <a href='https://freedemyproject.herokuapp.com/' className='visit-site' 
              
              target='_blank'

              style={{cursor:'pointer' , textDecoration:'none'  }}
              
              >Visit Site</a>
            </div>
        )
    }

    const Checkup=()=>{
        return(
            <div>
             To find  best medical facilties , and book instant appointments.
              <br/>           <br/>
              <a href='https://checkuphealth.in/' className='visit-site' 
              
              target='_blank'

              style={{cursor:'pointer' , textDecoration:'none'  }}
              
              >Visit Site</a>
            </div>
        )
    }

    const RivaHomes=()=>{
        return(
            <div>
             A firm reputed for giving best medical test results.
              <br/>           <br/>
              <a href='https://wellbelabs.in/' className='visit-site' 
              
              target='_blank'

              style={{cursor:'pointer' , textDecoration:'none'  }}
              
              >Visit Site</a>
            </div>
        )
    }


    return(
        <div>
            <div style={{textAlign:'center'}} >
                <h1 style={{fontFamily:'sans-serif' }}  id='about' > My Recent Work </h1>
                <p style={{fontFamily:'monospace' }} id='about-2' >
                   Here are few of my past projects . Want to know more ? <a href = "mailto: awanishmishra003@gmail.com" style={{textDecoration:'none' , color:'#808080	' }} > Email me <i class="fa fa-envelope" aria-hidden="true"> </i> </a>


                </p>
              
               

                </div>

            <div className='projects' >

            <div class="container">
  <img src={checkup} alt="Avatar" class="image" />
  <div class="overlay">
    <div class="text"> <Checkup/> </div>
  </div>
</div>


<div class="container">
  <img src={fd} alt="Avatar" class="image" />
  <div class="overlay">
    <div class="text"><FreeDemy/></div>
  </div>
</div>


<div class="container">
  <img src={riva} alt="Avatar" class="image" />
  <div class="overlay">
    <div class="text"> <RivaHomes /> </div>
  </div>
</div>




            </div>
<br/><br/>

        </div>
    )
}

export default RecentWork ;