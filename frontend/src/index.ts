// Entry point of the application
import { Header, Hero, About, Team, PracticeAreas, Judgements, Clients, Contact, Footer } from './components/index.js';

const app = document.getElementById('app');

if (app) {
    // Render all components
    const header = new Header();
    const hero = new Hero();
    const about = new About();
    const team = new Team();
    const practiceAreas = new PracticeAreas();
    const judgements = new Judgements();
    const clients = new Clients();
    const contact = new Contact();
    const footer = new Footer();

    app.appendChild(header.render());
    app.appendChild(hero.render());
    app.appendChild(about.render());
    app.appendChild(team.render());
    app.appendChild(practiceAreas.render());
    app.appendChild(judgements.render());
    app.appendChild(clients.render());
    app.appendChild(contact.render());
    app.appendChild(footer.render());

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(this: HTMLElement, e: Event) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = href ? document.querySelector(href) : null;
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
} else {
    console.error('App element not found');
}