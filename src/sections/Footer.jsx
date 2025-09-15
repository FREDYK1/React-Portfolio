import React from 'react'
import { socialImgs } from './../constants/index';

const Footer = () => {
  return (
    <footer className="footer"> 
        <div className="footer-container">
            <div className="flex flex-col items-center justify-center w-full">
                <a href="" className="text-center w-full">Visit my blog</a>
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
    </footer>
  )
}

export default Footer