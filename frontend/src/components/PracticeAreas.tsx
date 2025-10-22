import React from 'react';

const practiceAreas = [
  {
    initials: "SC",
    title: "Supreme Court",
    description: "KBJ & CO represents its clients before the Supreme Court of India in cases pertaining to service & employment laws, labour & industrial laws, paramilitary forces employment disputes, property laws, matrimonial disputes, civil disputes and criminal trials."
  },
  {
    initials: "HC",
    title: "Delhi High Court",
    description: "KBJ & CO represents its clients before the Delhi High Court in cases pertaining to service & employment laws, labour & industrial laws, paramilitary forces employment disputes, property laws, matrimonial disputes, civil disputes and criminal trials."
  },
  {
    initials: "CAT",
    title: "Central Administrative Tribunal",
    description: "KBJ & CO represents its clients before the Central Administrative Tribunal, Principal Bench, New Delhi, in cases pertaining to service and employment laws. The CAT was established under Article 323-A of the Constitution of India for adjudication of disputes with respect to recruitment and conditions of service."
  },
  {
    initials: "DST",
    title: "Delhi School Tribunal",
    description: "KBJ & CO represents its clients before the Delhi School Tribunal, New Delhi, in cases pertaining to the Delhi School Education Act, 1973. The Tribunal adjudicates employment related disputes of employees of private schools (aided as well as unaided) in Delhi."
  },
  {
    initials: "LC",
    title: "Labour Courts & Industrial Tribunals",
    description: "KBJ & CO represents its clients before the Labour Courts and Industrial Tribunals in cases pertaining to The Industrial Disputes Act, 1947, The Payment of Gratuity Act, 1972, The Contract Labour (Regulation & Abolition) Act, 1970, etc."
  },
  {
    initials: "DC",
    title: "District Courts and Consumer Forums",
    description: "KBJ & CO represents its clients before all the District Courts and Consumer Forums in cases pertaining to property disputes, consumer disputes, matrimonial disputes and criminal trials."
  }
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="practice-areas section">
      <div className="container">
        <div className="section-header">
          <h2>PRACTICE AREAS</h2>
          <div className="underline"></div>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area, index) => (
            <div key={index} className={`practice-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="practice-image">
                <div className="placeholder-image">{area.initials}</div>
              </div>
              <div className="practice-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href="#contact" className="learn-more">LEARN MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
