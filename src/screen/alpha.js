import react from 'react'
import './alpha.css'
import ap from '../Images/alpha.png'
import follow from '../Images/follow.png'



const AlphaWardrobe=()=>{


    return(
        <div>
            <div style={{textAlign:'center'}} >
             <h1 style={{fontFamily:'sans-serif' }}  id='about' > About  Alpha Wardrobe </h1>
             <img src={ap} className='alpha-logo'  />
             <div style={{backgroundColor:'black' , color:'white'}}>
             <p style={{fontFamily:'sans-serif'    , paddingTop:'2%' , paddingBottom:'3%' }} id='about-2' >Alpha Wardrobe is my instagram page . I post stuffs related with fashion and lifestyle on it regularly . 
             
             Currently it has 1000+ followers and a weekly average reach of 7000 accounts . Through Alpha Wardrobe I've influenced and helped many people in terms of dressing and grooming . 
            It also has brand reviews of 14+ Brands , which also includes brands like Zara , H&M , Tommy Hilfiger etc. It also have some lifestyle videos.

             
              </p>
              </div>
             </div>

             <div className='alpha-pic' >

                 <p>
                     <img src={follow} id='phone' />
                </p>

                <p  >
            
          
                <p style={{fontFamily:'monospace' }} id='alpha-wardrobe' >
                  <a href='https://www.instagram.com/alpha.wardrobe/' style={{textDecoration:'none' , color:'black' }} target='_blank' > Follow @alpha.wardrobe <i class="fa-brands fa-instagram"></i> 
                  </a>
                </p>
                    
                </p>

             </div>


        </div>
    )
}

export default AlphaWardrobe