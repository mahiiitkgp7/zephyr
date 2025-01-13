import React from 'react';
import './Services.css'; // Import your CSS file

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ul>
        <li>Model Monitoring</li>
        <li>Data Quality Assessment</li>
        <li>Model Retraining</li>
        <li>Version Control</li>
        <li>Explainability</li>
      </ul>
      {/* Add more content here */}
    </div>
  );
}

export default Services;