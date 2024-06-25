import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-lg-start fixed-bottom" style={{ backgroundColor: 'rgb(33,33,41)', color: '#F5F5DC' }}>
      <div className="container">
        <div className="row">
          {/* Footer content */}
        </div>
      </div>
      <div className="text-center p-3" style={{ color: '#F5F5DC' }}>
        © 2023 Copyright:
        <a className="text-light" href="https://yourwebsite.com/" style={{ color: '#F5F5DC' }}> YourWebsite.com</a>
      </div>
    </footer>
  );
}

export default Footer;
