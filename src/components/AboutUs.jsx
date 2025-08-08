import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import abt from '../assets/abt.jpeg'; // Adjust the path as necessary
import { FaUsers, FaCheckCircle, FaDollarSign, FaUserTie,FaBullhorn, FaHeadset, FaChartLine, FaRocket, FaPenNib, FaUserFriends  } from 'react-icons/fa';
import { FaSmile, } from 'react-icons/fa';
import { FaHandshake,FaShieldAlt } from 'react-icons/fa';


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
  const reasons = [
  {
    number: '01',
    icon: <FaBullhorn />,
    title: 'Strategic Brand Thinking',
    description: 'We craft tailored strategies that position your brand for maximum visibility and long-term growth.',
  },
  {
    number: '02',
    icon: <FaHeadset />,
    title: '24/7 Client Support',
    description: 'Our team is always on standby to assist with your campaigns, feedback, or urgent marketing needs.',
  },
  {
    number: '03',
    icon: <FaChartLine />,
    title: 'Proven ROI Performance',
    description: 'We deliver measurable results with data-driven marketing that maximizes return on investment.',
  },
  {
    number: '04',
    icon: <FaRocket />,
    title: 'Agile & Adaptive Methods',
    description: 'We use flexible workflows that quickly adapt to market trends, ensuring relevance and speed.',
  },
  {
    number: '05',
    icon: <FaPenNib />,
    title: 'Creative Assets Included',
    description: 'Our packages include content creation—graphics, video, and copy—so you don’t need extra services.',
  },
  {
    number: '06',
    icon: <FaUserFriends />,
    title: 'User-Centered Campaigns',
    description: 'We prioritize end-user behavior to craft campaigns that truly resonate and convert.',
  },
];

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

        <section className="about-company">
      <div className="about-images">
        <div className="image-group">
          <img src={abt} alt="Client" className="front-image" />
          <img src={abt} alt="Client" className="back-image" />
          <div className="client-badge">
            <h2>500+</h2>
            <p>Trusted Clients</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <p className="section-label">About Company</p>
        <h2 className="main-title">We Are Creative Journey Your Branding & Digital Partner</h2>
        <p className="description">
          Creative Journey is a full-service digital agency committed to helping brands scale creatively. We mix strategy, design, and technology to tell your story in a way that inspires action.
        </p>

        <div className="features">
          <div className="feature-item">
            <FaHandshake className="feature-icon" />
            <div>
              <h3>Trusted Partner</h3>
              <p>Clients trust us to grow their brand with creative strategies and measurable outcomes.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaRocket className="feature-icon" />
            <div>
              <h3>Fast-Track Campaigns</h3>
              <p>We deploy strategies quickly, so your brand reaches its audience without delay.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <div>
              <h3>Tested Reliability</h3>
              <p>From start to scale, we bring consistent quality and support you can rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className="why-choose-us">
      
      <h2 className="section-title">Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map(({ number, icon, title, description }) => (
          <div className="reason-card" key={number}>
            <div className="icon-wrapper">{icon}</div>
            <span className="reason-number">{number}</span>
            <h3 className="reason-title">{title}</h3>
            <p className="reason-description">{description}</p>
          </div>
        ))}
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
