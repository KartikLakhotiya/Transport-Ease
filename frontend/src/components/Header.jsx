import React from 'react'
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <div>
        <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between" style={{backgroundColor : "#243160" , borderRadius: "20px"}}>

      <Link to='/'><a class="logo d-flex align-items-center ">
        <img src="assets/img/logo.png" alt="logo"/>
        <h1>Transport Ease</h1>
      </a>
      </Link>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <Link to='/'><li><a class="">Home</a></li></Link>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <Link to='/login'><li><a class="get-a-quote">Login</a></li></Link>
          <Link to='/register'><li><a class="get-a-quote" style={{margin:'0', marginRight:'43px'}}>Register</a></li></Link>
        </ul>
      </nav>

    </div>
  </header>

  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row gy-4 d-flex justify-content-between">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" style={{marginLeft:'85px'}}>
          <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
          <p data-aos="fade-up" data-aos-delay="100">Welcome to Transport Ease, where efficiency meets excellence! Discover seamless shipping solutions, real-time tracking, and tailored logistics services designed to streamline your supply chain. From local deliveries to global freight management, we're your trusted partner in navigating the complexities of transportation. Let's elevate your logistics experience together!</p>
        </div>

        <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img src="assets/img/hero-img.svg" class="img-fluid mb-3 mb-lg-0" alt=""/>
        </div>

      </div>
    </div>
  </section>


    </div>
  )
}

export default Header