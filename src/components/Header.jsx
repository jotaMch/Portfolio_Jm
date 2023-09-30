// Header.jsx
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import BurguerCode from './Hamburguer.jsx';

function Header() {
    const [isVisible, setIsVisible] = useState(false);

const toggleNav = () => {
    setIsVisible(!isVisible);
};

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
};

const handleMenuItemClick = () => {
    if (isVisible) {
        toggleNav();
    }
};

return (
<div>
<header>
        <div className="whitee">
            <img src={Logo} alt="logo jm" />
        </div>
        <BurguerCode toggleNav={toggleNav} isActive={isVisible} />
        
        < nav>
            <ul 
            className={`nav-list ${isVisible ? 'visible' : ''}`}
            style={{ maxHeight: isVisible ? '500px' : '0', opacity: isVisible ? 1 : 0, backgroundColor: "#EFF1EA", borderRadius: 30 }}
            >
                {/* <li data-text="Home" onClick={() => {handleMenuItemClick(); scrollToSection('home')}}>
                    <span className="actual-text">Home</span>
                    <span className="front-text"></span>
                </li> */}
                <li data-text="About" onClick={() => {handleMenuItemClick(); scrollToSection('about')}}>
                    <span className="actual-text">About</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Skills" onClick={() => {handleMenuItemClick(); scrollToSection('skills')}}>
                    <span className="actual-text">Skills</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Project" onClick={() => {handleMenuItemClick(); scrollToSection('projects')}}>
                    <span className="actual-text">Project</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Contact" onClick={() => {handleMenuItemClick(); scrollToSection('contact')}}>
                    <span className="actual-text">Contact</span>
                    <span className="front-text"></span>
                </li>
            </ul>

            <ul className='telaG'>
                {/* <li data-text="Home" onClick={() => scrollToSection('home')}>
                    <span className="actual-text">Home</span>
                    <span className="front-text"></span>
                </li> */}
                <li data-text="About" onClick={() => scrollToSection('about')}>
                    <span className="actual-text">About</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Skills" onClick={() => scrollToSection('skills')}>
                    <span className="actual-text">Skills</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Project" onClick={() => scrollToSection('projects')}>
                    <span className="actual-text">Project</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Contact" onClick={() => scrollToSection('contact')}>
                    <span className="actual-text">Contact</span>
                    <span className="front-text"></span>
                </li>
            </ul>
    </nav>
</header>
</div>
);
}

export default Header;

