import React from 'react';
import Skills from '../assets/skills/index';
import '../styles/Habilidades.css';
import { BiBadgeCheck } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { BiSolidMouseAlt } from "react-icons/bi";

import { BiLogoJavascript } from "react-icons/bi";

import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


function Habilidades() {
    return (
        <div className='experiencia'>
            
            <div className="border-skills" id='skills'>
                <h3>Skills</h3>
                </div>
                
                    <div className='experiencia__cor'>
                        <ul className='experiencia__skills'>
                            
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
                            </div>                        
                    </div>
                <article>
                    <h3 className='title-soft'>Soft Skills</h3>
                    <div className="flex">
                        
                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                    <h4 className="card__title">
                                        Analítico e Criativo
                                        <BiSolidMouseAlt />
                                    </h4>
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    <p>
                                    Como desenvolvedor sou analítico em diversas tarefas 
                                    em que participo, buscando criar ideias melhores.
                                
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                    <h4 className="card__title">
                                        Organizado
                                        <BiSolidMouseAlt />
                                    </h4>
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    <p>
                                    Tenho uma abordagem estruturada e disciplinada na gestão de projetos,
                                    priorizando tarefas e promovendo a eficácia do trabalho desenvolvido.                            
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                    <h4 className="card__title">
                                        Próativo
                                        <BiSolidMouseAlt />
                                    </h4>
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    <p>
                                    Busco compartilhar minhas idéias e opniões auxiliando o time
                                    em resoluções de problemas buscando o aprimoramento profissional.
                            
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </article>
        </div>
    )
}

export default Habilidades;