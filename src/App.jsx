import React from 'react';
import './styles/main.css';
import './styles/colorText.css';
import Header from './components/Header';
import SectionInicio from './components/SectionInicial';
import About from './components/About';
import Habilidades from './components/Habilidades';
import Projects from './components/Projects';
import Educacao from './components/Educacao';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <div className="app">

          
      <main>
        <div className="container">
          <Header />
          <SectionInicio />
        </div>
      </main>
      <div className="container">
        <section>
          <div className='position-class'>
            <About />
            <Habilidades />
            
            <Educacao />

          </div>
        </section>
            <Projects />
      </div>
          <Footer />
    </div>
    </>
  )
}

export default App
