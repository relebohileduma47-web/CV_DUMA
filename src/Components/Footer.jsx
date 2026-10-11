import React from 'react';

function Footer({ name, contact }) {
  return (
    <footer className="footer">
      <p>Contact: {contact} | &copy; 2026 {name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;