import React from "react";
import Perfil from '../assets/perfil.png';
import CvDocx from "../assets/curriculo_janderson_.docx";
import { BiAlignLeft } from "react-icons/bi";
/* import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi"; */


function About(props) {
    return (
            <div className="found">
                
                <article className="img" id="about">
                    <div className="img__content">
                        <div className="area__perfil">
                            <div className="relativ-img">
                                <img className='perfil' src={Perfil} alt="imagem-perfil" />  
                            </div>                                                                   
                            <div className="espaco">
                                <div className='name-text'>
                                    {!props.isEnglish && 
                                        <h1 style={{ fontFamily: 'Sarabun, sem serifa',fontWeight: 200,}}>
                                            Desenvolvedor <span style={{ fontFamily: 'Sarabun, sem serifa'}}className='destaque-color'>Front-end</span> 
                                        </h1>
                                    }
                                    {props.isEnglish && 
                                        <h1 style={{ fontFamily: 'Sarabun, sem serifa',fontWeight: 200,}}>
                                            <span style={{ fontFamily: 'Sarabun, sem serifa'}}className='destaque-color'>Front-end</span> Developer
                                        </h1>
                                    }                                
                                    {!props.isEnglish && 
                                    <p>
                                        Desenvolvendo experiências digitais 
                                        e interativas para transformar ideias 
                                        em realidade.
                                    </p>
                                    }
                                    {props.isEnglish && 
                                    <p>
                                        Developing digital and interactive experiences 
                                        to turn ideas into reality.
                                    </p>}
                                </div>
                                {!props.isEnglish && <h2 className="onUp">Sobre mim</h2>}
                                {props.isEnglish && <h2 className="onUp">About me</h2>}
                                <div className="border_bottom onUp"></div>
                                {!props.isEnglish && 
                                    <p  className='text-sobre onUp'>
                                    Oi, sou Jânderson Machado, estudo Analise e Desenvolvimento de sistemas na Estácio. 
                                    Venho desenvolvendo novas habilidades dia após dia, busco sempre manter as boas práticas 
                                    de escrita de código e uma boa comunicação com equipes em que trabalho.
                                    Minha busca contínua por aprendizado e abordagem curiosa me motivam a enfrentar 
                                    desafios e criar projetos intuitivos.
                                    Vamos colaborar para o sucesso do seu projeto!                                                             
                                    </p>
                                    }
                                    
                                    {props.isEnglish && 
                                    <p  className='text-sobre onUp'>
                                    Hello, I'm Jânderson Machado, studying Systems Analysis and Development at Estácio. 
                                    I've been continuously developing new skills day by day, always striving to maintain 
                                    good coding practices and effective communication within the teams I work with. My ongoing 
                                    quest for learning and a curious approach motivate me to tackle challenges and create 
                                    intuitive projects. Let's collaborate for the success of your project!
                                    </p>}    
                                    
                                    <div className="buttons-informacao onUp">
                                        {!props.isEnglish && 
                                        <button className="button__about">
                                                <a style={{textDecoration: 'none', color: 'aquamarine'}} href="https://wa.me/552194707188">
                                                contate-me
                                                </a>                                    
                                        </button>
                                        }
                                        {props.isEnglish && 
                                        <button className="button__about">
                                            <a style={{textDecoration: 'none', color: 'aquamarine'}} href="https://wa.me/552194707188">
                                            contact me
                                            </a>
                                        </button>
                                        }
                                        
                                        {!props.isEnglish && 
                                        <button class="button__curriculo">
                                            <a href={CvDocx} >
                                                <div class="text">Currículo< BiAlignLeft /></div>
                                                <span class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                                </span>
                                            </a>
                                        </button>
                                        }

                                        {props.isEnglish && 
                                        <button class="button__curriculo">
                                            <a href={CvDocx} >
                                                <div class="text">Curriculum< BiAlignLeft /></div>
                                                <span class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                                </span>
                                            </a>
                                        </button>
                                        }
                                    </div>
                            </div>
                        </div> 
                    </div>

                
            </article>
            </div>
    )
}

export default About;