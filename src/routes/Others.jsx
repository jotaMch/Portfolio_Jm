import React from 'react';
import '../styles/projects.css';
import { BiLoaderCircle } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { BiSolidCar } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

import { BiLogoJquery } from "react-icons/bi";
import { FaGrunt } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaLess } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
//images of projects
import roupas from '../assets/project-image/roupas.png';
import carros from '../assets/project-image/carros.png';
import comercioEletronico from '../assets/project-image/e-commerce.png';
import formReact from '../assets/project-image/form-react.png';

import { Link } from "react-router-dom";


function OthersProjects(props) {
    return(
        <div className="twu__found">
        <div className="main__project" id='projects'>
            <Link to="/">
                <button style={{backgroundColor: 'white', padding: '10px 18px', border: 'none'}}>voltar</button> 
            </Link>
            {!props.isEnglish && 
            <div className="project">
                <h3>Projetos</h3>
                    <div className="project-class">

                        <div class="cardContainer">
                            <div className="sobre-project"></div>
                            <div className="profileDiv" style={{backgroundImage: `url(${roupas})`,backgroundSize: 'cover'}}>
                                    <div className='sub-info'>
                                        <BiCloset />
                                        Loja de Roupas
                                        <div><FaBootstrap/>  <FaLess/> <FaGrunt/> <BiLogoJquery/></div>
                                    </div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    {/* <p className="name">Chris Stark</p> */}
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Grif Shopp</p>
                                    <p style={{padding: 8}} className="role">
                                        Um projeto de loja de roupas obtendo carossel, menu interativo, imagens, produtos e um formulario com validações em JQuery 
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/Grif-shop-jm"><BiLogoGithub /></a>

                                    <a href="https://grif-shop-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv" style={{backgroundImage: `url(${carros})`,backgroundSize: 'cover'}}>
                                <div className='sub-info'>
                                    <BiSolidCar />
                                    Loja de carros
                                    <div><FaHtml5/> <FaSass /> <BiLogoJquery/></div>
                                </div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    {/* <p className="name">Chris Stark</p> */}
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Jota Motors</p>
                                    <p style={{padding: 8}} className="role">
                                        Um projeto para venda de carros com um menu interativo e carrossel. Também com seções sobre o epaço, com cards de carros interativo com o formulário. 
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/loja_de_carros"><BiLogoGithub /></a>

                                    <a href="https://loja-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv" style={{backgroundImage: `url(${formReact})`,backgroundSize: 'cover'}}>
                                <div className='sub-info'>
                                    <BiBriefcaseAlt />
                                    Formulário
                                    <div> < FaReact/> <SiStyledcomponents/></div>
                                </div>
                            </div>
                            {/* <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Focus Tourism</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/turismo-jm"><BiLogoGithub /></a>
                                    <a href="https://turismo-jm.vercel.app/">< BiLayout /></a>                                
                                </div>
                            </div> */}
                            
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Registro Fácil </p>
                                    <p style={{padding: 8}} className="role">
                                        Formulário de registro de dados com as resposta mostradas em uma lista com opções de ver os detalhes em um poup-up ou resetar.
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/React_form_keys"><BiLogoGithub /></a>
                                    <a href="https://react-form-keys-jm.vercel.app/">< BiLayout /></a>                                
                                </div>
                            </div>
                        </div>   
                        <div className="cardContainer">
                            <div classNameName="sobre-project"></div>
                            <div className="profileDiv" style={{backgroundImage: `url(${comercioEletronico})`,backgroundSize: 'cover'}}>
                                <div className='sub-info'>
                                    <BiCloset />
                                    E-commerce 
                                    <div><FaHtml5/><BiLogoJavascript/> < SiVite/>< BiLogoTailwindCss/> </div>
                                </div>
                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p style={{marginRight: 'auto', padding: 8}} className="role">Project E-commerce</p>
                                    <p style={{padding: 8}} className="role">
                                        Projeto para E-commerce, usei JavaScript puro fazendo a integração dos produtos e cards.
                                        Fiz o uso de Tailwind para estilização, assim obtendo mais organização .
                                    </p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://github.com/jotaMch/E-commerce_js"><BiLogoGithub /></a>

                                    <a href="https://jotamch.github.io/E-commerce_js/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>                                                           
                
                </div>
            </div>
            }

            {props.isEnglish && 
            <div className="project">
                <h3>Projects</h3>
                <div className="project-class">          
                    <div className="cardContainer">
                        <div className="about-project"></div>
                        <div className="profileDiv" style={{backgroundImage: `url(${roupas})`,backgroundSize: 'cover'}}>
                            <div className='sub-info'>
                                <BiCloset />
                                Clothing Store
                                <div><FaBootstrap/>  <FaLess/> <FaGrunt/> <BiLogoJquery/></div>
                            </div>
                        </div>
                        <div className="infoDiv">
                        <div className="nameDiv">
                            <p style={{ marginRight: 'auto', padding: 8 }} className="role">Grif Shopp</p>
                            <p style={{ padding: 8 }} className="role">
                            A clothing store project with carousel, interactive menu, images, products, and a form with validations in JQuery.
                            </p>
                        </div>
                        <div className="socialDiv">
                            <a href="https://github.com/jotaMch/Grif-shop-jm"><BiLogoGithub /></a>
                            <a href="https://grif-shop-jm.vercel.app/"><BiLayout /></a>
                        </div>
                        </div>
                    </div>
                
                    <div className="cardContainer">
                        <div className="about-project"></div>
                        <div className="profileDiv" style={{backgroundImage: `url(${carros})`,backgroundSize: 'cover'}}>
                            <div className='sub-info'>
                                <BiSolidCar />
                                Car Store
                                <div><FaHtml5/> <FaSass /> <BiLogoJquery/></div>
                            </div>
                        </div>
                        <div className="infoDiv">
                        <div className="nameDiv">
                            <p style={{ marginRight: 'auto', padding: 8 }} className="role">Jota Motors</p>
                            <p style={{ padding: 8 }} className="role">
                            A project for selling cars with an interactive menu and carousel. Also with sections about space, with interactive car cards and the form.
                            </p>
                        </div>
                        <div className="socialDiv">
                            <a href="https://github.com/jotaMch/loja_de_carros"><BiLogoGithub /></a>
                            <a href="https://loja-jm.vercel.app/"><BiLayout /></a>
                        </div>
                        </div>
                    </div>
                
                    <div className="cardContainer">
                        <div className="about-project"></div>
                        <div className="profileDiv" style={{backgroundImage: `url(${comercioEletronico})`,backgroundSize: 'cover'}}>
                            <div className='sub-info'>
                                <BiCloset />
                                E-commerce
                                <div><FaHtml5/><BiLogoJavascript/> <SiVite/><BiLogoTailwindCss/> </div>
                            </div>
                        </div>
                        <div className="infoDiv">
                        <div className="nameDiv">
                            <p style={{ marginRight: 'auto', padding: 8 }} className="role">Project E-commerce</p>
                            <p style={{ padding: 8 }} className="role">
                            E-commerce project, I used pure JavaScript for product and card integration. I used Tailwind for styling, achieving better organization.
                            </p>
                        </div>
                        <div className="socialDiv">
                            <a href="https://github.com/jotaMch/E-commerce_js"><BiLogoGithub /></a>
                            <a href="https://jotamch.github.io/E-commerce_js/"><BiLayout /></a>
                        </div>
                        </div>
                    </div> 
                
                    <div className="cardContainer">
                        <div className="about-project"></div>
                        <div className="profileDiv" style={{backgroundImage: `url(${formReact})`,backgroundSize: 'cover'}}>
                            <div className='sub-info'>
                                <BiBriefcaseAlt />
                                Form
                                <div> < FaReact /> <SiStyledcomponents/> </div>
                            </div>
                        </div>
                        <div className="infoDiv">
                        <div className="nameDiv">
                            <p style={{ marginRight: 'auto', padding: 8 }} className="role">Easy Register</p>
                            <p style={{ padding: 8 }} className="role">
                            Data registration form with responses displayed in a list with options to view the details in a pop-up or reset.
                            </p>
                        </div>
                        <div className="socialDiv">
                            <a href="https://github.com/jotaMch/React_form_keys"><BiLogoGithub /></a>
                            <a href="https://react-form-keys-jm.vercel.app/"><BiLayout /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            }
            {!props.isEnglish && 
                <Link to='/project'>
                    <div>
                        <button className='outer'>
                            Outros
                        </button>
                    </div>
                </Link>
            }
            {props.isEnglish && 
                <Link to='/project'>
                    <div>
                        <button className='outer'>
                            Other
                        </button>
                    </div>
                </Link>
            }
        </div>
    </div>
    )
} 

export default OthersProjects;


