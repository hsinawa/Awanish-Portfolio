import react from 'react'
import './test.css'
const Testimonials=()=>{

 



    window.onload = function(){

        const reviews = [
            {
              id: 1,
              name: "Jayant Dalmia",
              job: "Co-Founder @Infuzex",
              img:
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/anjddezpg2i8dldljbgz",
              text:
                "Hey, guys, I was very fortunate that Awanish worked on Checkup Health.He built the application from scratch and was involved during the development cycle, he listened to feedbacks and bugs, that have arised and got them resolved at the earliest.Thanks a lot Awanish and all the very best to you."
            },
            {
              id: 2,
              name: "Shivika Sharma",
              job: "Publicis Spaient",
              img:
                "https://i.postimg.cc/FHgnJNKV/Screenshot-2022-11-08-at-2-02-15-AM.png",
              text:
                "Awanish did a great work ! All my demands were met without compromising the UX and UI . In some areas he even crossed my expectations , looking forward to work with him again ." ,
             

            },
            {
              id: 3,
             name: "Manendra Chelani",
                job: "Freelancer",
                img:
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                text:
                  "Hello Everyone! I want to tell you that Awanish does a great job in no time .  Worked on many projects with him , he understand the requirments and build what is expected ."
            },

            
        
          ];
          
          const img = document.getElementById("person-img");
          const author = document.getElementById("author");
          const job = document.getElementById("job");
          const info = document.getElementById("info");
          
          const prevBtn = document.querySelector(".prev-btn");
          const nextBtn = document.querySelector(".next-btn");
          
          let currentItem = 0;
          
          // load initial item
          window.addEventListener("DOMContentLoaded", () => {
            const item = reviews[currentItem];
            img.src = item.img;
            author.textContent = item.name;
            job.textContent = item.job;
            info.textContent = item.text;
          });
          
          // show person based on item
          function showPerson(person) {
            const item = reviews[person];
            img.src = item.img;
            author.textContent = item.name;
            job.textContent = item.job;
            info.textContent = item.text;
          }
          
          // show next person
          nextBtn.addEventListener("click", () => {
            currentItem++;
            if (currentItem > reviews.length - 1) {
              currentItem = 0;
            }
            showPerson(currentItem);
          });
          
          // show prev person
          prevBtn.addEventListener("click", () => {
            currentItem--;
            if (currentItem < 0) {
              currentItem = reviews.length - 1;
            }
            showPerson(currentItem);
          });
    
    }
    

    return(
        <div>
           

           <br/><br/>
<main class="main">
  <section class="container1">

    <div class="title">
    <h1 style={{fontFamily:'sans-serif' }}  id='about' > Testimonials</h1>
      <div class="underline"></div>
 
    </div>

 

<br/>

    <article class="review">
      <div class="img-container">
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/anjddezpg2i8dldljbgz" alt="" id="person-img" />
      </div>

      <h4 id="author">Jayant Dalmia</h4>
      <p id="job">Co-Founder @Infuzex</p>
      <p id="info">
      Hey, guys, I was very fortunate that Awanish worked on Checkup Health.
He built the application from scratch and was involved during the development cycle, he listened to feedbacks and bugs, that have arised and got them resolved at the earliest.

Thanks a lot Awanish and all the very best to you.
      </p>


      <div class="button-container">
        <button class="prev-btn btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

    </article>

  </section>
</main>
<br/><br/><br/><br/>

        </div>
    )
}

export default Testimonials