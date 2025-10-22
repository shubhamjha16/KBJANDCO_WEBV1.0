import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { PracticeAreas } from './components/PracticeAreas';
import { Judgements } from './components/Judgements';
import { NewsReports } from './components/NewsReports';
import { PublicInfo } from './components/PublicInfo';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  React.useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const element = href ? document.querySelector(href) : null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <PracticeAreas />
      <Judgements />
      <NewsReports />
      <PublicInfo />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
