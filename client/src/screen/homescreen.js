import react from 'react'
import NavBar from '../component/navbar'
import './homescreen-design.css'
import am from '../Images/am.png'
import Skills from './skills'
import RecentWork from './recentwork'
import AlphaWardrobe from './alpha'
import blacklogo from '../Images/blogo.png'
import Testimonials from './testimonials'

const NavBarLocal=()=>{
    return(
        <div style={{ textAlign:'center' }} >
            <NavBar />
        </div>
    )
}


const About=()=>{
    return(
        <div style={{ textAlign:'center' , backgroundColor:'black' , color:'white' }} >
           
            <h1 id='about' style={{fontFamily:'sans-serif' }} > Hey ! I'm Awanish. Nice to meet you </h1>
            <p style={{fontFamily:'sans-serif' }} id='about-2' >


I'm a result oriented and performance driven individual who is passionate about building new , beautiful and efficient products . I love exploring new technologies and learning new skills . I'm a highly focused person who is highly motivated to achieve extraordinary results .
                   
                </p>

                <p style={{padding:'1%'}} >

                </p>
        </div>
    )
}



const Ending=()=>{
    return(
        <div>

            <div style={{ backgroundColor:'black' , textAlign:'center' , color:'white' }} >
            <img src={blacklogo} id='black-logo'  />
          <h2>Awanish Mishra</h2>
          <p style={{fontFamily:'monospace' }} id='heading-2' >
                    Learning and Leveling up to become the best version of myself
                </p>

                <div className='three-grid' >

                <p  ><a href='https://www.instagram.com/awanish.mishra/' style={{textDecoration:'none' , color:'white' }} target='_blank' >
                <i class="fa-brands fa-instagram" id='circle-border'></i>

                    </a></p>


                    <p  ><a href='https://www.linkedin.com/in/awanish-mishra-941a93195/' style={{textDecoration:'none' , color:'white' }}  target='_blank' >
                    <i class="fa-brands fa-linkedin" id='circle-border'></i>


                    </a></p>

                    <p  ><a href='tel:+919599150262' style={{textDecoration:'none' , color:'white' }}  >
                    <i class="fa fa-phone" aria-hidden="true" id='circle-border' ></i>

                    </a></p>
                </div>

                <br/>
                <p style={{fontFamily:'monospace' }} id='heading-2' >
                    handcrafted by me@February 2023
                </p>
                <br/><br/>
            </div>

        </div>

    )
}



 const HomeScreen=()=>{


    return(
        <div>
           
           <NavBarLocal />
           <br/>

            <p id='main-content' style={{ textAlign:'center' }} >
                <h1 style={{fontFamily:'sans-serif' }}  id='heading' >
                    Developer , Influencer & Mentor
                </h1>

                <p style={{fontFamily:'monospace' }} id='heading-2' >
                    I develop beautiful sites, and I like it
                </p>
                <br/>

                <img src={am} id='logo'  />

            </p>

            <br/> 
            <About />


            <Skills />
        

            <RecentWork />
            <br/><br/>
            <hr style={{color:'#C0C0C0	'}} />

            <AlphaWardrobe />
            <br/><br/>
            <hr style={{color:'#C0C0C0	'}} />

            <Testimonials />
            <br/><br/>

            <Ending />
      
        </div>
    )


}

export default HomeScreen