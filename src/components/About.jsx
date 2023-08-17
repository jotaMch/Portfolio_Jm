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

                    Sou um desenvolvedor dedicado, tenho 23 
                    anos, estou constantemente buscando novas 
                    habilidades e conhecimentos. Resido no Rio 
                    de Janeiro, tenho paixão pelo aprendizado 
                    contínuo e estou motivado a enfrentar 
                    desafios. Estudo React na EBAC e com 
                    isso busco aprimorar minha capacidade 
                    proporcionando ótima usabilidade para 
                    usuários. Minha mentalidade curiosa 
                    me impulsiona a encontrar maneiras de 
                    melhorar a experiência do cliente.
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