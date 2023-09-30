import React from "react";
import Perfil from '../assets/perfone.png';
import CvDocx from "../assets/curriculo_Janderson.docx";
import { BiAlignLeft } from "react-icons/bi";
/* import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi"; */


function About() {
    return (
            <div className="found">
                
                <article className="img" id="about">
                    <div className="img__content">
                        <div className="area__perfil">
                            <img className='perfil' src={Perfil} alt="imagem-perfil" />                                                                     
                            <div className="espaco">
                                <div className='name-text'>
                                    <h1 style={{ fontFamily: 'Sarabun, sem serifa',fontWeight: 200,}}>
                                        Desenvolvedor <span style={{ fontFamily: 'Sarabun, sem serifa'}}className='destaque-color'>Front-end</span> 
                                    </h1>
                                    <p>
                                        Desenvolvendo experiências digitais 
                                        e interativas para transformar ideias 
                                        em realidade.
                                    </p>
                                </div>
                                <h2 className="onUp">Sobre mim</h2>
                                <div className="border_bottom onUp"></div>
                                    <p  className='text-sobre onUp'>
                                    Oi, sou Jânderson Machado, estudo Analise e Desenvolvimento de sistemas na Estácio. 
                                    Venho desenvolvendo novas habilidades dia após dia, busco sempre manter as boas práticas 
                                    de escrita de código e uma boa comunicação com equipes em que trabalho.
                                    Minha busca contínua por aprendizado e abordagem curiosa me motivam a enfrentar 
                                    desafios e criar projetos intuitivos.
                                    Vamos colaborar para o sucesso do seu projeto!
                                    </p>
                                    <div className="buttons-informacao onUp">
                                        <button className="button__about">
                                                <a style={{textDecoration: 'none', color: 'aquamarine'}} href="https://wa.me/552194707188">
                                                contate-me
                                                </a>                                    
                                        </button>
                                        <button class="button__curriculo">
                                            <a href={CvDocx} >
                                                <div class="text">Currículo< BiAlignLeft /></div>
                                                <span class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                                </span>
                                            </a>
                                        </button>
                                    </div>
                            </div>
                        </div> 
                    </div>

                
            </article>
            </div>
    )
}

export default About;