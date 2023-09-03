import React from "react";
import Perfil from '../assets/animacao.png';
import CvDocx from "../assets/curriculo_Janderson.docx";
import { BiAlignLeft } from "react-icons/bi";
/* import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi"; */


function About() {
    return (
            <article className="img" id="about">
                <div className="img__content">
                    <div className="area__perfil">
                        <img className='perfil' src={Perfil} alt="imagem-perfil" />                                                                     
                        <div className="espaco">
                            <h2>Sobre mim</h2>
                            <div className="border_bottom"></div>
                                <p  className='text-sobre onUp'>
                                Olá! Sou Jânderson Machado, estudo Analise e Desenvolvimento de sistemas na Estácio. 
                                No momento estou focado em ReactJS, minha busca contínua por aprendizado e abordagem curiosa 
                                me motivam a enfrentar desafios e criar interfaces intuitivas para seus projetos.
                                Vamos colaborar para o sucesso do seu projeto!
                                </p>
                                <div className="buttons-informacao">
                                    <button className="button__about">
                                        contate-me
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

            {/* <div className="mini-footer">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/j%C3%A2nderson-machado-082b54259/">
                            <BiLogoLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jotaMch">
                            <BiLogoGithub />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:jandersonmachado090@gmail.com">
                            <BiLogoGmail />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5521965063664">
                            <BiLogoWhatsapp />
                        </a>
                    </li> 
                </ul>          
            </div> */}
        </article>
    )
}

export default About;