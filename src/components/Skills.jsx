import React from 'react';
import '../styles/Habilidades.css';
import { BiBadgeCheck } from "react-icons/bi";
import { BiSolidMouseAlt } from "react-icons/bi";


function Habilidades() {
    return (
        <div className='experiencia'>
                <article>
                    <h3 className='title-soft'>Habilidades </h3>
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