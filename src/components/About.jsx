import React from "react";
import Perfil from '../assets/perfil.png';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";


function About() {
    return (
            <article className="img" id="about">
                <div className="area__perfil">
                    <img className='perfil' src={Perfil} alt="imagem-perfil" />
                </div>                          
                    <div className="espaco">
                        <p  className='text-sobre onUp'>
                        Olá! Sou Jânderson Machado 
                        Estudo Analise e Desenvolvimento de sistemas na Estácio, no
                        momento estou focado em React minha busca contínua por aprendizado e abordagem curiosa me motivam a enfrentar desafios e 
                        aprimorar a experiência do cliente. Estou comprometido em fornecer soluções criativas e 
                        interfaces intuitivas para seus projetos.
                        Vamos colaborar para o sucesso do seu projeto!
                        </p>
                    </div>

                <div className="mini-footer">
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
            </div>
        </article>
    )
}

export default About;