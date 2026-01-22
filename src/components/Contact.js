import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  React.useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    
    // Trim whitespace for email field
    if (e.target.name === 'email') {
      value = value.trim();
    }
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const formatEmail = (email) => {
    // Trim whitespace and convert to lowercase for consistent formatting
    return email.trim().toLowerCase();
  };

  const isValidEmail = (email) => {
    // More comprehensive email validation regex
    // Validates: local-part@domain.extension
    // Allows letters, numbers, dots, hyphens, underscores, and plus signs
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      return false;
    }
    
    // Check for valid email format
    if (!emailRegex.test(trimmedEmail)) {
      return false;
    }
    
    // Additional checks
    // Email should not start or end with dot, hyphen, or underscore
    const localPart = trimmedEmail.split('@')[0];
    const domain = trimmedEmail.split('@')[1];
    
    if (!localPart || !domain) {
      return false;
    }
    
    // Local part should not start/end with special characters
    if (/^[._-]|[._-]$/.test(localPart)) {
      return false;
    }
    
    // Domain should not start/end with special characters
    if (/^[.-]|[.-]$/.test(domain)) {
      return false;
    }
    
    // Domain should have at least one dot
    if (!domain.includes('.')) {
      return false;
    }
    
    return true;
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Format and validate email
    const formattedEmail = formatEmail(formData.email);
    
    if (!isValidEmail(formattedEmail)) {
      showNotification('Please enter a valid email address (e.g., example@domain.com)', 'error');
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
        !EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        !EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      showNotification('Email service is not configured. Please set up EmailJS credentials in src/config/emailjs.config.js', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Debug: Log configuration
    console.log('EmailJS Configuration:', {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? `${EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10)}...` : 'Not set'
    });
    
    try {
      // Format email to ensure proper format (trimmed and lowercase)
      const formattedEmail = formatEmail(formData.email);
      
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formattedEmail, // Properly formatted email
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        reply_to: formattedEmail, // This allows you to reply directly to the sender
        // Additional formatted fields for better email display
        user_name: formData.name.trim(),
        user_email: formattedEmail,
        email_subject: formData.subject.trim(),
        email_message: formData.message.trim(),
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using Service ID:', EMAILJS_CONFIG.SERVICE_ID);
      console.log('Using Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully!', response);
      showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Code:', error.code);
      console.error('Error Text:', error.text);
      console.error('Error Status:', error.status);
      
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`;
      } else {
        errorMessage += 'Please check your EmailJS configuration or try again later.';
      }
      
      showNotification(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'sonamnimje27@gmail.com' },
    { icon: 'fas fa-phone', text: '+91 7974094733' },
    { icon: 'fas fa-map-marker-alt', text: 'Jabalpur, Madhya Pradesh, India' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/sonamnimje' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/sonam-nimje-b385b3258/' },
    { icon: 'fab fa-twitter', href: 'https://x.com/sonam25474' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/_sonam_27__' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div className="contact-content" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <i className={info.icon}></i>
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email (e.g., name@example.com)"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => {
                  // Format email on blur (when user leaves the field)
                  const formatted = formatEmail(e.target.value);
                  if (formatted && formatted !== e.target.value) {
                    setFormData({
                      ...formData,
                      email: formatted
                    });
                  }
                }}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
      
      {/* Notification */}
      {notification && (
        <motion.div 
          className={`notification notification-${notification.type}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <div className="notification-content">
            <span className="notification-message">{notification.message}</span>
            <button 
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
