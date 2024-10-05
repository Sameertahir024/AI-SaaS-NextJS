import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="pricing-container">
        <div className="pricing-card wide-card">
          <h2>Basic Plan</h2>
          <p className="price">$99/month</p>
          <ul>
            <li>SEO Optimization</li>
            <li>Social Media Management</li>
            <li>Content Creation (2 posts/week)</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Pro Plan</h2>
          <p className="price">$199/month</p>
          <ul>
            <li>All Basic Plan features</li>
            <li>PPC Campaigns</li>
            <li>Content Creation (5 posts/week)</li>
            <li>Monthly Performance Reports</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Enterprise Plan</h2>
          <p className="price">$399/month</p>
          <ul>
            <li>All Pro Plan features</li>
            <li>Dedicated Account Manager</li>
            <li>Custom Strategy Development</li>
            <li>Priority Support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default About;
