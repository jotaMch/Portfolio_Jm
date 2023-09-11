import React from 'react';
import '../styles/educacao.css';
import styled from 'styled-components';
import { BiBadgeCheck } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";


function Educacao() {

    return (
        <EducacaoText>                
            <nav >
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
            
        </EducacaoText>
    )
}

export default Educacao;


const EducacaoText = styled.p `
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    padding-top: 180px;

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

    .obj {
        width: 400px;
        @media (max-width: 768px) {
            width: 90%;
            margin-top: 28px;
        }
        
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 44%;
    }
    }

    li{
        list-style: none;
    }
`;


