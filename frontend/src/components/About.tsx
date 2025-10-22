import React from 'react';

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2>Excellence in Legal Practice</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Trusted counsel for discerning clients</p>
        </div>
        <div className="about-content">
          <p className="lead">
            Specialized litigation practice with proven results across India's highest courts
          </p>
          <p>
            Our practice encompasses the Supreme Court of India, Delhi High Court, and specialized tribunals. 
            We provide strategic counsel in service law, labour disputes, property matters, and complex civil litigation.
          </p>
          <p>
            Each case receives meticulous attention from our team of seasoned advocates. 
            We combine deep legal expertise with a commitment to excellence that has earned the trust of distinguished clients.
          </p>
        </div>
      </div>
    </section>
  );
}
