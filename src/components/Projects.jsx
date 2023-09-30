import React from 'react';
import '../styles/projects.css';
import { BiLoaderCircle } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { BiSolidCar } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaLess } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
//grunt,less,jquery

function Projects() {
    return(
        <div className="main__project" id='projects'>
            <div className="project">
            <h3>Projects</h3>
                <div className="project-class">

                        <div class="cardContainer">
                            <div className="sobre-project"></div>
                            <div className="profileDiv">
                                    <BiCloset />
                                    Loja de Roupas
                                    <div><FaBootstrap/>  <FaLess/> <FaGrunt/> <BiLogoJquery/></div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    {/* <p className="name">Chris Stark</p> */}
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Grif Shopp</p>
                                    <p style={{padding: 8}} className="role">
                                        Um projeto de loja de roupas obtendo carossel, menu interativo, imagens, produtos e um formulario com validações em JQuery 
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/Grif-shop-jm"><BiLogoGithub /></a>

                                    <a href="https://grif-shop-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv">
                                    <BiSolidCar />
                                    Loja de carros
                                    <div><FaHtml5/> <FaSass /> <BiLogoJquery/></div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    {/* <p className="name">Chris Stark</p> */}
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Jota Motors</p>
                                    <p style={{padding: 8}} className="role">
                                        Um projeto para venda de carros com um menu interativo e carrossel. Também com seções sobre o epaço, com cards de carros interativo com o formulário. 
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/loja_de_carros"><BiLogoGithub /></a>

                                    <a href="https://loja-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv">
                                    <BiCloset />
                                    E-commerce 
                                    <div><FaHtml5/><BiLogoJavascript/> < SiVite/>< BiLogoTailwindCss/> </div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Project E-commerce</p>
                                    <p style={{padding: 8}} className="role">
                                        Projeto para E-commerce, usei JavaScript puro fazendo a integração dos produtos e cards.
                                        Fiz o uso de Tailwind para estilização, assim obtendo mais organização .
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/E-commerce_js"><BiLogoGithub /></a>

                                    <a href="https://jotamch.github.io/E-commerce_js/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div> 

                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv">
                                    <BiBriefcaseAlt />
                                    Formulário
                                    <div> < FaReact/> <SiStyledcomponents/></div>
                            </div>
                            {/* <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Focus Tourism</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/turismo-jm"><BiLogoGithub /></a>
                                    <a href="https://turismo-jm.vercel.app/">< BiLayout /></a>                                
                                </div>
                            </div> */}
                            
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Registro Fácil </p>
                                    <p style={{padding: 8}} className="role">
                                        Formulário de registro de dados com as resposta mostradas em uma lista com opções de ver os detalhes em um poup-up ou resetar.
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/React_form_keys"><BiLogoGithub /></a>

                                    <a href="https://react-form-keys-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>                                       
                
                </div>

            </div>
            
        </div>
    )
} 

export default Projects;


