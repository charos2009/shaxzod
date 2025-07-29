// // pages/Contact.jsx
// import styles from './Home.module.css';

// function Contact() {
//   return (
//     <div className={styles.contact}>
//       <h2>Get in Touch</h2>
//       <p>We're happy to answer your questions or hear feedback</p>
//       <form className={styles.form}>
//         <input type="text" placeholder="Your name" />
//         <input type="email" placeholder="Your email" />
//         <textarea placeholder="Your message" rows="5" />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

// import React from 'react';
// import '../App.css';


// import styles from './Home.module.css'
import '../Page.css'
function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Got a question or want to work together? Reach out!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📍 Address: 123 Figma Street, Design City</p>
        <p>📞 Phone: +998 90 123 45 67</p>
        <p>📧 Email: support@figmaland.com</p>
      </div>
    </section>
  );
}

export default Contact;
