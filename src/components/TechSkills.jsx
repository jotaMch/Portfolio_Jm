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
                        <div style={{width: '100px', backgroundColor: 'rgb(57, 169, 244)', height: 4, margin: '14px 0 26px' }}></div>
                    </div>
                }
                
                {props.isEnglish && 
                    <div className='border-soft'>
                        <h3 className='title-soft'>Technical skills </h3>
                    <div style={{width: '100px', backgroundColor: 'rgb(57, 169, 244)', height: 4, margin: '14px 0 26px' }}></div>
                </div>
                } 
            
            <nav className="nav__style" >
                <ul >                                        
                    <li title="HTML" > <StyledIcon> < FaHtml5 /></StyledIcon> HTML</li>
                    <li title="CSS" > <StyledIcon>  < FaCss3Alt />  </StyledIcon> CSS</li>
                    <li title="javaScript" > <StyledIcon>  < BiLogoJavascript />  </StyledIcon> JavaScript </li>
                    <li title="Git" > <StyledIcon>  < FaGitAlt />  </StyledIcon> Git </li>
                    <li title="Bootstrap" > <StyledIcon>  < FaBootstrap />  </StyledIcon> Bootstrap </li>
                    <li title="JQuery" > <StyledIcon>  < BiLogoJquery /> </StyledIcon> JQuery </li>                            
                    <li title="SASS" > <StyledIcon>  < FaSass /> </StyledIcon> SASS </li>
                    <li title="LESS" > <StyledIcon>  < FaLess />  </StyledIcon> LESS </li>
                    <li title="Gulp" > <StyledIcon>  < FaGulp />  </StyledIcon> Gulp </li>
                    <li title="Grunt" > <StyledIcon>  < FaGrunt />  </StyledIcon> Grunt </li>
                    <li title="Vite" > <StyledIcon>  <SiVite />  </StyledIcon> Vite </li>
                    <li title="React" > <StyledIcon>  < FaReact />  </StyledIcon> React </li>
                    <li title="Styled-components" > <StyledIcon >  < SiStyledcomponents />  </StyledIcon> Styled-components </li>    
                    <li title="TailWind" > <StyledIcon>  < TbBrandTailwind />  </StyledIcon> TailWind </li>
                    <li title="Jest" > <StyledIcon>  <SiJest />  </StyledIcon> Jest </li>
{/*                 <li title="Mongodb Atlas" > <StyledIcon>  <SiMongodb />  </StyledIcon> Mongodb Atlas </li>
 */}                <li title="Node.js" > <StyledIcon>  <FaNodeJs />  </StyledIcon> Node.js </li>

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
                        Venho estudando dia após dia para obter melhores conhecimentos e boas práticas.
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
    color: #0d0d0d;
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
            background-color: rgb(57, 169, 244);
            color: #fafafa;
            height: 40px;
            padding: 0 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: rgb(57, 169, 244); 
        filter: drop-shadow(0 0 10px rgb(143, 198, 234));
        width: 90%;
        height: 90%;
    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        height: 80%;
    }
}

    @media (max-width: 768px) {
        width: 60px;
        margin: 0 auto;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 70px;
        margin: 0 auto;
    }
    
`;

const DivGlobal = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: start;

    h3 {
        color: #0d0d0d;
    }

    nav {
            margin-left: none;
            margin-top: 30px;
            li{
                text-align: center;
                font-size: 10px;
                color: #0d0d0d;
                width: 110px;
                height: 110px;
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
    padding: 40px 0;

    
    @media (max-width: 368px) {
        li {
            width: 30.3%;
        }

    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 1px;
        justify-content: space-between;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 100%;
    }
}

    

`



















