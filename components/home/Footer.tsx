import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">Irving</h1>
                    <span className="footer__subtitle">Web Developer</span>
                </div>
                <ul className="footer__links">
                    <li><a href="#services" className="footer__link">Services</a></li>
                    <li><a href="#projects" className="footer__link">Projects</a></li>
                    <li><a href="#contact" className="footer__link">Contact</a></li>
                </ul>
            </div>
            <p className="footer__copy">&#169; Irving Zamora All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer