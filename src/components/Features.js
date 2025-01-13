import React from 'react';
import './Features.css'; // Import your CSS file

function Features() {
  return (
    <div className="features">
      <h1>Key Features</h1>
      <ul>
        <li>
          <h3>Model Monitoring</h3>
          <p>Track model performance, detect anomalies, and identify areas for improvement.</p>
        </li>
        <li>
          <h3>Data Quality Assessment</h3>
          <p>Analyze data quality, identify biases, and ensure data integrity.</p>
        </li>
        <li>
          <h3>Model Retraining</h3>
          <p>Automate model retraining with new data and improved algorithms.</p>
        </li>
        <li>
          <h3>Version Control</h3>
          <p>Track model versions and easily revert to previous versions.</p>
        </li>
        <li>
          <h3>Explainability</h3>
          <p>Gain insights into model predictions and understand their decision-making process.</p>
        </li>
      </ul>
    </div>
  );
}

export default Features;