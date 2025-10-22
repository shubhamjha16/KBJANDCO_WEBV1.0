import React from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [logoError, setLogoError] = React.useState(false);
  const [judgementsOpen, setJudgementsOpen] = React.useState(false);

  const courts = [
    { name: 'Supreme Court', id: 1 },
    { name: 'Delhi High Court', id: 2 },
    { name: 'Central Administrative Tribunal', id: 3 },
    { name: 'Delhi School Tribunal', id: 4 },
    { name: 'Labour Courts', id: 5 },
    { name: 'District Courts', id: 6 }
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span><i className="icon-phone"></i> +91-8826456565</span>
            <span><i className="icon-email"></i> advocate@kbjandco.com</span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {!logoError ? (
              <img 
                src="/images/logo.png" 
                alt="KBJ & CO" 
                style={{ height: '60px', marginRight: '10px' }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <h1>KBJ & CO</h1>
                <p className="tagline">Legal Excellence & Professional Service</p>
              </>
            )}
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="active">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#team">OUR TEAM</a></li>
            <li><a href="#practice-areas">PRACTICE AREAS</a></li>
            <li 
              className="dropdown"
              onMouseEnter={() => setJudgementsOpen(true)}
              onMouseLeave={() => setJudgementsOpen(false)}
            >
              <a href="/judgements.html">NOTED JUDGEMENTS ▾</a>
              {judgementsOpen && (
                <ul className="dropdown-menu">
                  {courts.map(court => (
                    <li key={court.id}>
                      <a href={`/judgements.html?court=${court.id}`}>{court.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="/news.html">IN THE NEWS</a></li>
            <li><a href="/public-info.html">PUBLIC INFORMATION</a></li>
            <li><a href="#clients">OUR CLIENTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <button 
            className="menu-toggle" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
