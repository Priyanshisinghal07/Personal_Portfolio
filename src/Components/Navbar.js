import React from 'react'
import { Link } from "react-router-dom";
import facebook from '../Photos/Navbar/facebook.png'
import instagram from '../Photos/Navbar/instagram.png'
import '../Css/Navbar.css'

export default function Navbar() {
  return (
   <>
    <nav class="navbar navbar-expand-lg fixed-top nav">
          <div class="container-fluid">
            <Link class="navbar-brand logo-text disabled ms-4" to="#"
              >Priyanshi</Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="fa-solid fa-bars"></i>
              </span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link nav-text" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-text" href="#about">About us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-text me-3" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-text me-3" href="#education"
                    >Education</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-text me-3" href="#project">Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-text me-3" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <Link
                class="navbar-brand rounded-circle social_border"
                to="https://www.facebook.com/priyanshi.agarwal.543908"
                target="_blank"
                >
                <img src={facebook} alt=''/></Link>
              <Link
                class="navbar-brand rounded-circle social_border"
                to="https://instagram.com/shararti_piyu?igshid=NGExMmI2YTkyZg=="
                target="_blank"
                ><img
                 src={instagram} alt=''
              /></Link>
            </div>
          </div>
        </nav>
   </>
  )
}
