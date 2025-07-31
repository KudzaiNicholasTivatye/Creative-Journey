import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import abt from '../assets/abt.jpeg'; // Adjust the path as necessary
import { FaUsers, FaCheckCircle, FaDollarSign, FaUserTie } from 'react-icons/fa';
import { FaSmile,FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const statsContainerRef = useRef(null);

  const animateCount = (el, target) => {
    let count = 0;
    const speed = 30;
    const update = () => {
      const increment = Math.ceil(target / speed);
      count += increment;
      if (count < target) {
        el.innerText = `${count}+`;
        requestAnimationFrame(update);
      } else {
        el.innerText = `${target}+`;
      }
    };
    update();
  };

  const resetCount = (el) => {
    el.innerText = `0+`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry.isIntersecting:', entry.isIntersecting);
        const container = entry.target;
        const counters = container.querySelectorAll('h1');
        const items = container.querySelectorAll('.stat-item');

        if (entry.isIntersecting) {
          console.log('Stats section in view — animating');
          items.forEach((item) => item.classList.add('visible'));
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            console.log('Animating count for:', target);
            animateCount(counter, target);
          });
        } else {
          console.log('Stats section out of view — resetting');
          items.forEach((item) => item.classList.remove('visible'));
          counters.forEach((counter) => resetCount(counter));
        }
      },
      { threshold: 0.5 }
    );

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => {
      if (statsContainerRef.current) {
        observer.unobserve(statsContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="umbra-about">
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

      <section className="intro-section">
        <h1>About Us</h1>
        <p>Where Bold Ideas Begin and Brands Take Off.</p>
      </section>

      <section className="we-are-umbra">
        <div className="umbra-content">
          <div className="text">
            <h2>WE ARE CREATIVE JOURNEY</h2>
            <p>
              Creative Journey is an independent Zimbabwean branding and marketing agency built to revolutionize how businesses connect with their audiences.
              We don’t just design logos or run campaigns we craft transformative brand experiences rooted in creativity, innovation, and integrity.
            </p>
            <p>
              <strong>Our Vision:</strong> We aspire to be Africa’s most preferred creative marketing and advertising service provider,
              reshaping the future through design thinking, meaningful storytelling, and relentless innovation.
            </p>
            <p>
              <strong>Our Mantra:</strong> To revolutionize the marketing and advertising landscape by consistently delivering creative, innovative, and ethical solutions.
              We're redefining what it means to be a full-service agency holding ourselves to a higher standard of excellence, purpose, and transparency.
            </p>
          </div>
          <div className="image">
            <img src={abt} alt="Team member sitting on a chair" />
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why choose us?</h2>
        <p className="section-description">
          At Creative Journey, we blend strategy, creativity, and data to help your brand grow. We’re not just marketers — we’re partners in your success, delivering bold ideas that drive real results.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Experienced Professionals</h3>
            <p className="card-text">
              Our team brings years of hands on experience across industries, combining deep marketing knowledge with fresh, creative thinking to deliver results that matter.
            </p>
          </div>
             <div className="card">
        <FaSmile className="card-icon" />
        <h3 className="card-title">Satisfaction Guarantee</h3>
        <p className="card-text">
          We’re committed to your success. If you’re not satisfied, we’ll work with you until you are — because your satisfaction is our priority.
        </p>
      </div>
      <div className="card">
        <FaDollarSign className="card-icon" />
        <h3 className="card-title">Affordable Rates</h3>
        <p className="card-text">
          We offer high quality marketing solutions at prices that fit your budget — no hidden fees, just real value.
        </p>
      </div>
      <div className="card">
        <FaHandshake className="card-icon" />
        <h3 className="card-title">Reliable & Trustworthy</h3>
        <p className="card-text">
          You can count on us to deliver on time, every time. We value honesty, consistency, and building long-term partnerships you can trust.
        </p>
      </div>
        </div>
      </section>

      {/* Stats Section with visible class by default for testing */}
      <div className="stats-wrapper" ref={statsContainerRef}>
        <section className="stats-container">
          {[
            { icon: <FaUsers className="stat-icon" />, label: 'Happy Customers', number: 1023 },
            { icon: <FaCheckCircle className="stat-icon" />, label: 'Completed Projects', number: 450 },
            { icon: <FaDollarSign className="stat-icon" />, label: 'Years of Experience', number: 5 },
            { icon: <FaUserTie className="stat-icon" />, label: 'Professional Team', number: 10 },
          ].map((stat, idx) => (
            <div key={idx} className="stat-item visible"> {/* visible class here so content shows */}
              {stat.icon}
              <h1 data-target={stat.number}>0+</h1>
              <p>{stat.label}</p>
            </div>
          ))}
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
    </div>
  );
};

export default AboutUs;
