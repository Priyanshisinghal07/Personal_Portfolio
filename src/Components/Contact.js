import React from 'react'
import '../Css/Contact.css'

export default function Contact() {
  return (
 <>
  <div id="contact">
            <div class="contacts ">
              <div class="form-area">
              <h1 class="heading"><i class="fas fa-headset" ></i>Get In <span> Touch</span></h1>
          <div class="container">
              <div class="row single-form g-0">
                  <div class="col-sm-12 col-lg-6 p-4 ps-5">
                      <div class="img-box">
                          <img draggable="false" src="https://velvety-gnome-e2eb95.netlify.app/assets/images/contact1.png" alt=""/>
                      </div>
                  </div>
              <div class="col-sm-12 col-lg-6 p-4 pr-5">
              <div class="content">
              <form >
      <div class="form-group">
          <div class="field mb-3 mt-3">
              <input type="text" id="Name" class="form-control" placeholder="Name" required/>
              <i class="fas fa-user"></i>
          </div>
           <div class="field mb-3">
              <input type="text" id="Email" class="form-control" placeholder="Email" required/>
              <i class="fas fa-envelope"></i>
           </div>
          
          <div class="field mb-3">
              <input type="text" id="Contact"  class="form-control" placeholder="Phone" required/>
              <i class="fas fa-phone-alt"></i>
          </div>
          
      
        
           <div class="message mb-3">
              <textarea name="message" id="message"  class="form-control" placeholder=" Message" required ></textarea>
              <i class="fas fa-comment-dots"></i>
           </div>
          <div class="contact-btn">
              <input type="button" value= "Submit"class="button" onclick="Send(); reset(); return false "/ >
      
             
          </div>
      </div>
      </form>
      </div>
      </div>  
      </div>
      </div>     
          </div>
      </div>
      </div>
 </>
  )
}
