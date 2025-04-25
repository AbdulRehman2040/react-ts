import React from 'react';
import './Contact.css';

interface ContactCardProps {
  type: 'phone' | 'email';
  title: string;
  content: string;
  subContent: string;
  icon: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ type, title, content, subContent, icon }) => {
  return (
    <div className={`contact-card ${type}`}>
      <div className="contact-icon">
        <i className={icon}></i>
      </div>
      <div className="contact-content">
        <h3 className="contact-title">{title}</h3>
        <p className="contact-info1">{content}</p>
        <p className="contact-subinfo">{subContent}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <ContactCard
          type="phone"
          title="Call Us For Service"
          content="(+21) 25 256.21583"
          subContent="Call 24/7 Anytime For Your Problem"
          icon="fas fa-phone-alt"
        />
        <ContactCard
          type="email"
          title="Mail Us Anytime"
          content="info@drill24.com"
          subContent="Mail 24/7 Anytime For Your Problem"
          icon="fas fa-envelope"
        />
      </div>
    </section>
  );
};

export default Contact;

