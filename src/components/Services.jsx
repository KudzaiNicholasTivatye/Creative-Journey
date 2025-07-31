import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Digital Design',
      desc: 'We craft compelling brand stories and immersive digital experiences that resonate. Our digital design solutions focus on driving engagement through multi-touchpoint strategies that combine creativity with strategic insight.',
    },
    {
      title: 'Digital Marketing',
      desc: 'Grow your digital presence with data-driven marketing strategies that deliver results. From social media management and content marketing to SEO and email campaigns, we help you attract, engage, and convert your ideal audience.',
    },
    {
      title: 'Web Design & Development',
      desc: 'Our responsive web solutions are tailored for performance and impact. Whether it\'s a dynamic e-commerce platform or an interactive intranet, we create websites that are user-friendly, SEO-optimized, and built to scale.',
    },
    {
      title: 'Creative Writing',
      desc: 'Words matter. Our team specializes in writing concise, compelling copy that captures attention and aligns with your brand voice—perfect for digital platforms, campaigns, and branded content.',
    },
    {
      title: 'Creative Marketing',
      desc: 'We design marketing campaigns grounded in strategy and built for a digital-first world. Our approach ensures your brand remains consistent, compelling, and competitive across all touchpoints.',
    },
    {
      title: 'Media Production',
      desc: 'Bring your story to life through professional media production. From high-quality photography and video to voiceovers, jingles, and podcast creation, we produce captivating content that builds emotional connections.',
    },
    {
      title: 'Printing, Branding & Signage',
      desc: 'From logo design to vehicle wraps and custom 3D signage, we ensure your brand identity is clearly communicated across all physical materials—elevating your brand in every environment.',
    },
    {
      title: 'Branded Collateral & Promotional Materials',
      desc: 'Make your brand unforgettable with custom-branded merchandise. We provide premium pens, diaries, apparel, mugs, corporate gifts, and more—perfect for client engagement and internal branding.',
    },
    {
      title: 'Signage Solutions',
      desc: 'Guide, inform, and inspire with creative signage solutions. We offer both indoor and outdoor signage, including wayfinding systems and innovative display concepts, tailored to enhance your brand visibility.',
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
        <section className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
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
