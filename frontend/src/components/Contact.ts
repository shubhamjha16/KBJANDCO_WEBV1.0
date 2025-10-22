export class Contact {
    render(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'contact';
        section.className = 'contact section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>CONTACT US</h2>
                    <div class="underline"></div>
                </div>
                <div class="contact-wrapper">
                    <div class="offices">
                        <h3>Office</h3>
                        <div class="office-location">
                            <h4>New Delhi</h4>
                            <p>
                                KD 213, Pitampura,<br>
                                Near Kohat Enclave Metro Station,<br>
                                New Delhi - 110034
                            </p>
                            <p>
                                <strong>T:</strong> <a href="tel:+918826456565">+91-8826456565</a><br>
                                <strong>E:</strong> <a href="mailto:advocate@kbjandco.com">advocate@kbjandco.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="contact-form-wrapper">
                        <h3>Get in Touch</h3>
                        <form class="contact-form" id="contactForm">
                            <div class="form-group">
                                <input type="text" name="name" placeholder="Your Name *" required>
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Your Email *" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" name="phone" placeholder="Your Phone Number">
                            </div>
                            <div class="form-group">
                                <input type="text" name="subject" placeholder="Subject *" required>
                            </div>
                            <div class="form-group">
                                <textarea name="message" rows="5" placeholder="Your Message *" required></textarea>
                            </div>
                            <button type="submit" class="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Add form submission handler
        const form = section.querySelector('#contactForm') as HTMLFormElement;
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });

        return section;
    }
}
