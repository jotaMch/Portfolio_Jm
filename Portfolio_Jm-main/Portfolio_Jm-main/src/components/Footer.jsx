import React from "react";
import '../styles/footer.css';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiSolidPhoneIncoming } from "react-icons/bi";

function Footer(props){
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    return(
        <div>
            <footer id="contact">
            <div className="border_footer"></div>
            {!props.isEnglish &&
                <ul>
                    <li data-text="About" onClick={() => scrollToSection('about')}>
                        <span className="actual-text">Sobre</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Skills" onClick={() => scrollToSection('skills')}>
                        <span className="actual-text">Habilidades</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Project" onClick={() => scrollToSection('projects')}>
                        <span className="actual-text">Projetos</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Contact" onClick={() => scrollToSection('contact')}>
                        <span className="actual-text">Contato</span>
                        <span className="front-text"></span>
                    </li>
                </ul>
            }

            {props.isEnglish &&
                <ul>
                    <li data-text="About" onClick={() => scrollToSection('about')}>
                        <span className="actual-text">About</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Skills" onClick={() => scrollToSection('skills')}>
                        <span className="actual-text">Skills</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Project" onClick={() => scrollToSection('projects')}>
                        <span className="actual-text">Project</span>
                        <span className="front-text"></span>
                    </li>
                    <li data-text="Contact" onClick={() => scrollToSection('contact')}>
                        <span className="actual-text">Contact</span>
                        <span className="front-text"></span>
                    </li>
                </ul>
            }

                {!props.isEnglish &&
                <p>
                    Desenvolvido por Jânderson Machado
                </p>
                }

                {props.isEnglish && 
                <p>
                    Developed by Jânderson Machado
                </p>
                }

                <ul className="contact">
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
                        <a href="https://wa.me/552194707188">
                            <BiLogoWhatsapp />
                        </a>
                    </li> 
                </ul> 
                <span className="number-tell">< BiSolidPhoneIncoming /> (21) 99470-7188 | (21) 96432-4139</span>
            </footer>
        </div>
    )
}

export default Footer;