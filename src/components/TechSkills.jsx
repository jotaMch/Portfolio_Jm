import React from "react";
import styled from 'styled-components';
import { BiLogoJavascript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; 
import { TbBrandTailwind } from "react-icons/tb";
import { SiJest  } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default  function Techskill(props) {
    return (
        <DivGlobal id="skills" >
                {!props.isEnglish && 
                    <div className='border-soft'>
                        <h3 className='title-soft'>Habilidades tecnicas </h3>
                        <div style={{width: '100px', backgroundColor: 'aquamarine', height: 4, margin: '14px 0 26px' }}></div>
                    </div>
                }
                
                {props.isEnglish && 
                    <div className='border-soft'>
                        <h3 className='title-soft'>Technical skills </h3>
                    <div style={{width: '100px', backgroundColor: 'aquamarine', height: 4, margin: '14px 0 26px' }}></div>
                </div>
                } 
            
            <nav className="nav__style" >
                <ul >                                        
                    <li title="HTML" style={{width: 110, height:110}} > <StyledIcon> < FaHtml5 /></StyledIcon> HTML</li>
                    <li title="CSS" style={{width: 110, height:110}} > <StyledIcon>  < FaCss3Alt />  </StyledIcon> CSS</li>
                    <li title="javaScript" style={{width: 110, height:110}} > <StyledIcon>  < BiLogoJavascript />  </StyledIcon> JavaScript </li>
                    <li title="Git" style={{width: 110, height:110}} > <StyledIcon>  < FaGitAlt />  </StyledIcon> Git </li>
                    <li title="Bootstrap" style={{width: 110, height:110}} > <StyledIcon>  < FaBootstrap />  </StyledIcon> Bootstrap </li>
                    <li title="JQuery" style={{width: 110, height:110}} > <StyledIcon>  < BiLogoJquery /> </StyledIcon> JQuery </li>                            
                    <li title="SASS" style={{width: 110, height:110}} > <StyledIcon>  < FaSass /> </StyledIcon> SASS </li>
                    <li title="LESS" style={{width: 110, height:110}} > <StyledIcon>  < FaLess />  </StyledIcon> LESS </li>
                    <li title="Gulp" style={{width: 110, height:110}} > <StyledIcon>  < FaGulp />  </StyledIcon> Gulp </li>
                    <li title="Grunt" style={{width: 110, height:110}} > <StyledIcon>  < FaGrunt />  </StyledIcon> Grunt </li>
                    <li title="Vite" style={{width: 110, height:110}} > <StyledIcon>  <SiVite />  </StyledIcon> Vite </li>
                    <li title="React" style={{width: 110, height:110}} > <StyledIcon>  < FaReact />  </StyledIcon> React </li>
                    <li title="Styled-components" style={{width: 110, height:110}} > <StyledIcon >  < SiStyledcomponents />  </StyledIcon> Styled-components </li>    
                    <li title="TailWind" style={{width: 110, height:110}} > <StyledIcon>  < TbBrandTailwind />  </StyledIcon> TailWind </li>
                    <li title="Jest" style={{width: 110, height:110}} > <StyledIcon>  <SiJest />  </StyledIcon> Jest </li>
{/*                 <li title="Mongodb Atlas" style={{width: 110, height:110}} > <StyledIcon>  <SiMongodb />  </StyledIcon> Mongodb Atlas </li>
 */}                <li title="Node.js" style={{width: 110, height:110}} > <StyledIcon>  <FaNodeJs />  </StyledIcon> Node.js </li>

                </ul>
            </nav>
            <StyledText >
                
            {!props.isEnglish && 
                <div className="style">
                <h3>Especialização</h3>
                    <p >                                
                        Tenho me dedicado a aprimorar habilidades desde HTML, CSS e JavaScript até frameworks como 
                        Bootstrap e bibliotecas como jQuery. 
                        Recentemente, tenho me concentrado em Node e Jest.
                        Venho estudando dia após dia para obter melhores conhecimmentos e boas práticas.
                    </p>
                </div>
            }

            {props.isEnglish && 
                <div className="style">
                <h3>Specialization</h3>
                    <p >                                
                        I have dedicated myself to improving skills from HTML, CSS and JavaScript to frameworks such as
                        Bootstrap and libraries like jQuery. Recently, I have been focusing on Node and Jest.
                        I have been studying day after day to obtain better knowledge and good practices.
                    </p>
                </div>
            }
            </StyledText>   
        </DivGlobal>
    )
}

const StyledText = styled.div`
    color: #fff;
    margin-left: auto;

    .style {
        width: 100%;/* 
        background-color: rgb(0,0,0,0.9); */
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        border-radius: 4px;

        h3 {
            background-color: aquamarine;
            height: 40px;
            padding: 0 16px;
            color: #0d0d0d;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            width: 100%;
            background-color: #0d0d0d;
        }
    }

    p {
        line-height: 1.6;
        font-size: 16px;
    }

    
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 0;
        p {
            width: 100%;
        }
    }

    
    @media screen and (min-width: 768px) and (max-width: 1023px) {
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
        color: #0d0d0d;
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
    max-width: 1100px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: start;

    h3 {
        color: #FFF;
    }

    nav {
            margin-left: none;
            margin-top: 30px;
            border-radius: 0 50px 50px 0;
            li{
                text-align: center;
                font-size: 10px;
                color: aquamarine;
            }
    }
    
    @media (max-width: 768px) {
        margin-top: 80px;
        width: 90%;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 90%;
    }


    ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    width: 80%;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
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