import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
  FaPaintBrush,
  FaBullhorn,
  FaCode,
  FaLightbulb,
  FaVideo,
  FaMapSigns,
} from 'react-icons/fa';

const Services = () => {
const services = [
  {
    title: 'Digital Design',
    icon: <FaPaintBrush size={40} />,
    description: 'Crafting visually compelling assets that communicate your brand with clarity and style.',
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn size={40} />,
    description: 'Driving engagement and conversions through data-led online strategies.',
  },
  {
    title: 'Web Design & Development',
    icon: <FaCode size={40} />,
    description: 'Building fast, responsive websites that are both user-friendly and SEO-optimized.',
  },
  {
    title: 'Creative Marketing',
    icon: <FaLightbulb size={40} />,
    description: 'Telling your brand story through innovative campaigns and strategic messaging.',
  },
  {
    title: 'Media Production',
    icon: <FaVideo size={40} />,
    description: 'Producing high-quality photo, video, and audio content that captures attention.',
  },
  {
    title: 'Signage Solutions',
    icon: <FaMapSigns size={40} />,
    description: 'Delivering bold, custom signage that boosts visibility and brand recognition.',
  },
];


  return (
    <>
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

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <h1>Services</h1>
          <p>Home &gt; Services</p>
        </section>

        {/* Mission Statement */}
        <section className="mission">
          <h5>Our Services</h5>
          <h2>
            Our Mission Is To Make Your Business Better Through
            Technology & Creativity
          </h2>
        </section>

        {/* Services Grid */}
        
        <section className="services-section">
          
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/*red section*/}

     <section className="red-banner-wrapper">
      <div className="red-banner-tablet">
        <p className="banner-text">
          Ready to elevate your brand? Let’s collaborate and create something impactful.
        </p>
        <button className="banner-button">Get In Touch</button>
      </div>
    </section>

        {/* Pricing Section */}
        <section className="pricing">
          <h5>Pricing Plan</h5>
          <h2>We Make IT Simple, Faster, And Less Expensive</h2>
          <p>
            Donec venenatis nunc nec dui faucibus tempus. Fusce sed interdum dolor, non ultricies elit.
          </p>

          <div className="pricing-cards">
            {[
              {
                title: 'Basic Plan',
                price: '$500',
                target: 'Good For Personal Portfolio',
                benefits: [
                  'Logo design + social kit',
                  '1-Page Website',
                  '1 Month Support',
                ],
              },
              {
                title: 'Premium Plan',
                price: '$1000',
                target: 'Good For Small Company',
                benefits: [
                  'Full branding & guidelines',
                  'Corporate Website (5 Pages)',
                  '2 Months Support + SEO Setup',
                ],
                highlight: true,
              },
              {
                title: 'Corporate Plan',
                price: '$1500',
                target: 'Good For Big Company',
                benefits: [
                  'Brand strategy + marketing kit',
                  'Advanced Website + eCommerce',
                  '3 Months Support & Analytics',
                ],
              },
            ].map((plan, index) => (
              <div
                className={`pricing-card ${plan.highlight ? 'highlight-card' : ''}`}
                key={index}
              >
                <h4>{plan.title}</h4>
                <h2>{plan.price}<span>/Project</span></h2>
                <p>{plan.target}</p>
                <ul>
                  {plan.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button>Choose Plan</button>
              </div>
            ))}
          </div>
        </section>
      </div>
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
    </>
  );
};

export default Services;
