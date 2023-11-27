import React, { useState } from 'react';
import '../styles/educacao.css';
import styled from 'styled-components';
import { BiBadgeCheck } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";
//img certificado
import ReactImg from '../assets/certificado-image/react-matricula.png'
import Web from '../assets/certificado-image/dev-web.png'
import front from '../assets/certificado-image/front-end-ebac.png'
import Introducao from '../assets/certificado-image/introducao-prg.png'
import Ux from '../assets/certificado-image/ux-certificado.png'
import Intensivo from '../assets/certificado-image/intensivo-js-hastag.png'


function Educacao(props) {
    const [certificado, setCertificado] = useState(null);

    const openImg = (index) => {
        setCertificado((prevState) => (prevState === index ? null : index));
        index.styled.height = '160px'
    };

    return (
        <EducacaoText>
            {!props.isEnglish &&  <h3>Meus certificados</h3>}
            {props.isEnglish && <h3>My Certificates</h3>}
            
            {!props.isEnglish && (
                <ul className='cursos'>
                    <li  onClick={() => openImg(0)} 
                    style={{  
                    alignItems: certificado === 0 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBookOpen /> React do zero ao pro - Estudanto / EBAC
                            </div>
                            <IoAddOutline 
                            className='mais'
                            style={{transform: certificado === 0 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 0 && (
                            <img src={ReactImg} className='certificadoClassMatricula' alt="React-curso" />
                        )}
                    </li>



                    <li  onClick={() => openImg(1)} 
                    style={{  
                    alignItems: certificado === 1 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Desenvolvimento web - Completo / Rockseat
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 1 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 1 && (
                            <img src={Web} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(2)} 
                    style={{  
                            alignItems: certificado === 2 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Desenvolvimento Front-end do zero ao pro - Completo / EBAC
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 2 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 2 && (
                            <img src={front} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(3)} 
                    style={{  
                            alignItems: certificado === 3 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Introdução a programação - Completo / EBAC
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 3 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 3 && (
                            <img src={Introducao} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(4)} 
                    style={{  
                            alignItems: certificado === 4 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Nano Course User Experience - Completo / FIAP
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 4 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 4 && (
                            <img src={Ux} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                </ul>
            )}


            {props.isEnglish && (
                <ul className='cursos'>
                    <li  onClick={() => openImg(0)} 
                    style={{  
                    alignItems: certificado === 0 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBookOpen />React from Scratch to Pro - Studying / EBAC
                            </div>
                            <IoAddOutline 
                            className='mais'
                            style={{transform: certificado === 0 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 0 && (
                            <img src={ReactImg} className='certificadoClassMatricula' alt="React-curso" />
                        )}
                    </li>



                    <li  onClick={() => openImg(1)} 
                    style={{  
                    alignItems: certificado === 1 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck />  Web Development - Complete / Rockseat
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 1 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 1 && (
                            <img src={Web} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(2)} 
                    style={{  
                            alignItems: certificado === 2 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Front-end Development from Scratch to Pro - Complete / EBAC
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 2 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 2 && (
                            <img src={front} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(3)} 
                    style={{  
                            alignItems: certificado === 3 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Introduction to Programming - Complete / EBAC
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 3 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 3 && (
                            <img src={Introducao} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                    <li  onClick={() => openImg(4)} 
                    style={{  
                            alignItems: certificado === 4 ? 'start' : 'center'}} 
                    >
                        <div className='sub-lista'>
                            <div>
                                <BiBadgeCheck /> Nano Course User Experience - Complete / FIAP
                            </div>
                            <IoAddOutline className='mais' 
                            style={{transform: certificado === 4 ? 'rotate(45deg)' : '' }} />
                        </div>
                        {certificado === 4 && (
                            <img src={Ux} className='certificadoClass' alt="certificado" />
                        )}
                    </li>
                </ul>
            )}
        </EducacaoText>
    );
    }

    export default Educacao;

    const EducacaoText = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #0d0d0d;
    padding-bottom: 180px;

    h3 {
        width: 100%;
        text-align: start;
        margin-bottom: 34px;
        @media screen and (min-width: 768px) and (max-width: 1100px) {  
            width: 90%;
        }
        @media screen and (max-width: 767px) {
            width: 90%;
        }
    }
    ul {
        width: 100%;               
        @media screen and (min-width: 768px) and (max-width: 1100px) {  
            width: 90%;
        }
        @media screen and (max-width: 767px) {
            width: 90%;
        }
    }

    li {
        font-size: 16px;
        padding: 20px 0 20px 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        box-shadow: 0 0 14px 1px rgb(180, 195, 197);
        border-radius: 30px;
        margin-bottom: 8px;
        list-style: none;
        cursor: pointer;
        position: relative;

        .sub-lista {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .mais {
            margin-right: 22px;
            height: 22px;
            width: 22px;
        }

        .certificadoClass {
            width: 380px;
            height: 250px;
            margin: 30px auto 0;
            box-shadow: 0 0 12px 2px rgb(198, 233, 237);
            border-radius: 16px;
                
            @media screen and (min-width: 768px) and (max-width: 1100px) {  
                width: 90%;
            }
            @media screen and (max-width: 767px) {
                width: 90%;
            }
        }
        
        .certificadoClassMatricula {            
            width: 380px;
            height: 450px;
            margin: 30px auto 0;
            box-shadow: 0 0 12px 2px rgb(198, 233, 237);
            border-radius: 16px;
                
            @media screen and (min-width: 768px) and (max-width: 1100px) {  
                width: 90%;
            }
            @media screen and (max-width: 767px) {
                width: 90%;
            }
        }
    }

    article {
        background-color: rgb(57, 169, 244);
    }
`;
