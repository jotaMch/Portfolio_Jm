import React from 'react';
import { BiBadgeCheck } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import '../styles/educacao.css';

function Educacao() {
    return (
        <div className="educacao">
            <div className="educacao__card">
                <div className="educacao__card--color">                    
                    <h3>Cursos</h3>
                    <div className="educacao__card--cont">
                        <ul className='cursos'>
                            <li><BiBookOpen /> React do zero ao pro - Estudanto / EBAC</li>
                            <li><BiBookOpen /> Desenvolvimento web - Estudando / Rockseat</li>
                            <li><BiBadgeCheck/> Fundamento da gestão de projetos - Completo / FM2S</li>
                            <li><BiBadgeCheck/> Nano Course User Experience - Completo / FIAP</li>
                            <li><BiBadgeCheck/> Introdução a programação - Completo / EBAC</li>
                            <li><BiBadgeCheck/> Desenvolvimento Front-end do zero ao pro - Completo / EBAC</li>
                        </ul>
                    </div>
                </div> 

                <div className="educacao__card--color">                    
                    <h3>Objetivo</h3>
                    <div className="educacao__card--cont">
                        <div >
                            <p className="text-objetivo">
                            Desejo contribuir com equipes criativas, onde possa trabalhar em projetos 
                            desafiadores que me permitam aprender e crescer profissionalmente. Estou 
                            comprometido em seguir as melhores práticas de desenvolvimento. Acima de tudo, 
                            criar produtos digitais com melhor performace, que atendam às necessidades dos 
                            usuários e proporcionem uma experiência agradável.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educacao;
/* 
Boa tarde!

Espero que esteja tudo bem com você. 
Hoje, reservei um tempo para aprimorar meu portfólio 
e gostaria de compartilhá-lo com a comunidade aqui. No meu portfólio,  reuni alguns dos projetos que desenvolvi.

Para cria-lo utilizei uma variedade de tecnologias, 
incluindo ReactJS e Vite.js para garantir um desempenho otimizado e uma 
experiência de usuário agradável. Além disso, explorei a criação de estilos
com a biblioteca Styled-components e React icons, proporcionando um design 
atraente e coeso em toda a aplicação.  */