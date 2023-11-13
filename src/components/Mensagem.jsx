import { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import '../styles/mensagem.css';
import '../styles/footer.css';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiSolidPhoneIncoming } from "react-icons/bi";


export default function Mensagem(props) {
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
                {!props.isEnglish &&
                <h3 className='contato-comigo' style={{ color: '#EFF1EA', fontWeight: '800', margin: '20px auto', width: '80%', textAlign: 'center', fontSize: 20 }}>
                    Entre em contato comigo!
                </h3>
                }
                {props.isEnglish &&
                <h3 className='contato-comigo' style={{ color: '#EFF1EA', fontWeight: '800', margin: '20px auto', width: '80%', textAlign: 'center', fontSize: 20 }}>
                    Contact me!
                </h3>
                }
            <div className='main-form'>
                <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={sendEmail}
                >
                <div style={{ marginBottom: 20 }}>
                {!props.isEnglish &&
                    <input
                        className="borderInput"
                        placeholder="Seu nome"
                        style={{ padding: 2, width: '100%' }}
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value); clearConfirmation();}}
                    />
                }
                {props.isEnglish &&
                <input
                    className="borderInput"
                    placeholder="Your name"
                    style={{ padding: 2, width: '100%' }}
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value); clearConfirmation();}}
                />
                }
                    {isError && name.trim() === '' && <TextError>Por favor, insira seu nome</TextError>}
                </div>

                <div style={{ marginBottom: 20 }}>
                {!props.isEnglish &&
                    <input
                        className="borderInput"
                        placeholder="Seu email"
                        style={{ padding: 2, width: '100%' }}
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); clearConfirmation();}}
                    />
                }
                {props.isEnglish &&
                    <input
                        className="borderInput"
                        placeholder="Your email"
                        style={{ padding: 2, width: '100%' }}
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); clearConfirmation();}}
                    />
                }
                
                    {isError && email.trim() === '' && <TextError>Por favor, insira seu email</TextError>}
                </div>

                <div>
                    {!props.isEnglish &&
                    <textarea
                        className="borderInput"
                        style={{ width: '100%', height: 58, overflowY: 'none' }}
                        placeholder="Sua mensagem"
                        value={message}
                        type="text"
                        onChange={(e) => {setMessage(e.target.value); clearConfirmation();}}
                    />
                    }
                    {props.isEnglish &&
                    <textarea
                        className="borderInput"
                        style={{ width: '100%', height: 58, overflowY: 'none' }}
                        placeholder="Your message"
                        value={message}
                        type="text"
                        onChange={(e) => {setMessage(e.target.value); clearConfirmation();}}
                    />
                    }
                    {isError && message.trim() === '' && <TextError>Por favor, insira sua mensagem</TextError>}
                </div>
                {!props.isEnglish &&
                <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>
                }
                {props.isEnglish && 
                <StyledSubmitButton type="submit">Send</StyledSubmitButton>
                }
                {valido && <TextError>Sua mensagem foi enviada</TextError>}
            </form>

            <div className='sub-contact'>
                <ul className="contact">
                    <li>
                        <a href="https://www.linkedin.com/in/j%C3%A2nderson-machado-082b54259/">
                            <BiLogoLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jotaMch">
                            <BiLogoGithub />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:jandersonmachado090@gmail.com">
                            <BiLogoGmail />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/552194707188">
                            <BiLogoWhatsapp />
                        </a>
                    </li> 
                </ul>
                <span className="number-tell">< BiSolidPhoneIncoming /> (21) 99470-7188 | (21) 96432-4139</span>
            </div>
            
        </div>
    </div>
    );
}




const StyledSubmitButton = styled.button`
    background-color: aquamarine;
    color: #000;
    font-weight: bold;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    margin: 26px 0 4px;
    height: 36px;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border: 2px solid aquamarine;
        color: aquamarine;
    }
`;


const TextError = styled.p `
    color: aquamarine;
    font-size: 12px;
`;




