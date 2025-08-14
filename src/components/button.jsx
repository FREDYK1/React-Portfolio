import React from 'react'

const button = ({ text, className}) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text ?? 'See My Work'}</p>
            <div className="arrow-wrapper">
                <img src="images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default button