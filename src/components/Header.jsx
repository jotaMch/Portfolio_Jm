// Header.jsx
import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import BurguerCode from './Hamburguer.jsx';
import styled from 'styled-components';

function Header(props) {
    const [isVisible, setIsVisible] = useState(false);

    const { isEnglish, handleLanguage } = props;

    useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('header-top'); // Adiciona a classe quando rola para baixo
    } else {
        header.classList.remove('header-top'); // Remove a classe quando volta ao topo
    }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


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
<header className='header-top'>
        <div className="whitee">
            <img src={Logo} alt="logo jm" />
        </div>
        <BurguerCode toggleNav={toggleNav} isActive={isVisible} />

        {!props.isEnglish && 
        <nav>
            <ul 
            className={`nav-list ${isVisible ? 'visible' : ''}`}
            style={{ maxHeight: isVisible ? '500px' : '0', opacity: isVisible ? 1 : 0, backgroundColor: "#EFF1EA", borderRadius: 30 }}
            >
                <li data-text="Sobre" onClick={() => {handleMenuItemClick(); scrollToSection('about')}}>
                    <span className="actual-text">Sobre</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Habilidades" onClick={() => {handleMenuItemClick(); scrollToSection('skills')}}>
                    <span className="actual-text">Habilidades</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Projetos" onClick={() => {handleMenuItemClick(); scrollToSection('projects')}}>
                    <span className="actual-text">Projetos</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Contato" onClick={() => {handleMenuItemClick(); scrollToSection('contact')}}>
                    <span className="actual-text">Contato</span>
                    <span className="front-text"></span>
                </li>    
                
                <li style={{alignItems: 'center'}} onClick={handleLanguage}>                    
                        English                    
                </li>  
            </ul>          
            
            

                
            <ul className='telaG'>
                <li data-text="Sobre" onClick={() => scrollToSection('about')}>
                    <span className="actual-text">Sobre</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Habilidades" onClick={() => scrollToSection('skills')}>
                    <span className="actual-text">Habilidades</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Projetos" onClick={() => scrollToSection('projects')}>
                    <span className="actual-text">Projetos</span>
                    <span className="front-text"></span>
                </li>
                <li data-text="Contato" onClick={() => scrollToSection('contact')}>
                    <span className="actual-text">Contato</span>
                    <span className="front-text"></span>
                </li>
                <li style={{alignItems: 'center'}} onClick={handleLanguage}>                    
                        English                    
                </li>  
            </ul>
        </nav>
        }


        {props.isEnglish &&
        < nav>
            <ul 
            className={`nav-list ${isVisible ? 'visible' : ''}`}
            style={{ maxHeight: isVisible ? '500px' : '0', opacity: isVisible ? 1 : 0, backgroundColor: "#EFF1EA", borderRadius: 30 }}
            >
                
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
                <li style={{ alignItems: 'center'}} onClick={handleLanguage}>
                        Português
                </li>
            </ul>

            <ul className='telaG'>
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
                <li style={{ alignItems: 'center'}} onClick={handleLanguage}>
                    
                        Português
                    {/* Estou colocando os botoes de idioma no header, falta as bandeiras e estilizar para mobile */}
                </li>
            </ul>
    </nav>
    }
</header>
</div>
);
}

export default Header;



/* 


const Button = styled.button`
    background-color: #99d5da5c;
    color: #fff;
    padding: 4px;
    cursor: pointer;
`
 */