import { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import '../styles/mensagem.css';
/* import { BiMailSend } from "react-icons/bi"; */


export default function Mensagem() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [valido, setValido] = useState(false);

    const clearConfirmation = () => {
        if (valido) {
            setValido(false);
        }
    };

    function validateFields() {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            setIsError(true);
            return false;
        }
        setIsError(false);
        return true;
    }

    function sendEmail(e) {
        e.preventDefault();

        if (!validateFields()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs.send('service_1c9ivpc', 'template_qby0rqm', templateParams, 'm70p7fzy1ofQo6eUH')
            .then((response) => {
                console.log('Email enviado!', response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setValido(true);
            })
            .catch((err) => {
                console.log('Erro:', err);
            });
    }

    return (
        <div className="main">
            <h3 className='contato-comigo' style={{ color: '#EFF1EA', fontWeight: '800', margin: '20px auto', width: '80%', textAlign: 'center', fontSize: 20 }}>
                Entre em contato comigo!
            </h3>
            <form
                style={{ display: 'flex', flexDirection: 'column', paddingBottom: 80 }}
                onSubmit={sendEmail}
            >
                <div style={{ marginBottom: 20 }}>
                    <input
                        className="borderInput"
                        placeholder="Seu nome"
                        style={{ padding: 2, width: '100%' }}
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value); clearConfirmation();}}
                    />
                    {isError && name.trim() === '' && <TextError>Por favor, insira seu nome</TextError>}
                </div>

                <div style={{ marginBottom: 20 }}>
                    <input
                        className="borderInput"
                        placeholder="Seu email"
                        style={{ padding: 2, width: '100%' }}
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); clearConfirmation();}}
                    />
                    {isError && email.trim() === '' && <TextError>Por favor, insira seu email</TextError>}
                </div>

                <div>
                    <textarea
                        className="borderInput"
                        style={{ width: '100%', height: 58, overflowY: 'none' }}
                        placeholder="Sua mensagem"
                        value={message}
                        type="text"
                        onChange={(e) => {setMessage(e.target.value); clearConfirmation();}}
                    />
                    {isError && message.trim() === '' && <TextError>Por favor, insira sua mensagem</TextError>}
                </div>
                <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>
                {valido && <TextError>Sua mensagem foi enviada</TextError>}
            </form>
        </div>
    );
}




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




