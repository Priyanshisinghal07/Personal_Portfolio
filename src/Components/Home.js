import React, {useEffect}  from 'react'
import '../Css/Intro.css'
import avatar from '../Photos/Home/photo-1.png'
import Typed from 'typed.js';
import Navbar from './Navbar';
import About from './About';
import Skill from './Skill';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';


export default function Home() {
 
  useEffect(() => {
    var options = {
      strings: ["Web Developer", "Fresher", "Designer"],
      typeSpeed: 25,
      backSpeed: 25,
      loop: true,
    };
    var typed = new Typed(".animated", options);
    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);
  return (
 <>
 <Navbar/>
                <div class="col-sm-12 mt-5 "></div>
       <div id="home">
            <div class="container">
              <div class="row row-cols-lg-2 row-cols-1">
                <div class="col mt-4 mb-5">
                  <h1 class="multicolortext nav-container home-head1">
                    Hi There,
                  </h1>
                  <h1 class="multicolortext home-head">
                    I'm Priyanshi Singhal
                  </h1>
                  <p class="home-para">
                  I Am A <span class="change-content animated"></span>

                  </p>
                  <a
                    class="btn btn-color btns rounded-pill"
                    href="#about"
                    role="button"
                    ><span class="btn-text">About us</span>
                      <i class="fas fa-arrow-circle-down"></i>
                  </a>
                </div>
                <div class="col mt-lg-0 mt-5 ml-5 mb-5">
                  <img src={avatar} draggable="false" class="img-fluid img-cont nav-container" alt=""  />
                </div>
              </div>
            </div>
          </div>
          <About/>
          <Skill/>
          
          <Education/>
          <Project/>
          <Contact/>
          <Footer/>
          </>
  )
}
