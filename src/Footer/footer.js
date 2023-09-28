import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Big dummy</p>
    </div>
  );
}

export default Footer;
