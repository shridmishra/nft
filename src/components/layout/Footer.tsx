import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <div className="w-full  flex justify-between bg-background text-white px-24 h-16 border-t-2 border-white/20">
            <span className="font-voltec text-lg py-4"><span className='text-[#95FF00]'>/</span>  © WEBTHREE {currentYear}</span>
            <span className="font-voltec text-lg py-4"><span className='text-[#95FF00]'>/</span> ALL RIGHTS RESERVED</span>
        </div>

    )
}

export default Footer