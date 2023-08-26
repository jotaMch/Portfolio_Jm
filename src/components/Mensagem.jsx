import React from "react";
import styled from 'styled-components';
import '../styles/mensagem.css';

const StyledSubmitButton = styled.button`
    background-color: #DA3015;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    margin: 26px 0;
    cursor: pointer;
`;

const TextError = styled.p `
    color: red;
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
                value,
                isError: false
            },
            [email]: {
                value,
                isError: false
            },
            [mensagem]: {
                value,
                isError: false
            },
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

        // Coloque aqui a lógica de envio ou outras validações necessárias

        // Exemplo de lógica de envio:
        // simulateSendForm(nome.value, email.value, mensagem.value);

        // Marcar o formulário como enviado e exibir mensagem
        this.setState({
            formularioEnviado: true
        });
    };
    
    render() {
        return (
            <div className="main">
                <form style={{display: 'flex',
                            flexDirection: 'column',
                            width: '30%'}} onSubmit={this.handleSubmit}>
                    <h3 style={{
                        color: '#DA3015',
                        fontWeight: "lighter",
                        margin: '20px 0'
                    }}>Entre em contato comigo</h3>
                    
                    <input placeholder="Seu nome" style={{
                        marginBottom: 20,
                        borderRadius: 4,
                        border: 'none',
                        padding: 2
                    }} type="text" value={this.state.nome.value} name="nome" onChange={this.handleChange}/>
                    {this.state.nome.isError && <TextError>O nome é obrigatório</TextError>}
                    
                    
                    <input placeholder="Seu email" style={{
                        marginBottom: 20,
                        borderRadius: 4,
                        border: 'none',
                        padding: 2
                    }} type="email" value={this.state.email.value} name="email" onChange={this.handleChange}/>
                    {this.state.email.isError && <TextError>O e-mail é obrigatório</TextError>}

                    
                    <textarea 
                    placeholder="Sua mensagem"
                    value={this.state.mensagem.value} name="mensagem" onChange={this.handleChange} />
                    {this.state.mensagem.isError && <TextError>A mensagem é obrigatória</TextError>}

                    <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>
                </form>
                
                {this.state.loadingVisible && <div className="loading"></div>}
                
                {this.state.formularioEnviado && <p>Formulário enviado</p>}
            </div>
        );
    }
}

export default Mensagem;
