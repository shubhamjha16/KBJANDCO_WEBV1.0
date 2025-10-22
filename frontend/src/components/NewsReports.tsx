import React, { useState, useEffect } from 'react';

interface NewsReport {
  id: number;
  title: string;
  image_path: string;
  source: string;
  date: string;
  description: string;
}

export function NewsReports() {
  const [newsReports, setNewsReports] = useState<NewsReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsReports();
  }, []);

  const fetchNewsReports = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news');
      const data = await response.json();
      setNewsReports(Array.isArray(data) ? data.slice(0, 6) : []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news reports:', error);
      setNewsReports([]);
      setLoading(false);
    }
  };

  return (
    <section id="news-reports" className="news-reports section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">IN THE NEWS</h2>
          <p className="section-subtitle">Media Coverage of Our Notable Cases</p>
        </div>

        {loading ? (
          <div className="loading">Loading news reports...</div>
        ) : newsReports.length > 0 ? (
          <>
            <div className="news-grid">
              {newsReports.map((news) => (
                <div key={news.id} className="news-card">
                  <div className="news-image-wrapper">
                    <img 
                      src={`http://localhost:5000${news.image_path}`} 
                      alt={news.title}
                      className="news-image"
                    />
                    <div className="news-overlay">
                      <span className="news-source">{news.source}</span>
                    </div>
                  </div>
                  <div className="news-content">
                    <span className="news-date">{new Date(news.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="section-cta">
              <a href="/news-reports.html" className="btn-primary">
                VIEW ALL NEWS REPORTS →
              </a>
            </div>
          </>
        ) : (
          <div className="no-data-message">
            <p>No news reports available yet. Upload news through the admin panel.</p>
          </div>
        )}
      </div>
    </section>
  );
}
