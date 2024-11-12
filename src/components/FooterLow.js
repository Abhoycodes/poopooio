import React from 'react';

const FooterLow = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Abhoy Arts LLC. All rights reserved.
        </p>
        <p className="mb-4">
          We are dedicated to providing the best service and experience to our users.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.facebook.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-400"
          >
            Facebook
          </a>
          <a 
            href="https://github.com/Abhoycodes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-gray-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterLow;