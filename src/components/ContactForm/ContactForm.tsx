import React from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="form-column">
          <div className="contact-header">
            <div className="feel-free-label">
              <span className="orange-bg">FEEL FREE</span>
              <span className="text">TO CONTACT US</span>
            </div>
            <h2>Let's Get in Touch</h2>
          </div>
          
          <form className="contact-form">
            <div className="input-row">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
            </div>
            
            <div className="input-group">
              <select className="form-select" required defaultValue="">
                <option value="" disabled>Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            
            <div className="input-group">
              <textarea 
                placeholder="Type Your Message" 
                className="form-textarea"
                rows={6}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="map-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.908726737911!2d90.4219536!3d23.77492315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1679901838243!5m2!1sen!2sbd"
            title="Google Maps Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


