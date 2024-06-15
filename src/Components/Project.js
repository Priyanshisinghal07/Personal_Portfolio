import React from 'react'
import { Link } from "react-router-dom";
import '../Css/Project.css'

export default function Project() {
  return (
   <>
    <div id="project">
            <div class="project-container">
              <h1 class="heading">"<i class="fas fa-laptop-code"></i> Projects <span> Made</span></h1>
              <div class="project-btn">
           <Link to="#" class="btn">
            View All
            <i class="fas fa-arrow-right"></i>
           </Link>
              </div>
              
            </div>
          
          </div>
   </>
  )
}
