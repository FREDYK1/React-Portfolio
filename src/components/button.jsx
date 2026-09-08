import React from 'react'

const button = ({ text, className, id}) => {
  return (
    <button
    type="button"
    onClick={() => {
      const target = document.getElementById('counter')
      if (target && id){
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" })
      }

    }}
    className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text ?? 'See My Work'}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="" />
            </div>
        </div>
    </button>
  )
}

export default button