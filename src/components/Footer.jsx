import React from "react";
import '../styles/footer.css';

function Footer(props){
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    return(
        <div>
            <footer id="contact">

                {!props.isEnglish &&
                <div>
                    <span style={{color: "#fff"}}>
                        &copy; 2023 Todos os direitos reservados.
                    </span>
                    <p>
                        Desenvolvido por Jânderson Machado
                    </p>
                </div>
                }

                {props.isEnglish && 
                <div>
                    <span style={{color: "#fff"}}>
                        &copy; 2023 All rights reserved.
                    </span>
                    <p>
                        Developed by Jânderson Machado
                    </p>
                </div>
                }

                </footer>
        </div>
    )
}

export default Footer;