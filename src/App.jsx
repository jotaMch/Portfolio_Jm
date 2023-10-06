import React, { useState } from 'react';
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

import Usd from './assets/usd.png';
import Br from './assets/brasil.png';
import styled from 'styled-components';


function App() {
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
          <Header isEnglish={isEnglish}  />
          <div className='flex-inicio'>
            
          {!isEnglish &&
          <Button style={{display: 'flex', backgroundColor: 'blue', alignItems: 'center'}} onClick={handleLanguage}>
            En
            <img style={{height: 18, marginLeft: 4}} src={Usd} alt="bandeira En" />
          </Button>
          }

          
        {isEnglish &&
          <Button style={{display: 'flex', alignItems: 'center'}} onClick={handleLanguage}>
            Pt
            <img style={{height: 18, marginLeft: 4}} src={Br} alt="bandeira Br" />
          </Button>
          }
          </div>
        </div>
      </main>
      <div className="container">
            <Educacao isEnglish={isEnglish} />
            <Habilidades isEnglish={isEnglish} />  
          </div>
            < Techskill isEnglish={isEnglish} />     
          <div className="container">
            <Projects isEnglish={isEnglish} />            
          < Mensagem isEnglish={isEnglish} />  
          </div>
          <Footer isEnglish={isEnglish} />
    </div>
    </>
  )
}

export default App





const Button = styled.button`
    background-color: #99d5da5c;
    color: #fff;
    padding: 4px;
    cursor: pointer;
    position: fixed;
    top: 70%;
    left: 0.4%;
    z-index: 80;
    border: none;
    border-radius: 10px;
`