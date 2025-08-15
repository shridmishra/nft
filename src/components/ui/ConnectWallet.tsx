import React from 'react';

const ConnectWallet = () => {
  return (
    <button className="relative group px-1 py-2 md:px-4 md:py-2 bg-hero text-white font-orbitron font-extrabold text-sm ">
      CONNECT WALLET

      {/* Corner brackets */}
      {/* top-left */}
      <div className="absolute top-0 left-0 w-4 h-4 md:w-3 md:h-3">
        <div className="absolute top-0 left-0 w-3 md:w-2 h-[1px] bg-white"></div>
        <div className="absolute top-0 left-0 h-3 md:h-2 w-[1px] bg-white"></div>
      </div>

      {/* top-right */}
      <div className="absolute top-0 right-0 w-4 h-4 md:w-3 md:h-3">
        <div className="absolute top-0 right-0 w-3 md:w-2 h-[1px] bg-white"></div>
        <div className="absolute top-0 right-0 h-3 md:h-2 w-[1px] bg-white"></div>
      </div>

      {/* bottom-left */}
      <div className="absolute bottom-0 left-0 w-4 h-4 md:w-3 md:h-3">
        <div className="absolute bottom-0 left-0 w-3 md:w-2 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 left-0 h-3 md:h-2 w-[1px] bg-white"></div>
      </div>

      {/* bottom-right */}
      <div className="absolute bottom-0 right-0 w-4 h-4 md:w-3 md:h-3">
        <div className="absolute bottom-0 right-0 w-3 md:w-2 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 right-0 h-3 md:h-2 w-[1px] bg-white"></div>
      </div>
    </button>
  );
};

export default ConnectWallet;
