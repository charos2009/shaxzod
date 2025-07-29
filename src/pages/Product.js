// // pages/Product.jsx
// import styles from './Home.module.css';

// function Product() {
//   return (
//     <div className={styles.container}>
//       <h2>Our CRM Tools</h2>
//       <div className={styles.grid}>
//         <div className={styles.card}>
//           <h3>Client Tracker</h3>
//           <p>See and manage all your clients.</p>
//           <span>$9/mo</span>
//         </div>
//         <div className={styles.card}>
//           <h3>Task Manager</h3>
//           <p>To-do lists, deadlines, and calendar sync.</p>
//           <span>$12/mo</span>
//         </div>
//         <div className={styles.card}>
//           <h3>Invoice Generator</h3>
//           <p>Generate and send invoices in seconds.</p>
//           <span>$15/mo</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

// import React from 'react';
// import '../App.css';
// import styles from './Home.module.css'
import '../Page.css'
function Product() {
  return (
    <section className="product-section">
      <h2>Our Product</h2>
      <p>Explore our modern solution designed to streamline your team workflow and productivity.</p>

      <div className="product-grid">
        <div className="product-item">
          <h3>📅 Smart Calendar</h3>
          <p>Plan your meetings and deadlines with intelligent suggestions and team visibility.</p>
        </div>
        <div className="product-item">
          <h3>💬 Team Chat</h3>
          <p>Stay in sync with a real-time communication system built into your workflow.</p>
        </div>
        <div className="product-item">
          <h3>📈 Project Dashboard</h3>
          <p>Visualize your KPIs, progress, and resource usage with elegant dashboards.</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
