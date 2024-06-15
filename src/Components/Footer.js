import React from 'react'
import '../Css/Footer.css'

export default function Footer() {
  return (
    <>
      <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Priyanshi Portfolio</h3>
          <p>
            "Thank you for visiting my personal portfolio website. Connect with me over socials."
            <br /><br />
            "Keep Rising 🚀."
          </p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-chevron-circle-right"></i> Home</a>
          <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
          <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
          <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a>
          <a href="#project"><i className="fas fa-chevron-circle-right"></i> Project</a>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <p><i className="fas fa-phone"></i> +91 905-818-4522</p>
          <p><i className="fas fa-envelope"></i> Priyanshisinghal234@gmail.com</p>
          <p><i className="fas fa-map-marked-alt"></i> Agra, Uttar Pradesh, India-283101</p>
          <div className="share">
            <a href="https://www.linkedin.com/in/priyanshi-singhal-498115227" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://www.facebook.com/priyanshi.agarwal.543908" className="fab fa-facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://instagram.com/shararti_piyu?igshid=NGExMmI2YTkyZg==" className="fab fa-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
      <div className="credit">
        Designed With <i className="fa fa-heart pulse"></i> By <a href="https://www.linkedin.com/in/priyanshi-singhal-498115227">Priyanshi Singhal</a>
      </div>
      <a href="#home" aria-label="ScrollTop" className="fas fa-angle-up active close" id="scroll-top"></a>
    </div>
    </>
  )
}
