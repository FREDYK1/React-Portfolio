import React, { useState } from 'react'
import { socialImgs } from './../constants/index';
import BlogModal from '../components/BlogModal';

const Footer = () => {
  const [blogOpen, setBlogOpen] = useState(false);
  return (
    <footer className="footer"> 
        <div className="footer-container">
            <div className="flex flex-col items-center justify-center w-full">
                <button
                  className="text-center w-full underline hover:text-blue-400 transition-colors"
                  onClick={() => setBlogOpen(true)}
                >
                  Visit my blog
                </button>
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                    <a href={img.url} target="_blank" className="icon" key={img.url}>
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    ©{new Date().getFullYear()} Frederick Kankam. All Rights Reserved.
                </p>
            </div>
        </div>
        <BlogModal open={blogOpen} onClose={() => setBlogOpen(false)} />
    </footer>
  )
}

export default Footer