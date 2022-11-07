import react from 'react'
import './skills.css'
const Skills = () =>{


    const Developer=()=>{
        return(
            <div>
                <h1 style={{fontFamily:'sans-serif' , marginLeft:'33%' }}  id='about' >
                    Developer 
                </h1>

                    <img src='https://static.vecteezy.com/system/resources/previews/002/363/105/original/developer-icon-free-vector.jpg' className='skills-img' />


<p>

                    <p style={{fontFamily:'sans-serif' }} id='about-2' >

                   
I like to code things from scratch, and enjoy bringing ideas to life in the browser with clean design and great interaction.

<br/>
<section style={{textAlign:'center'}} >

<h4 className='tech-used' >Technologies I Use:</h4>
<p style={{color:'#696969'}} className='tech-used' > HTML , CSS , JavaScript , Node Js , React Js , Mongo DB , XML , PHP , MySQL , Solidity </p>

<h4 className='tech-used' >Dev Tools:</h4>
<p style={{color:'#696969'}}> VS Code </p>
<p style={{color:'#696969'}}> GitHub </p>
<p style={{color:'#696969'}}> Atom</p>
<p style={{color:'#696969'}}> Sublime Text </p>
<p style={{color:'#696969'}}> Bootstrap </p>
<p style={{color:'#696969'}}> Material UI </p>
<p style={{color:'#696969'}}> Terminal </p>
</section>               
                </p>

               
</p>                

            </div>
        )
    }



    const Influencer=()=>{
        return(
            <div>
                <h1 style={{fontFamily:'sans-serif' , marginLeft:'33%' }}  id='about' >
                    Influencer 
                </h1>

                <img src='https://static.thenounproject.com/png/1571638-200.png' className='skills-img'  />


                <p>

<p style={{fontFamily:'sans-serif' }} id='about-2' >

I like to influence , lead and help people with their personal style . Followed by some lifestyle tips.


<br/><br/>
<section style={{textAlign:'center'}} >

<h4 className='tech-used' >My Social Media Page:</h4>
<p style={{color:'#696969'}} className='tech-used' > 

<a href='https://www.instagram.com/alpha.wardrobe/' style={{textDecoration:'none' , color:'#696969' , fontWeight:'bold' }} target='_blank' >
alpha.wardrobe 
</a> 
   &nbsp; is my instagram page where I post stuffs related with fashion and lifestyle. </p>

<h4 className='tech-used' >About Alpha Wardrobe:</h4>
<p style={{color:'#696969'}}> 1000+ followers</p>
<p style={{color:'#696969'}}> 200+ posts </p>
<p style={{color:'#696969'}}> 14+ Brand Reviews </p>
<p style={{color:'#696969'}}> Weekly avg reach of 7000+</p>

</section>  


</p>




</p>  


            </div>
        )
    }



    const Mentor=()=>{
        return(
            <div>
                 <h1 style={{fontFamily:'sans-serif' , marginLeft:'33%' }}  id='about' >
                   Mentor
                </h1>

                <img src='https://static.thenounproject.com/png/2449013-200.png'  className='skills-img'  />


                <p>

<p style={{fontFamily:'sans-serif' }} id='about-2' >

I genuinely care about people, and love helping people to work on their craft.

<br/><br/>
<section style={{textAlign:'center'}} >

<h4 className='tech-used' >Experiences I draw from:</h4>
<p style={{color:'#696969'}} className='tech-used' > Data Structures and Algorithms , Freelancing , UI/UX , Logo Design  , Fashion & Lifestyle  </p>

<h4 className='tech-used' >Mentor Stats:</h4>
<p style={{color:'#696969'}}> 3+ Years experience </p>
<p style={{color:'#696969'}}> 2 Short Courses </p>
<p style={{color:'#696969'}}> 1 e-Book</p>
<p style={{color:'#696969'}}> 100+ Students </p>

</section> 

</p>
</p>  

            </div>
        )
    }





    return(
        <div >
 <br/>
            <div className='skills-portray' >

           

            <p>
               <Developer />
            </p>

            <p>
              <Influencer />
            </p>

            <p>
                <Mentor />
            </p>
<br/>
            </div>
            <br/>

        </div>

    )

}

export default Skills ;