import React from 'react';

const clientCategories = [
  { icon: "👮", title: "Government Employees" },
  { icon: "🎖️", title: "Military & Paramilitary Officers" },
  { icon: "👨‍⚕️", title: "Medical Professionals" },
  { icon: "👨‍🏫", title: "Educators & Professors" },
  { icon: "👨‍💼", title: "Business Professionals" },
  { icon: "👨‍🔧", title: "Engineers & Technical Experts" }
];

export function Clients() {
  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="section-header">
          <h2>OUR CLIENTS</h2>
          <div className="underline"></div>
        </div>
        <div className="clients-content">
          <p className="lead">
            Our clients include government employees, police officers, military & paramilitary 
            officers, professionals including engineers, doctors, chartered accountants, professors, 
            teachers, etc.
          </p>
          <div className="client-categories">
            {clientCategories.map((category, index) => (
              <div key={index} className="category">
                <span className="category-icon">{category.icon}</span>
                <h4>{category.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#contact" className="btn-primary">VIEW MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
