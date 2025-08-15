import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex flex-row items-center justify-between bg-background text-white px-6 lg:px-24 h-auto lg:h-16 border-t-2 border-white/20 text-center lg:text-left">
      <span className="font-voltec text-base lg:text-lg py-3 lg:py-4">
        <span className="text-[#95FF00]">/</span> © WEBTHREE {currentYear}
      </span>
      <span className="font-voltec text-base lg:text-lg py-3 lg:py-4">
        <span className="text-[#95FF00]">/</span> ALL RIGHTS RESERVED
      </span>
    </div>
  );
};

export default Footer;
