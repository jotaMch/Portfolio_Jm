import React, { useState } from 'react';
import SubApp from './SubApp';
import OthersProjects from './routes/Others';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route element={<SubApp />} path="/" />          
        <Route 
            element={<OthersProjects />} 
            path="/project" 
        />        
        
      </Routes>
    </Router>
    </>
  )
}

export default App;


/* 
<><p style={{color: 'white', backgroundColor: '#222', padding: "8px 16px"}}> 
            rota de projetos ativa </p><Link to="/">ir</Link></> */












