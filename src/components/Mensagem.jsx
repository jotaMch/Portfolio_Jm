import React from "react";
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
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
                <form onSubmit={this.handleSubmit}>
                    <h3>Dados</h3>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome.value} name="nome" onChange={this.handleChange}/>
                    {this.state.nome.isError && <TextError>O nome é obrigatório</TextError>}
                    
                    <label>E-mail:</label>
                    <input type="email" value={this.state.email.value} name="email" onChange={this.handleChange}/>
                    {this.state.email.isError && <TextError>O e-mail é obrigatório</TextError>}

                    <label>Mensagem:</label>
                    <textarea value={this.state.mensagem.value} name="mensagem" onChange={this.handleChange} />
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
