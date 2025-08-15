import React from 'react';

const ConnectWallet = () => {
  return (
    <button className="relative group px-4 py-2 bg-background text-white font-orbitron  font-extrabold text-sm">
      CONNECT WALLET

      {/* Corner brackets */}
      {/* top-left */}
      <div className="absolute top-0 left-0 w-4 h-4">
        <div className="absolute top-0 left-0 w-3 h-[1px] bg-white"></div>
        <div className="absolute top-0 left-0 h-3 w-[1px] bg-white"></div>
      </div>

      {/* top-right */}
      <div className="absolute top-0 right-0 w-4 h-4">
        <div className="absolute top-0 right-0 w-3 h-[1px] bg-white"></div>
        <div className="absolute top-0 right-0 h-3 w-[1px] bg-white"></div>
      </div>

      {/* bottom-left */}
      <div className="absolute bottom-0 left-0 w-4 h-4">
        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 left-0 h-3 w-[1px] bg-white"></div>
      </div>

      {/* bottom-right */}
      <div className="absolute bottom-0 right-0 w-4 h-4">
        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-white"></div>
      </div>
    </button>
  );
};

export default ConnectWallet;
