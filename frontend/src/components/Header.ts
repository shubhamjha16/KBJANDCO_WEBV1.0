export class Header {
    render(): HTMLElement {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
            <div class="top-bar">
                <div class="container">
                    <div class="contact-info">
                        <span><i class="icon-phone"></i> +91-8826456565</span>
                        <span><i class="icon-email"></i> advocate@kbjandco.com</span>
                    </div>
                </div>
            </div>
            <nav class="navbar">
                <div class="container">
                    <div class="logo">
                        <h1>KBJ & CO</h1>
                        <p class="tagline">Legal Excellence & Professional Service</p>
                    </div>
                    <ul class="nav-links">
                        <li><a href="#home" class="active">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#team">OUR TEAM</a></li>
                        <li><a href="#practice-areas">PRACTICE AREAS</a></li>
                        <li><a href="#judgements">NOTED JUDGEMENTS</a></li>
                        <li><a href="#clients">OUR CLIENTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    <button class="menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        `;

        // Add mobile menu toggle functionality
        const menuToggle = header.querySelector('.menu-toggle');
        const navLinks = header.querySelector('.nav-links');
        
        menuToggle?.addEventListener('click', () => {
            navLinks?.classList.toggle('active');
        });

        return header;
    }
}
