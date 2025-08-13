import React from 'react';
import './Homepage.css'; // Make sure this file includes your styles
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import mycash from '../assets/mycash.png';
import zimsec from '../assets/zimsec.jpeg';
import leengate from '../assets/leengate.webp';
import bell from '../assets/bell.jpeg';
import tatu from '../assets/tatu.png';
import pomona from '../assets/pomona.png';
import cellulant from '../assets/cellulant.png';
import nbs from '../assets/Nbs-removebg-preview.png';
import july28 from '../assets/july28.png';
import karan from '../assets/karan.png';
import exodus from '../assets/exodus.png';
import abt from '../assets/abt.jpeg';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  const testimonials = [
  {
   name: "Marketing Lead",
    position: "  MyCash",
    text: "Creative Journey transformed our brand presence with their innovative approach and attention to detail. Their team is professional, creative, and truly invested in our success from start to finish.",
    rating: 5,
  },
  {
    name: " CEO",
    position: "Leengate",
    text: "Their work is professional, inspiring, and deeply collaborative. True brand architects.",
    rating: 4,
  },
  {
    name: "Manager",
    position: "Karan Investiments",
    text: "Creative Journey delivered stunning signage that turned heads and boosted our visibility bold, professional, and perfectly on brand.",
    rating: 5,
  },
   {
    name: "CEO,",
    position: "Tatu Capital",
    text: "The visuals from Creative Journey captured our event’s energy perfectly crisp photography and cinematic videography that truly impressed.",
    rating: 5,
  },
    {
    name: "Marketing Executive",
    position: "Nbs Bank",
    text:  "Creative Journey delivered powerful visuals for NBS sharp, professional shots that brought our brand story to life beautifully." , 
    rating: 3,
  },
];
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 cards at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 card on mobile
        },
      },
    ],
  };

  return (
    <div>

<nav className="glass-navbar">
  <div className="glass-content">
    <Link to="/" className="glass-logo">Creative Journey</Link>
    <ul className="glass-links">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</nav>




      {/* -- Hero Section -- */}


<header className="cta-header">
  <img src={logo} alt="Creative Journey Logo" className="cta-logo" />

  <a className="luxury-cta" href="#contact">
     Start Your Creative Journey
  </a>
</header>

      {/* -- Partners / Clients Section -- */}
      <section id="partners">
        <div className="Partners">
          <h2>Our Clients</h2>
          <p>We’ve partnered with forward-thinking brands across Africa:</p>
        </div>

        <div className="logo-wrapper">
          <ul className="partner-logos">
            
                <li><img src={mycash} alt="MyCash logo" /></li>
                <li><img src={zimsec} alt="ZIMSEC logo" /></li>
                <li><img src={leengate} alt="LEENGATE logo" /></li>
                <li><img src={bell} alt="Bell Petroleum logo" /></li>
                <li><img src={tatu} alt="TATU Capital logo" /></li>
                <li><img src={pomona} alt="Pomona Steel logo" /></li>
                <li><img src={cellulant} alt="Cellulant logo" /></li>
                <li><img src={nbs} alt="NBS logo" /></li>
                <li><img src={july28} alt="July28 logo" /></li>
                <li><img src={karan} alt="Karan logo" /></li>
               <li><img src={exodus} alt="Exodus logo" /></li>
          </ul>
        </div>
      </section>

     <section className="top-notch-services">
  <div className="services-header">
    <h2>OUR TOP NOTCH SERVICES</h2>
    <p className="subtitle">At Creative Journey, we build bold and memorable digital brand shaping your identity for the modern age.</p>
  </div>
<section className="staggered-section">
  <div className="services-grid">
    <div className="crazy-box box-1">
      <h3>Digital Design</h3>
      <p>Crafting brand stories and visual identities that resonate and convert.</p>
    </div>
    <div className="crazy-box box-2">
      <h3>Digital Marketing</h3>
      <p>Custom campaigns that boost awareness, drive engagement, and maximize ROI.</p>
    </div>
    <div className="crazy-box box-3">
      <h3>Web Design</h3>
      <p>Responsive, SEO-optimized platforms designed for scale and impact.</p>
    </div>
    <div className="crazy-box box-4">
      <h3>Creative Writing</h3>
      <p>High-impact photography, videography, animation, and audio content.</p>
    </div>
    <div className="crazy-box box-5">
      <h3>Media Production</h3>
      <p>High-impact photography, videography, animation, and audio content.</p>
    </div>
    <div className="crazy-box box-6">
      <h3>Branding & Signage</h3>
      <p>From logos to vehicle wraps—make your brand visible and unforgettable.</p>
    </div>
  </div>
</section>


</section>





      {/* -- Testimonials Section -- */}
      
    <section className="testimonials-section">
      <h4 className="section-subtitle">Testimonials</h4>
      <h2 className="section-title">Client says about us</h2>

      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-text-box">
              <span className="quote-mark">“</span>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-position">{t.position}</p>

              {/* Rating Stars */}
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < t.rating ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-text">{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>

      <h4 className="section-subtitle">Happy Clients</h4>
      <h2 className="section-title">Successfully worked with them</h2>
    </section>

      {/* -- About Section -- */}
    <section id="about">
  <h2>About Us</h2>
  <div className="about-flex">
    <div className="about-text">
      <p>
        Creative Journey is an independent Zimbabwean branding and marketing agency built to revolutionize how businesses connect with their audiences.
        We don’t just design logos or run campaigns—we craft transformative brand experiences rooted in creativity, innovation, and integrity.
      </p>
      <p>
        <strong>Our Vision:</strong> We aspire to be Africa’s most preferred creative marketing and advertising service provider,
        reshaping the future through design thinking, meaningful storytelling, and relentless innovation.
      </p>
      <p>
        <strong>Our Mantra:</strong> To revolutionize the marketing and advertising landscape by consistently delivering creative, innovative, and ethical solutions.
        We're redefining what it means to be a full-service agency—holding ourselves to a higher standard of excellence, purpose, and transparency.
      </p>
    </div>
    <div className="about-image">
      <img src={abt} alt="Team member sitting on a chair" />
    </div>
  </div>
</section>




  {/* -- Contact Section -- */}
        <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong>creativejourney@gmail.com</p>
          <p><strong>Phone:</strong> +263 78 896 146</p>
          <p><strong>Address:</strong> Harare</p>
          <p><strong>Hours:</strong> 09:00 - 18:00</p>
        </div>
      </div>
    </section>

      {/* -- Contact Section / Footer -- */}
      <footer className="footer">
      <div className="footer-columns">
        <div className="footer-logo">
          <h2>Creative Journey</h2>
          <p>Brand Architects For The Digital Age</p>
        </div>

        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Testimonial</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="#">Our Work</a></li>
             <li><a href="#">Our Client</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
               <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                    </ul>
        </div>

        
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fas fa-rss"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
          <a href="#"><i className="fab fa-flickr"></i></a>
        </div>
        <p>© Copyright. All rights reserved.</p>
      </div>
    </footer>

    </div>
  );
}

export default App;
