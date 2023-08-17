import React from 'react';
import '../styles/projects.css';
import { BiCake } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { BiSolidCar } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";




function Projects() {
    return(
        <div className="main__project" id='projects'>
            <div className="project">
            <h3>Projects</h3>
                <div className="project-class">

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiCloset />
                                    Clothing Store
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Grif Shopp</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/Grif-shop-jm"><BiLogoGithub /></a>

                                    <a href="https://grif-shop-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiSolidCar />
                                    Motors shop
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Jota Motors</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/loja_de_carros"><BiLogoGithub /></a>

                                    <a href="https://loja-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiBriefcaseAlt />
                                    Focus Tourism
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    {/* <p class="name">Chris Stark</p> */}
                                    <p class="role">Focus Tourism</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="https://github.com/jotaMch/turismo-jm"><BiLogoGithub /></a>

                                    <a href="https://turismo-jm.vercel.app/">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>  

                        <div class="cardContainer">
                            <div class="profileDiv">
                                    <BiCake />
                                    Confeitaria
                            </div>
                            <div class="infoDiv">
                                <div class="nameDiv">
                                    <p class="name">Em desenvolvimento</p>
                                    <p class="role">JoTTCakes</p>
                                </div>
                                <div class="socialDiv">
                                    <a href="#linkdin"><BiLogoGithub /></a>

                                    <a href="#insta">< BiLayout /></a>
                                
                                </div>
                            </div>
                        </div>                                      
                    
                </div>

            
            </div>
        </div>
    )
} 

export default Projects;
