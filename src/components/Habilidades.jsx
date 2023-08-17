import React from 'react';
import Skills from '../assets/skills/index';
import '../styles/Habilidades.css';
import { BiBadgeCheck } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { BiSolidMouseAlt } from "react-icons/bi";

function Habilidades() {
    return (
        <div className='experiencia'>
            <div className="border-skills" id='skills'>
                <h3>Skills</h3>
                </div>
                    <div className='experiencia__cor'>
                        <ul className='experiencia__skills'>
                            
                            <li><img  src={Skills.html} alt="" /><p>HTML</p></li>
                            <li><img  src={Skills.css} alt="" /><p>CSS</p></li>
                            <li><img  src={Skills.javascript} alt="" /><p>JavaScrip</p></li>
                            <li><img  src={Skills.bootstrap} alt="" /><p>Bootstrap</p></li>
                            <li><img  src={Skills.jquery} alt="" /><p>Jquery</p></li>
                            <li><img  src={Skills.sass} alt="" /><p>SASS</p></li>
                            <li><img  src={Skills.less} alt=""/><p>LESS</p></li>
                            <li><img  src={Skills.gulp} alt=""/><p>Gulp</p></li>
                            <li><img  src={Skills.grunt} alt="" /><p>Grunt</p></li>
                            <li><img  src={Skills.react} alt="" /><p>React</p></li>
                            
                        </ul>
                            <div className="experiencia__text">
                                <BiChevronsRight/>
                                <p className='experiencia__text--habilidades'>
                                Tenho me dedicado a aprimorar minhas habilidades, 
                                desde os fundamentos sólidos do HTML, CSS e JavaScript, 
                                até frameworks populares como Bootstrap e bibliotecas como jQuery.
                                Faço o uso do pré-processador de CSS, como (SASS / LESS) 
                                organizando e dividindo arquivos, automatização e minificação 
                                de tarefas com Grunt e Gulp, ganhando produtividade e eficiência.
                                Uma metodologia que adotei é o BEM (Block, Element, Modifier), 
                                que me ajuda a organizar e analisar meu código.
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