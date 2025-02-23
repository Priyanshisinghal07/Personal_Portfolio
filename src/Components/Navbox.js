import React from 'react'
import { Link } from "react-router-dom";
import '../Css/Navbox.css'
import photo1 from '../Photos/Navbox/photo1.png'
import photo2 from '../Photos/Navbox/photo2.png'
import photo3 from '../Photos/Navbox/photo3.png'
import photo4 from '../Photos/Navbox/photo4.png'

import exit from '../Photos/Navbar/exit.png'
export default function Navbox({isOpen,onClose}) {
    if(!isOpen){
        return null;
    }
  return (
    <div>
       <div className="navBox">
    <img src={exit} onClick={onClose} alt=""  style={{height:"25px",width:"30px",marginTop:"-20px"}}/>

    <div class="row row-cols-2 row-cols-md-4 g-4">
  <div class="col">
    <div class="card  shadow" style={{width:"150px"}}>
      <img src={photo1} class="card-img-top " style={{height:'150px',width:"149px"}} alt="Loading Image"/>
      <div class="card-body">
        <h5 class="card-title">Zune Website</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow" style={{width:"150px"}}>
      <img src={photo2} class="card-img-top  " style={{height:'150px',width:"149px"}} alt="Loading Image" />
      <div class="card-body">
        <h5 class="card-title">Intern Website</h5>
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"150px"}}>
      <img src={photo3} class="card-img-top" style={{height:'150px',width:"149px"}} alt="Loading Image"/>
      <div class="card-body">
        <h5 class="card-title">Prediction Website</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"150px"}}>
      <img src={photo4} class="card-img-top" style={{height:'150px',width:"149px"}} alt="Loading Image"/>
      <div class="card-body">
        <h5 class="card-title">Alumni Website</h5>
       
      </div>
    </div>
  </div>
</div>

</div>
    </div>
  )
}
