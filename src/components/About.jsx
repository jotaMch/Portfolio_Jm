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
                <p  className='text-sobre onUp'>

                Olá! Sou um desenvolvedor front-end dedicado, focado em React 
                pela EBAC. Minha busca constante por aprendizado e abordagem 
                curiosa me impulsionam a enfrentar desafios e aprimorar a experiência 
                do cliente. Solicito e comprometido em oferecer soluções criativas e 
                interfaces intuitivas para seus projetos. Minha paixão pelo desenvolvimento e 
                dedicação garantem resultados de alta qualidade. 
                Vamos colaborar para o sucesso do seu projeto!
                </p>

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