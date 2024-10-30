import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Deals and Steals</h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/deals">Browse Deals</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
        <button className="auth-button">Sign In / Sign Up</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>Find the Best Student Deals in Your College Town!</h2>
        <input type="text" placeholder="Enter your college town or category" className="search-bar" />
        <button className="search-button">Find Deals Near You</button>
      </section>

      {/* Featured Deals Section */}
      <section className="featured-deals">
        <h3>Featured Deals</h3>
        <div className="deal-cards-container">
          <div className="deal-card">
            <h4>50% Off at Local Cafe</h4>
            <p>Enjoy a special student discount at your favorite cafe!</p>
            <button className="deal-button">Get Deal</button>
          </div>
          <div className="deal-card">
            <h4>20% Off Fitness Membership</h4>
            <p>Exclusive membership discounts for students at local gyms.</p>
            <button className="deal-button">Get Deal</button>
          </div>
          <div className="deal-card">
            <h4>Discounted Movie Tickets</h4>
            <p>Catch the latest movies with special discounts.</p>
            <button className="deal-button">Get Deal</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h3>Why Use Deals and Steals?</h3>
        <ul className="benefits-list">
          <li>Save Money on Everyday Purchases</li>
          <li>Support Local Businesses</li>
          <li>Curated Deals Specifically for Students</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h3>What Students Are Saying</h3>
        <div className="testimonial">
          <p>"This app helped me save tons on my weekend plans!" - Alex</p>
        </div>
        <div className="testimonial">
          <p>"I love how easy it is to find deals near campus!" - Taylor</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/">Quick Links</a>
          <a href="/">FAQs</a>
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <p>Follow us on Social Media</p>
          {/* Icons for Facebook, Instagram, Twitter would be here */}
        </div>
        <div className="newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
