import React from 'react'
import photo from '../Photos/About/Photo.jpeg'
import { Link } from "react-router-dom";
import '../Css/About.css'

export default function About() {
  return (
    <>
      <div id="about">
            <div className="about-cont">
              <h1 className="about-head">
                <i
                  className="fas fa-user about-icon"
                  style={{color: '#111212',  paddingRight: '0.5rem'}}
                 
                ></i
                >About<span className="about-h1">Me</span>
              </h1>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-lg-5 col-12 col-sm-12 about-row">
                    <img
                      src={photo}
                      className="img-fluid about-img"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 col-12 col-sm-12 about-content">
                    <h3>I'm Priyanshi Singhal</h3>
                    <span className="tag">Web Developer</span>
                    <p className="about-content-p">
                      I am an Web developer based in Bangalore, India. I am an
                      B.Tech undergraduate from Dayalbagh education Institute. I
                      am very passionate about improving my coding skills &
                      developing applications & websites. I build WebApps and
                      Websites. Working for myself to improve my skills.
                    </p>

                    <div className="row box-container">
                      <div className="col-md-5 col-12 col-sm-12">
                        <p><span>Age:</span> 22</p>
                        <p><span>Phone:</span> +91 905-818-4522</p>
                      </div>
                      <div className="col-md-7 col-12 col-sm-12">
                        <p><span>Email:</span> Priyanshisinghal234@gmail.com</p>
                        <p><span>Place:</span> Bangalore, Karnataka</p>
                      </div>
                    </div>
                    <div className="resume-btn">
                      <Link
                        to="https://drive.google.com/file/d/1aIPivEMpakFZfs2QD5STHvU9h4-Ssmv2/view?usp=drivesdk"
                        className="btn" target="_blank"
                        ><span>Resume</span
                        ><i
                          className="fas fa-angle-right"
                          style={{color: '#fafafa'}}
                        ></i
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
