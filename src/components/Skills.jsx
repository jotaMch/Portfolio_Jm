import React from 'react';
import '../styles/Habilidades.css';
import { BiBadgeCheck } from "react-icons/bi";
import { BiSolidMouseAlt } from "react-icons/bi";


function Habilidades(props) {
    return (
        <div className='experiencia'>
                <article>
                    
                {!props.isEnglish && 
                    <h3 className='title-soft'>Habilidades </h3>
                }
                
                {props.isEnglish && 
                    <h3 className='title-soft'>Skills </h3>
                }
                    <div className="flex">
                        
                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                    {!props.isEnglish && 
                                        <h4 className="card__title">
                                            Analítico e Criativo
                                            <BiSolidMouseAlt />
                                        </h4>
                                    }
                                    {props.isEnglish && 
                                        <h4 className="card__title">
                                            Analytical and Creative
                                            <BiSolidMouseAlt />
                                        </h4>
                                    }
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    {!props.isEnglish && 
                                    <p>
                                        Como desenvolvedor sou analítico em diversas tarefas 
                                        em que participo, buscando criar ideias melhores.                                
                                    </p>
                                    }
                                    {props.isEnglish && 
                                    <p>
                                        As a developer I am analytical in several tasks
                                        in which I participate, seeking to create better ideas.                                
                                    </p>
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                    {!props.isEnglish && 
                                        <h4 className="card__title">
                                            Organizado
                                            <BiSolidMouseAlt />
                                        </h4>
                                    }

                                    {props.isEnglish && 
                                        <h4 className="card__title">
                                            Organized
                                            <BiSolidMouseAlt />
                                        </h4>
                                    }
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    {!props.isEnglish && 
                                        <p>
                                        Tenho uma abordagem estruturada e disciplinada na gestão de projetos,
                                        priorizando tarefas e promovendo a eficácia do trabalho desenvolvido.                            
                                        </p>
                                    }

                                    {props.isEnglish && 
                                        <p>
                                        I have a structured and disciplined approach to project management,
                                        prioritizing tasks and promoting the effectiveness of the work carried out.                           
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-txt">
                                <div class="img-content">
                                {!props.isEnglish && 
                                    <h4 className="card__title">
                                        Próativo
                                        <BiSolidMouseAlt />
                                    </h4>
                                }    
                                {props.isEnglish && 
                                    <h4 className="card__title">
                                        Proactive
                                        <BiSolidMouseAlt />
                                    </h4>
                                }    
                                </div>
                                <div class="content">
                                    <BiBadgeCheck  />
                                    {!props.isEnglish && 
                                    <p>
                                    Busco compartilhar minhas idéias e opniões auxiliando o time
                                    em resoluções de problemas buscando o aprimoramento profissional.                            
                                    </p>
                                    }
                                    {props.isEnglish && 
                                    <p>
                                    I seek to share my ideas and opinions by helping the team solve 
                                    problems seeking professional improvement.                           
                                    </p>
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
            </article>
                
            </div>
    )
}

export default Habilidades;