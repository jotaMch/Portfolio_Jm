import React from 'react';
import './styles/main.css';
import './styles/colorText.css';
import Header from './components/Header';
import SectionInicio from './components/SectionInicial';
import About from './components/About';
import Habilidades from './components/Skills';
import Projects from './components/Projects';
import Educacao from './components/Educacao';
import Footer from './components/Footer';
import Mensagem from './components/Mensagem'; 
import Techskill from './components/TechSkills';
/* import Carousel from './components/premios'; */



function App() {
  return (
    <>
    <div>         
      <main>
            <SectionInicio />
            <About />
        <div className="container">
          <Header />
          <div className='flex-inicio'>
          </div>
        </div>
      </main>
      <div className="container">
            <Educacao />
            <Habilidades />  
          </div>
            < Techskill />     
          <div className="container">
            <Projects />            
          < Mensagem />  
          </div>
          <Footer />
    </div>
    </>
  )
}

export default App
