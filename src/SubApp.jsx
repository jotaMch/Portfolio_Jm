import React, { useState } from 'react';
// ... outras importações ...
import './styles/main.css';
import './styles/colorText.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Educacao from './components/Educacao';
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
                    < Techskill isEnglish={isEnglish} />     
                    <Projects isEnglish={isEnglish} />            
                    <Educacao isEnglish={isEnglish} />
                </div>
                < Mensagem isEnglish={isEnglish} />  
            </div>
        </>
    )
}

export default SubApp;


