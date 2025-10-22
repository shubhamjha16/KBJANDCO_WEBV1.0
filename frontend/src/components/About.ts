export class About {
    render(): HTMLElement {
        const about = document.createElement('section');
        about.id = 'about';
        about.className = 'about section';
        about.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>OUR FIRM</h2>
                    <div class="underline"></div>
                </div>
                <div class="about-content">
                    <p class="lead">
                        KBJ & CO is a specialized litigation law firm. We fight cases in Supreme Court of India, 
                        Delhi High Court, Central Administrative Tribunal, Delhi School Tribunal, Labour Courts & 
                        Industrial Tribunals and all District Courts in Delhi.
                    </p>
                    <p>
                        We specialize in service laws, labour & industrial laws, property laws, matrimonial cases, 
                        civil disputes and criminal trials. Our firm is dedicated to providing exceptional legal 
                        representation with a focus on achieving favorable outcomes for our clients.
                    </p>
                    <p>
                        With years of experience and a proven track record, our team of expert advocates handles 
                        complex legal matters with professionalism and dedication. We pride ourselves on our 
                        client-centric approach and commitment to justice.
                    </p>
                    <a href="#contact" class="btn-primary">VIEW MORE</a>
                </div>
            </div>
        `;
        return about;
    }
}
