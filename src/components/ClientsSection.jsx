import React from 'react';
import OwlCarousel from 'react-owl-carousel';

// Importing client logos
import clientLogo1 from '../assets/images/clients/clients-logo-1.png';
import clientLogo2 from '../assets/images/clients/clients-logo-2.png';
import clientLogo3 from '../assets/images/clients/clients-logo-3.png';
import clientLogo4 from '../assets/images/clients/clients-logo-4.png';
import clientLogo5 from '../assets/images/clients/clients-logo-5.png';
import clientLogo6 from '../assets/images/clients/clients-logo-6.png';

const ClientsSection = () => {
  const clientLogos = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
  ];

  return (
    <section className="clients-section">
      <div className="outer-container">
        <OwlCarousel className="clients-carousel owl-theme" loop margin={10} items={6} dots={false} nav={false}>
          {clientLogos.map((logo, index) => (
            <figure className="clients-logo-box" key={index}>
              <a href=""><img src={logo} alt={`Client Logo ${index + 1}`} /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientsSection;
