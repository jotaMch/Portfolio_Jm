import React, { useState } from 'react';
// ... outras importações ...
import './styles/main.css';
import './styles/colorText.css';
import Header from './components/Header';
import About from './components/About';
import Habilidades from './components/Skills';
import Projects from './components/Projects';
import Educacao from './components/Educacao';
import Footer from './components/Footer';
import Mensagem from './components/Mensagem'; 
import Techskill from './components/TechSkills';


function SubApp() {
    const [isEnglish, setIsEnglish] = useState(false);
    const handleLanguage = () => {
        console.log(isEnglish);
        setIsEnglish(prevIsEnglish => !prevIsEnglish); 
    };
    return (
        <>
        <div>         
        <main>
            <About isEnglish={isEnglish} />
            <div className="container">
                <Header isEnglish={isEnglish} handleLanguage={handleLanguage} />
                <div className='flex-inicio'>                    
                </div>
            </div>
            </main>
                <div className="container">
                    <Habilidades isEnglish={isEnglish} />  
                </div>
                    < Techskill isEnglish={isEnglish} />     
                <div className="container">
                    <Projects isEnglish={isEnglish} />            
                    <Educacao isEnglish={isEnglish} />
                < Mensagem isEnglish={isEnglish} />  
                </div>
                <Footer isEnglish={isEnglish} />
            </div>
        </>
    )
}

export default SubApp;


