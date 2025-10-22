import React from 'react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>CONTACT US</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-wrapper">
          <div className="offices">
            <h3>Office</h3>
            <div className="office-location">
              <h4>New Delhi</h4>
              <p>
                KD 213, Pitampura,<br />
                Near Kohat Enclave Metro Station,<br />
                New Delhi - 110034
              </p>
              <p>
                <strong>T:</strong> <a href="tel:+918826456565">+91-8826456565</a><br />
                <strong>E:</strong> <a href="mailto:advocate@kbjandco.com">advocate@kbjandco.com</a>
              </p>
            </div>
            <div className="office-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.440826373842!2d77.13814931508099!3d28.699194782392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzU3LjEiTiA3N8KwMDgnMjUuNCJF!5e0!3m2!1sen!2sin!4v1729607000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3>Get in Touch</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email *" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject *" required />
              </div>
              <div className="form-group">
                <textarea name="message" rows={5} placeholder="Your Message *" required />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
