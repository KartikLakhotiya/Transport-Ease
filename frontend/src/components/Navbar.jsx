import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between" style={{backgroundColor : "#243160" , borderRadius: "20px"}}>
    <Link to="/">
      <a class="logo d-flex align-items-center">
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
          <Link to='/register'><li><a class="get-a-quote" style={{margin:'0',marginRight:'43px'}}>Register</a></li></Link>
        </ul>
      </nav>

    </div>
  </header>
  )
}

export default Navbar