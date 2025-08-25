import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import ca from '../assets/ca.jpg';

const ContactUs = () => {
  return (






    <section className="contact">

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


   <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
         Whether you’re ready to start a project or just want to learn more about how we can help your business grow we’d love to hear from you. Fill out the form below or reach out directly via email or phone. Our team will get back to you as soon as possible.
        </p>
      </div>

     <section className="phone-section">
  <div className="phone-container">
    
    {/* Top Info Row */}
    <div className="phone-info-row">
      <div className="phone-info-box">
        <i className="fas fa-envelope"></i>
        <h4>Email Address</h4>
        <p>hello@phonemedic.com</p>
        <p>business@phonemedic.com</p>
      </div>

      <div className="phone-info-box">
        <i className="fas fa-phone"></i>
        <h4>Phone Number</h4>
        <p>(300) 1234 3431</p>
        <p>(300) 4578 9341</p>
      </div>

      <div className="phone-info-box">
        <i className="fas fa-map-marker-alt"></i>
        <h4>Office Location</h4>
        <p>Victoria Street, London, UK</p>
        <p>River Street, London, UK</p>
      </div>

      <div className="phone-info-box">
        <i className="fas fa-clock"></i>
        <h4>Work Day</h4>
        <p>Sun - Fri: 09:00 - 17:00</p>
        <p>Sat - Mon: 09:00 - 15:00</p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="phone-bottom">
      
      {/* Left Form */}
      <div className="phone-form">
        <h5>CONTACT</h5>
        <h2>Get In Touch With Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <form>
          <div className="phone-form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="phone-form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      {/* Right Image */}
      <div className="phone-image">
 <img src={ca} alt="Client"  />
      </div>

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
       
     </section>

     
  );
};

export default ContactUs;
