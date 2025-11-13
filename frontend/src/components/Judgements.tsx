import React, { useState, useEffect } from 'react';

interface Court {
  id: number;
  name: string;
}

interface Judgement {
  id: number;
  court_id: number;
  title: string;
  file_path: string;
  date: string;
  description: string;
}

export function Judgements() {
  const [courts, setCourts] = useState<Court[]>([]);
  const [recentJudgements, setRecentJudgements] = useState<Judgement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [courtsRes, judgementsRes] = await Promise.all([
        fetch('http://localhost:5000/api/courts'),
        fetch('http://localhost:5000/api/judgements')
      ]);
      
      const courtsData = await courtsRes.json();
      const judgementsData = await judgementsRes.json();
      
      setCourts(Array.isArray(courtsData) ? courtsData : []);
      setRecentJudgements(Array.isArray(judgementsData) ? judgementsData.slice(0, 3) : []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCourts([]);
      setRecentJudgements([]);
      setLoading(false);
    }
  };

  return (
    <section id="judgements" className="judgements section">
      <div className="container">
        <div className="section-header">
          <h2>Noted Judgements,</h2>
          <div className="underline"></div>
          <p className="section-subtitle">Important Legal Precedents by Courts</p>
        </div>

        {loading ? (
          <div className="loading">Loading judgements...</div>
        ) : (
          <>
            <div className="judgements-preview">
              <div className="courts-dropdown-section">
                <h3>Browse by Court</h3>
                <div className="courts-list">
                  {courts.length > 0 ? (
                    courts.map((court) => (
                      <a 
                        key={court.id} 
                        href={`/judgements.html?court=${court.id}`}
                        className="court-link"
                      >
                        {court.name}
                      </a>
                    ))
                  ) : (
                    <p className="no-data">No courts available</p>
                  )}
                </div>
              </div>

              <div className="recent-judgements">
                <h3>Recent Judgements</h3>
                <div className="judgements-list">
                  {recentJudgements.length > 0 ? (
                    recentJudgements.map((judgement) => (
                      <a 
                        key={judgement.id}
                        href={`http://localhost:5000${judgement.file_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="judgement-item"
                      >
                        <div className="judgement-content">
                          <span className="judgement-date">
                            {new Date(judgement.date).toLocaleDateString('en-IN', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <h4>{judgement.title}</h4>
                          <p>{judgement.description}</p>
                        </div>
                        <div className="judgement-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                      </a>
                    ))
                  ) : (
                    <p className="no-data">No judgements available yet</p>
                  )}
                </div>
              </div>
            </div>

            <div className="section-cta">
              <a href="/judgements.html" className="btn-primary">
                VIEW ALL JUDGEMENTS
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
