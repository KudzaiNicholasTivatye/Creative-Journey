import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (






    <section className="contact-section">

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

      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <div className="info-block">
            <h3>Phone</h3>
            <p>+263 718 067 579</p>
          </div>
          <div className="info-block">
            <h3>Email</h3>
            <p>business@creativejourney.co.zw</p>
          </div>
          <div className="info-block">
            <h3>WhatsApp</h3>
            <p>+263 77 925 9748</p>
          </div>
          <div className="info-block">
            <h3>Office Address</h3>
            <p></p>
          </div>

          <div className="map-placeholder">
            {/* Replace with actual map embed if needed */}
            <p>Map Placeholder</p>
          </div>

          <div className="cta-box">
            <h4>Hire Us Now</h4>
            <p>We Are Always Ready To Take A Perfect Shot</p>
            <button>Get Started</button>
          </div>
        </div>
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

    </section>
  );
};

export default ContactUs;
