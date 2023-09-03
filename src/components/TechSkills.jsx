import React from "react";
import styled from 'styled-components';

import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; 

export default  function Techskill() {
    return (
        <DivGlobal id="skills" >
            <nav className="nav__style" >
                <ul >                                        
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon> < FaHtml5 /></StyledIcon> </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaCss3Alt />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < BiLogoJavascript />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaBootstrap />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < BiLogoJquery /> </StyledIcon>  </li>                            
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaSass /> </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaLess />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaGulp />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaGrunt />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < FaReact />  </StyledIcon>  </li>
                    <li style={{width: 100, height:100, color: '#fff'}} > <StyledIcon>  < BiLogoTailwindCss />  </StyledIcon>  </li>    
                    <li><Placeholder /></li> 
                </ul>
            </nav>
            <StyledText >
                <h3>Especialização</h3>
                <div style={{width: '100px', backgroundColor: 'aquamarine', height: 4, margin: '14px 0 26px' }}></div>
                    <p >                                
                        Tenho me dedicado a aprimorar habilidades desde HTML, CSS e JavaScript até frameworks como 
                        Bootstrap e bibliotecas como jQuery. 
                        Recentemente, tenho me concentrado em Vite, Styled-components, Tailwind e API REST.
                        Venho estudando dia após dia para obter melhores conhecimmentos e boas práticas.
                    </p>
            </StyledText>   
        </DivGlobal>
    )
}

const StyledText = styled.div`
    width: 50%;
    color: #fff;
    padding-left: 90px;

    p {
        width: 400px;
        font-size: 14px;
        line-height: 1.6;
    }

    
    @media (max-width: 768px) {
        width: 90%;
        padding-left: 0;
        p {
            width: 100%;
        }
    }

    
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        
        padding-left: 38px;
        p {
            width: 90%;
        }
    }
`

const StyledIcon = styled.div`
    width: 100px;
    height: 100px;
    color: #9a5656;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color:rgb(24, 24, 24);
        filter: drop-shadow(0 0 1px aquamarine);
        width: 90%;
        height: 90%;
    @media (max-width: 768px) {
        width: 100%;
        height: 80%;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        height: 80%;
    }
}

    @media (max-width: 768px) {
        width: 70px;
        margin: 0 auto;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 70px;
        margin: 0 auto;
    }
    
`;

const Placeholder = styled.div`
    width: 100px;
    height: 100px;
    opacity: 0; /* Tornar o elemento invisível, mas ainda ocupando espaço */
`;

const DivGlobal = styled.div`
    display: flex;
    align-items: center;

    nav {
            margin-left: none;
            background-color: #000;
            margin-top: 30px;
            width: 50%;
            border-radius: 0 100px 100px 0;
    }
    
    @media (max-width: 768px) {
        flex-direction: column-reverse;

        nav {
            margin-left: none;
            background-color: #000;
            margin-top: 30px;
            width: 100%;
        }
    }


    ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    height: 500px;
    width: 50%;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
    margin-left: auto;
    padding: 14px 36px 14px 0;

    @media (max-width: 768px) {
        padding: 0;
        margin-left: 0;
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 0;
        margin-left: 0;
        width: 100%;
    }
}

    

`
































            
            
            
            {/* <ul className='experiencia__skills'>
                                        
                                        <li> < FaHtml5 /> </li>
                                        <li> < FaCss3Alt /> </li>
                                        <li> < BiLogoJavascript /> </li>
                                        <li> < FaBootstrap /> </li>
                                        <li> < BiLogoJquery /></li>                            
                                        <li> < FaSass /></li>
                                        <li> < FaLess /> </li>
                                        <li> < FaGulp /> </li>
                                        <li> < FaGrunt /> </li>
                                        <li> < FaReact /> </li>
                                        
                                    </ul>
                                    <div className="experiencia__text">
                                        <BiChevronsRight/>
                                        <p className='experiencia__text--habilidades'>                                
                                        Tenho me dedicado a aprimorar habilidades desde HTML, CSS e JavaScript até frameworks como Bootstrap e bibliotecas como jQuery. 
                                        Recentemente, tenho me concentrado em Vite, Styled-components, Tailwind e API REST.
                                        </p>
                                    </div>    */}    