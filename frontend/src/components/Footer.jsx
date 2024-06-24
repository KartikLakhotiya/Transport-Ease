import React from 'react'

const Footer = () => {
  return (
    <div>
          
          <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4" style={{margin:'61px'}}>
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Transport Ease</span>
          </a>
          <p>Below are our social media handles. You can also contact us there</p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            J116/1, GIDC Phase 1 <br/>
            Umbergaon, Gujarat 396171<br/>
            India <br/><br/>
            <strong>Phone:</strong> +91 0260 2564888<br/>
            <strong>Email:</strong> svtrst2004@gmail.com<br/>
          </p>

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Transport Ease</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
      </div>
    </div>

  </footer>

    </div>
  )
}

export default Footer