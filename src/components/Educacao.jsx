import React from 'react';
import '../styles/educacao.css';
import styled from 'styled-components';
import { BiBadgeCheck } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";


function Educacao(props) {

    return (
        <EducacaoText>      
            {!props.isEnglish &&           
            <nav className='obj' >
            <h3>Certificações e estudos</h3>
            <div className="border-aqua"></div>
                <ul className='cursos'>
                    <li><BiBookOpen /> React do zero ao pro - Estudanto / EBAC</li>
                    <li><BiBadgeCheck /> Desenvolvimento web - Completo / Rockseat</li>
                    <li><BiBadgeCheck/> Desenvolvimento Front-end do zero ao pro - Completo / EBAC</li>
                    <li><BiBadgeCheck/> Introdução a programação - Completo / EBAC</li>
                    <li><BiBadgeCheck/> Nano Course User Experience - Completo / FIAP</li>
                    <li><BiBadgeCheck/> Fundamento da gestão de projetos - Completo / FM2S</li>
                </ul>
            </nav>
            }

            {props.isEnglish && 
            <nav className='obj' >
            <h3>Certifications and Studies</h3>
            <div className="border-aqua"></div>
                <ul className='cursos'>
                    <li><BiBookOpen /> React from Zero to Pro - Studying / EBAC</li>
                    <li><BiBadgeCheck /> Web Development - Completed / Rockseat</li>
                    <li><BiBadgeCheck/> Front-end Development from Zero to Pro - Completed / EBAC</li>
                    <li><BiBadgeCheck/> Introduction to Programming - Completed / EBAC</li>
                    <li><BiBadgeCheck/> Nano Course User Experience - Completed / FIAP</li>
                    <li><BiBadgeCheck/> Project Management Fundamentals - Completed / FM2S</li>  
                </ul>
            </nav>
            }
                                
            {!props.isEnglish && 
            <div className='obj'>
                <h3>Meu objetivo</h3>
                <div className="border-aqua"></div>
                <p>
                    Desejo contribuir com equipes criativas, onde irei trabalhar em projetos 
                    desafiadores que me permitam aprender e crescer profissionalmente. Estou 
                    comprometido em seguir as melhores práticas de desenvolvimento. Acima de tudo, 
                    criar produtos digitais com melhor performace, que atendam às necessidades dos 
                    usuários e proporcionem uma experiência agradável.
                </p> 
            </div>
            }

            
            {props.isEnglish && 
            
            <div className='obj'>
                <h3>My objective</h3>
                <div className="border-aqua"></div>
                <p>
                    I aim to contribute to creative teams, where I will work on challenging 
                    projects that allow me to learn and grow professionally. I am committed to following best development 
                    practices. Above all, creating digital products with optimal performance that meet 
                    user needs and provide a pleasant experience.
                </p> 
            </div>
            }
            
        </EducacaoText>
    )
}

export default Educacao;


const EducacaoText = styled.p `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding-bottom: 180px;

    nav {
        @media (max-width: 768px) {
            width: 90%;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 90%;
        margin: 0 auto;
    }

    .border-aqua {
            width: 100px;
            height: 4px;
            margin: 12px 0 36px;
            background-color: aquamarine;
        }

    @keyframes obj {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        box-shadow: 8px -14px 20px -20px #7fffd4, 8px 14px 20px -20px #7fffd4;
    }
    }

    .obj {
        animation: obj 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        padding: 22px;
        width: 46%;
        min-height: 243px;
        border-radius: 0 24px 24px 0;
        @media (max-width: 768px) {
            width: 90%;
            margin-top: 28px;
        }
        
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 46%;
        min-height: 280px;
    }
    }

    li{
        list-style: none;
    }
`;


