import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
          <main id="main">

<section id="featured-services" class="featured-services">
  <div class="container">

    <div class="row gy-4" style={{margin:'61px'}}>

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-cart-flatbed"></i></div>
        <div>
          <h4 class="title">Customized Solutions</h4>
          <p class="description"> Tailor-made logistics services to suit your unique needs, whether it's last-mile delivery, warehousing, or international freight forwarding.</p>
          <a href="#service" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-truck"></i></div>
        <div>
          <h4 class="title">Multi-Modal Transportation</h4>
          <p class="description">Benefit from a variety of transportation options, including road, rail, air, and sea freight, to optimize delivery times and costs.</p>
          <a href="#service" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <div class="icon flex-shrink-0"><i class="fa-solid fa-truck-ramp-box"></i></div>
        <div>
          <h4 class="title">Scalable Infrastructure</h4>
          <p class="description">Grow your business with confidence, knowing that our logistics infrastructure is flexible and scalable to accommodate your evolving needs.</p>
          <a href="#service" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
        </div>
      </div>

    </div>

  </div>
</section>

<section id="about" class="about pt-0" style={{margin:'61px'}}>
  <div class="container" data-aos="fade-up">

    <div class="row gy-4">
      <div class="col-lg-6 position-relative align-self-start order-lg-last order-first">
        <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
        <a href="assets/videos/Logistics Intro Video.mp4" class="glightbox play-btn"></a>
      </div>
      <div class="col-lg-6 content order-last  order-lg-first">
        <h3>About Us</h3><br/>
        <p>
          At Transport Ease, we're more than just a logistics provider - we're your strategic partner in navigating the complexities of modern supply chains. With a relentless focus on innovation and customer satisfaction, we offer tailored solutions to meet your unique logistics needs. Backed by cutting-edge technology and a team of dedicated professionals, we're committed to delivering seamless shipping experiences, enhancing efficiency, and driving your business forward. Trust us to handle your logistics, so you can focus on what you do best.
        </p>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">
            <i class="bi bi-diagram-3"></i>
            <div>
              <h5>Passionate Expertise</h5>
              <p>Our team of logistics professionals is driven by a passion for excellence, with years of expertise in the industry. We pride ourselves on our deep understanding of logistics intricacies, enabling us to provide customized solutions that exceed expectations.</p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-fullscreen-exit"></i>
            <div>
              <h5>Innovative Solutions</h5>
              <p>Embracing the latest technological advancements, we constantly innovate to stay ahead of the curve. From advanced tracking systems to sustainable practices, we're committed to delivering cutting-edge solutions that optimize efficiency and reduce environmental impact.</p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-broadcast"></i>
            <div>
              <h5>Customer-Centric Approach</h5>
              <p>At the heart of our business is a dedication to our customers. We prioritize your needs, offering personalized support and transparent communication every step of the way. Your satisfaction is our ultimate goal, and we go above and beyond to ensure your logistics experience is smooth, reliable, and stress-free.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

<section id="service" class="services pt-0" style={{margin:'50px'}}>
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <span>Our Services</span>
      <h2>Our Services</h2>

    </div>

    <div class="row gy-4">

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/storage-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Storage</a></h3>
          <p>Unlock the space you need with our storage service! Whether you're decluttering, moving, or simply need extra room, we provide secure, convenient storage solutions tailored to your requirements. Our facilities offer state-of-the-art security features and flexible options, ensuring your belongings are safe and easily accessible whenever you need them. Simplify your life and store with confidence today.</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/logistics-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Logistics</a></h3>
          <p>Streamline your supply chain with our comprehensive logistics services. From warehousing and distribution to transportation management and freight forwarding, we handle every aspect of your logistics needs with precision and efficiency. Trust us to deliver seamless solutions that optimize your operations and drive business success.</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/cargo-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Cargo</a></h3>
          <p>Experience seamless cargo shipping with our trusted service. From small parcels to oversized freight, we ensure timely delivery, reliable tracking, and professional handling. With a focus on efficiency and security, we're your go-to partner for all your cargo needs, making sure your shipments reach their destination safely and on schedule.</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/trucking-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Trucking</a></h3>
          <p>Experience seamless transportation solutions with our trusted trucking service. Whether you're moving goods locally or across borders, our fleet of modern trucks and experienced drivers ensure timely deliveries with unmatched reliability. From small shipments to full truckloads, trust us to handle your cargo with care and precision, delivering peace of mind every mile of the journey.</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/packaging-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Packaging</a></h3>
          <p>Transform your products into captivating experiences with our expert packaging service. From sleek designs to eco-friendly materials, we tailor every detail to reflect your brand's identity and values. Ensure safe transit and leave a lasting impression on your customers with our innovative packaging solutions.</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <div class="card">
          <div class="card-img">
            <img src="assets/img/warehousing-service.jpg" alt="" class="img-fluid"/>
          </div>
          <h3><a href="#service" class="stretched-link">Warehousing</a></h3>
          <p>Unlock seamless storage solutions with our warehousing service. From inventory management to order fulfillment, our state-of-the-art facilities ensure your goods are stored securely and efficiently. With flexible options tailored to your needs, streamline your supply chain and optimize your operations with ease.</p>
        </div>
      </div>

    </div>

  </div>
</section>

<section id="call-to-action" class="call-to-action">
  <div class="container" data-aos="zoom-out">

    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h3>Login or Register to use our services</h3>
      </div>
    </div>

  </div>
</section>

<section id="pricing" class="pricing pt-0" style={{margin:'50px'}}>
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <span>Pricing</span>
      <h2>Pricing</h2>

    </div>

    <div class="row gy-4">

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div class="pricing-item">
          <h4>Truck Transport</h4>
          <h3>Starting from ₹3000/kg</h3>
        </div>
      </div>

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div class="pricing-item">
          <h4>Cargo Transport</h4>
          <h3>Starting from ₹30000/ton</h3>
        </div>
      </div>

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div class="pricing-item">
          <h4>Warehousing</h4>
          <h3>Starting from ₹500/kg</h3>
        </div>
      </div>

    </div>

  </div>
</section>





</main>
<Footer/>

    </div>
  )
}

export default Home