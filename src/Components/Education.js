import React from 'react'
import school from '../Photos/Education/green.jpg'
import college from '../Photos/Education/dei.jpeg'
import '../Css/Education.css'

export default function Education() {
  return (
    <>
      <div id="education">
           <div className="edu-container  ">
            <h1 className="heading">"<i className="fa-solid fa-graduation-cap"></i> My <span> Education</span></h1>
           <div className="edu-thought">
            <h1>Education is the most powerful weapon, which you can use to change the change the world.</h1>
           </div>
           <div className="edu-card ">
            <div className="container  ">
              <div className="card-group ">
                <div className="row g-0 justify-content-center mt-3">
                  <div className="col-md-2">
                    <img src={college} className="img-fluid rounded-start h-100 "  alt="..."/>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body  rounded-end h-100"  style={{backgroundColor:'#fff'}} >
                      <h3 className="card-title" >Bachelor Of Technology</h3>
                      <p className="card-text mt-2">Dayalbagh Educational Institute</p>
                      <h4 >2020-2024 | Completed</h4>
                    </div>
                  </div>
                </div>
                <div className="row g-0 justify-content-center mt-3 mb-3">
                  <div className="col-md-2">
                    <img src={school} className="img-fluid rounded-start h-100 "  alt="..."/>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body  rounded-end h-100"  style={{backgroundColor:'#fff'}} >
                      <h3 className="card-title" >High School | Intermediate</h3>
                      <p className="card-text mt-2">Green Land Convent Senior Secondary School | CBSE</p>
                      <h4 >2015-2019 | Completed</h4>
                    </div>
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
