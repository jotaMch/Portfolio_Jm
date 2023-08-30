import React from "react";
import styled from 'styled-components';
import '../styles/mensagem.css';
import { BiSolidMessageAltCheck } from "react-icons/bi";


const StyledSubmitButton = styled.button`
    background-color: #DA3015;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    margin: 26px 0 4px;
    height: 36px;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border: 2px solid #DA3015;
        color: #f16049;
    }
`;

const TextError = styled.p `
    color: #DA3015;
    font-size: 12px;
`;

class Mensagem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: {
                value: "",
                isError: false
            },
            email: {
                value: "",
                isError: false
            },
            mensagem: {
                value: "",
                isError: false
            },
            loadingVisible: false,
            formularioEnviado: false
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                isError: false
            }
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
    
        const { nome, email, mensagem } = this.state;

        if (nome.value === "") {
            this.setState({
                nome: {
                    ...nome,
                    isError: true
                },
                email: {
                    ...nome,
                    isError: true
                },
                mensagem: {
                    ...nome,
                    isError: true
                }
            });
            return; 
        }

        // Marcar o formulário como enviado e exibir mensagem
        this.setState({
            formularioEnviado: true,
            nome: { value: "", isError: false }, 
            email: { value: "", isError: false }, 
            mensagem: { value: "", isError: false } 
        });
    };
    
    render() {
        return (
            <div className="main">
                <form style={{display: 'flex',
                            flexDirection: 'column',
                            width: '30%'}} onSubmit={this.handleSubmit}>
                    <h3 style={{
                        color: '#EFF1EA',
                        fontWeight: "800",
                        margin: '20px 0',
                        fontSize: 20
                    }}>Entre em contato comigo !</h3>
                    
                    <div style={{
                            marginBottom: 20,}}>
                        <input className="borderInput" placeholder="Seu nome" style={{
                            padding: 2,
                            width: '100%'
                        }} type="text" value={this.state.nome.value} name="nome" onChange={this.handleChange}/>
                        {this.state.nome.isError && <TextError>O nome é obrigatório</TextError>}
                    </div>
                    
                    
                    <div style={{
                            marginBottom: 20,}}>
                        <input className="borderInput" placeholder="Seu email" style={{
                            padding: 2,
                            width: '100%'
                        }} type="email" value={this.state.email.value} name="email" onChange={this.handleChange}/>
                        {this.state.email.isError && <TextError>O e-mail é obrigatório</TextError>}
                    </div>

                    
                    <div>
                        <textarea 
                        className="borderInput"
                        style={{width: '100%', height: 58, overflowY: "none"}}
                        placeholder="Sua mensagem"
                        value={this.state.mensagem.value} name="mensagem" onChange={this.handleChange} />
                        {this.state.mensagem.isError && <TextError>A mensagem é obrigatória</TextError>}
                    </div>

                    <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>

                    <div  style={{color: '#DA3015', fontSize: 14, display: 'flex',
                            height:40, justifyContent: 'center', alignItems: 'center', gap: 4}}>

                        <p style={{ fontSize: 14}}>Sua mensagem foi enviada</p>
                        < BiSolidMessageAltCheck />
                    </div>
                </form>
                
                {this.state.loadingVisible && <div className="loading"></div>}
                
                {/* {this.state.formularioEnviado && } */}
                
            </div>
        );
    }
}

export default Mensagem;
