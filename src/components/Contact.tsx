import React from 'react';

function Contact() {
  return (
    <div className="Contact container mw-100">
      <div className="container">
        <h2>Contact</h2>
        <div className="row pt-3">
          <div className="col-xl">
            <p className="contact-label">Adresse</p>
            <p className="contact-info">
              <a
                className="contact-link"
                href="https://www.google.com/maps/place/8+Rue+Thiers,+51100+Reims"
                target="_blank"
                rel="noopener noreferrer"
              >
                8 Rue Thiers, 51100 Reims
              </a>
            </p>
            <p className="contact-label">Téléphone</p>
            <p className="contact-info">
              <a
                className="contact-link"
                href="tel:0326258040"
                target="_blank"
                rel="noopener noreferrer"
              >
                03 26 25 80 40
              </a>
            </p>
            <p className="contact-label">Email</p>
            <p className="contact-info">
              <a
                className="contact-link"
                href="mailto:melkor@stephaniekolmerienny.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                melkor@stephaniekolmerienny.fr
              </a>
            </p>
            <p className="contact-label">Horaires</p>
            <p className="contact-info">Lundi au Vendredi de 9h00 à 18h00</p>
            {/* <button type="button" className="btn btn-primary">
            <i className="bi bi-envelope-at"></i>
            Button
          </button> */}
          </div>
          <div className="col-xl">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10416.92456846289!2d4.0316368!3d49.2530647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a5661ffe8c504a8!2sKolmer-Ienny%20St%C3%A9phanie!5e0!3m2!1sfr!2sfr!4v1675264360240!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
