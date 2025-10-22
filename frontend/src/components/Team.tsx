import React from 'react';

const teamMembers = [
  {
    initials: "KBJ",
    name: "Senior Partner",
    designation: "ADVOCATE",
    description: "Expert in Supreme Court litigation with over 25 years of experience in service and employment laws.",
    image: "/images/team/senior-partner.jpg"
  },
  {
    initials: "AP",
    name: "Associate Partner",
    designation: "ADVOCATE",
    description: "Specializes in Delhi High Court cases, labour laws, and industrial disputes resolution.",
    image: "/images/team/associate-partner.jpg"
  },
  {
    initials: "JA",
    name: "Junior Advocate",
    designation: "ADVOCATE",
    description: "Handles property disputes, matrimonial cases, and civil litigation matters.",
    image: "/images/team/junior-advocate.jpg"
  },
  {
    initials: "SA",
    name: "Associate Counsel",
    designation: "ADVOCATE",
    description: "Focuses on criminal trials, consumer disputes, and administrative tribunal cases.",
    image: "/images/team/associate-counsel.jpg"
  }
];

export function Team() {
  const [imageErrors, setImageErrors] = React.useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="section-header">
          <h2>Our Counsel</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Distinguished advocates with proven excellence</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="card-image-wrapper">
                {!imageErrors[index] ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={() => handleImageError(index)}
                    className="team-photo"
                  />
                ) : (
                  <div className="placeholder-image">{member.initials}</div>
                )}
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h3>{member.name}</h3>
                    <p className="designation">{member.designation}</p>
                    <p className="description">{member.description}</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h4>{member.name}</h4>
                <span className="role">{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
