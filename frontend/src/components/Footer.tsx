import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>KBJ & CO</h3>
              <p>
                A specialized litigation law firm providing expert legal services across 
                various courts and tribunals in India.
              </p>
            </div>
            <div className="footer-section">
              <h3>Important Links</h3>
              <ul>
                <li><a href="#about">OUR FIRM</a></li>
                <li><a href="#team">OUR TEAM</a></li>
                <li><a href="#judgements">NOTED JUDGEMENT</a></li>
                <li><a href="#practice-areas">PRACTICE AREAS</a></li>
                <li><a href="#clients">OUR CLIENTS</a></li>
                <li><a href="#contact">CONTACT US</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Practice Areas</h3>
              <ul>
                <li>Supreme Court</li>
                <li>Delhi High Court</li>
                <li>Central Administrative Tribunal</li>
                <li>Labour Courts & Industrial Tribunals</li>
                <li>District Courts</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Find Us</h3>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Facebook">Facebook</a>
              </div>
              <div className="contact-quick">
                <p><strong>Phone:</strong> +91-8826456565</p>
                <p><strong>Address:</strong> KD 213, Pitampura, Near Kohat Enclave Metro Station, 110034</p>
                <p><strong>Email:</strong> advocate@kbjandco.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KBJ & CO. All rights reserved.</p>
        </div>
      </div>
      <div className="floating-actions">
        <a href="https://wa.me/918826456565?text=Hello%20!" className="float-btn whatsapp" aria-label="WhatsApp">
          <span>💬</span>
        </a>
        <a href="tel:+91-8826456565" className="float-btn phone" aria-label="Call">
          <span>📞</span>
        </a>
      </div>
    </footer>
  );
}
