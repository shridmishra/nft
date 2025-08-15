import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <div className="w-full mt-8 flex justify-between text-xs text-textWhite px-12 h-16 border-t-2 border-white/20">
            <span className="font-voltec text-xl py-4"><span className='text-[#95FF00]'>/</span>  © WEBTHREE {currentYear}</span>
            <span className="font-voltec text-xl py-4"><span className='text-[#95FF00]'>/</span> ALL RIGHTS RESERVED</span>
        </div>

    )
}

export default Footer