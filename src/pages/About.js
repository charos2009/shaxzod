// pages/About.jsx


// function About() {
//   return (
//     <div className={styles.about}>
//       <h2>About Us</h2>
//       <p>
//         We are a team of freelancers and developers who built this CRM to help other freelancers
//         stay organized, save time, and grow their business.
//       </p>
//       <div className={styles.team}>
//         <div>
//           <h4>Charos Rakhimova</h4>
//           <p>Frontend Developer</p>
//         </div>
//         <div>
//           <h4>John Doe</h4>
//           <p>UI/UX Designer</p>
//         </div>
//         <div>
//           <h4>Alisa</h4>
//           <p>Backend Engineer</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from 'react';
// import '../App.css';
// import styles from './Home.module.css';

import '../Page.css'
function About() {
  return (
    <section className="about-section">
      <h2>Who We Are</h2>
      <p>
        We are a passionate team of designers, developers, and strategists committed to building high-quality digital products.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p>To make planning and productivity easier for teams worldwide through beautiful UI and seamless UX.</p>
        </div>
        <div className="card">
          <h3>🌟 Our Values</h3>
          <p>Innovation, simplicity, collaboration, and user-first thinking in everything we do.</p>
        </div>
        <div className="card">
          <h3>👨‍💻 Our Team</h3>
          <p>Founded by a group of creative minds who believe in the power of design and technology combined.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
