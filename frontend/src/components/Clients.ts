export class Clients {
    render(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'clients';
        section.className = 'clients section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>OUR CLIENTS</h2>
                    <div class="underline"></div>
                </div>
                <div class="clients-content">
                    <p class="lead">
                        Our clients include government employees, police officers, military & paramilitary 
                        officers, professionals including engineers, doctors, chartered accountants, professors, 
                        teachers, etc.
                    </p>
                    <div class="client-categories">
                        <div class="category">
                            <span class="category-icon">👮</span>
                            <h4>Government Employees</h4>
                        </div>
                        <div class="category">
                            <span class="category-icon">🎖️</span>
                            <h4>Military & Paramilitary Officers</h4>
                        </div>
                        <div class="category">
                            <span class="category-icon">👨‍⚕️</span>
                            <h4>Medical Professionals</h4>
                        </div>
                        <div class="category">
                            <span class="category-icon">👨‍🏫</span>
                            <h4>Educators & Professors</h4>
                        </div>
                        <div class="category">
                            <span class="category-icon">👨‍💼</span>
                            <h4>Business Professionals</h4>
                        </div>
                        <div class="category">
                            <span class="category-icon">👨‍🔧</span>
                            <h4>Engineers & Technical Experts</h4>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#contact" class="btn-primary">VIEW MORE</a>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
}
