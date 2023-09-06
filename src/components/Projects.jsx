import React from 'react';
import '../styles/projects.css';
import { BiLoaderCircle } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { BiSolidCar } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";

import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
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
                            <div class="profileDiv">
                                    <BiCloset />
                                    Loja de Roupas
                                    <div><FaBootstrap/>  <FaLess/> <FaGrunt/> <BiLogoJquery/></div>
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Grif Shopp</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/Grif-shop-jm"><BiLogoGithub /></a>

                                    <a href="https://grif-shop-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiSolidCar />
                                    Loja de carros
                                    <div><FaHtml5/> <FaSass /> <BiLogoJquery/></div>
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Jota Motors</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/loja_de_carros"><BiLogoGithub /></a>

                                    <a href="https://loja-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiBriefcaseAlt />
                                    Formulário
                                    <div> < FaReact/> <SiStyledcomponents/></div>
                            </div>
                            {/* <div class="infoDiv">
                                <div class="nameDiv">
                                    <p class="role">Focus Tourism</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/turismo-jm"><BiLogoGithub /></a>
                                    <a href="https://turismo-jm.vercel.app/">< BiLayout /></a>                                
                                </div>
                            </div> */}
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Registro Fácil </p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/React_form_keys"><BiLogoGithub /></a>

                                    <a href="https://react-form-keys-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>  

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiLoaderCircle />
                                    Freelancer Kakau Makeup
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Em desenvolvimento</p> */}
                                    <p class="role">Em desenvolvimento</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="#linkdin"><BiLogoGithub /></a>

                                    <a href="#insta">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>                                      
                    
                </div>

            </div>
            
        </div>
    )
} 

export default Projects;


