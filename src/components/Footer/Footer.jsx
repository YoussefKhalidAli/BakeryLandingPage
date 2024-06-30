import { forwardRef } from "react";
import "./Footer.css";

const Footer = forwardRef(({}, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Payment Methods</h3>
          <ul>
            <li>Credit Card</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
            <li>Cryptocurrency</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Locations</h3>
          <ul>
            <li>New York</li>
            <li>San Francisco</li>
            <li>London</li>
            <li>Tokyo</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Partners</h3>
          <ul>
            <li>Partner 1</li>
            <li>Partner 2</li>
            <li>Partner 3</li>
            <li>Partner 4</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
            <li>Support: support@example.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
