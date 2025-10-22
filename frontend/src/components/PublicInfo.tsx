import React, { useState, useEffect } from 'react';

interface PublicInfoDoc {
  id: number;
  title: string;
  file_path: string;
  date: string;
  description: string;
}

export function PublicInfo() {
  const [documents, setDocuments] = useState<PublicInfoDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/public-info');
      const data = await response.json();
      setDocuments(Array.isArray(data) ? data.slice(0, 4) : []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching public info:', error);
      setDocuments([]);
      setLoading(false);
    }
  };

  return (
    <section id="public-info" className="public-info section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PUBLIC INFORMATION</h2>
          <p className="section-subtitle">Important Legal Documents & Resources</p>
        </div>

        {loading ? (
          <div className="loading">Loading documents...</div>
        ) : documents.length > 0 ? (
          <>
            <div className="info-docs-grid">
              {documents.map((doc) => (
                <a 
                  key={doc.id} 
                  href={`http://localhost:5000${doc.file_path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-doc-card"
                >
                  <div className="doc-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div className="doc-content">
                    <span className="doc-date">{new Date(doc.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                    <h3 className="doc-title">{doc.title}</h3>
                    <p className="doc-description">{doc.description}</p>
                    <span className="doc-download">DOWNLOAD PDF →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="section-cta">
              <a href="/public-info.html" className="btn-primary">
                VIEW ALL DOCUMENTS →
              </a>
            </div>
          </>
        ) : (
          <div className="no-data-message">
            <p>No documents available yet. Upload documents through the admin panel.</p>
          </div>
        )}
      </div>
    </section>
  );
}
