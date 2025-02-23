import React from 'react'
import '../Css/Work.css'
import { useState } from 'react'
import Navbox from './Navbox'
import Navbar from './Navbar';

export default function Work() {
    const[isContainerOpen,setIsContainerOpen]=useState(false);
 
    const handlecontaineropen=()=>{
     setIsContainerOpen(true);
    }
    const handlecontainerclose=()=>{
     setIsContainerOpen(false);
    }
  return (
    <>
    <Navbar/>
    <section  id="project" className='work'>
      <h2 className='heading'>
      <i class="fas fa-laptop-code"></i>
        Projects 
      <span>  Made</span>
      </h2>
      <div id="filters" class="button-group">
      <button class="btn is-checked" data-filter="*" onClick={handlecontaineropen}>All Projects</button>
      <button class="btn" data-filter=".Angular">Javascript</button>
      <button class="btn" data-filter=".basicweb">React.js</button>
      {/* <button class="btn" data-filter=".ML">Machine learning</button> */}

    </div>
    <Navbox isOpen={isContainerOpen} onClose={handlecontainerclose}  />
    <div class="box-container">

    </div>
    <div class="backbtn">
      <a href="/#work" class="btn">
        <i class="fas fa-arrow-left"></i>
        <span>Back to Home</span>
      </a>
    </div>
    </section>
    </>
  )
}
