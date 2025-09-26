// ContactPage.jsx
import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact">
      <header className="contact-hero">
        <h1 className="contact-title">Contact</h1>
      </header>

      <div className="contact-grid">
        <div className="contact-location">
          <h2 className="block-title">Location</h2>
          <p className="location-lines">
            Avenue des Oliviers, 4ème étage<br />
            Sousse 4000, Tunisia
          </p>
        </div>

        <div className="contact-form-wrap">
          <h2 className="block-title">Form</h2>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row two">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" />
              </div>
              <div className="field">
                <label htmlFor="company">Company (optional)</label>
                <input id="company" name="company" type="text" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5}></textarea>
              </div>
            </div>

            <div className="consent">
              <input id="consent" type="checkbox" />
              <label htmlFor="consent">
                I consent to Green Gate processing my data for contact purposes.
              </label>
            </div>

            <button type="submit" className="btn-send">Send</button>
          </form>
        </div>
      </div>

      <div className="contact-media">
        <div className="media-item">
          <iframe
            title="building"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4574.587905441205!2d10.634352729261822!3d35.83129274246546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302756e1abce3d5%3A0xc7abbb79d39a0d65!2sGreen%20Gate%20Transit%20And%20Logistics%20Services!5e0!3m2!1sfr!2stn!4v1758808016977!5m2!1sfr!2stn"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <figure className="media-item">
          <img src="src/assets/img/building_contact.png" alt="Office building" />
        </figure>
      </div>
    </section>
  );
};

export default ContactPage;