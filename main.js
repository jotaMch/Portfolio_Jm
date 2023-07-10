const textSub = document.querySelector('.subtitle');
const text = 'Desenvolvedor Front-end';
const interval = 80;

function animar() {
    const info = document.querySelector('#info');
    const btn = document.getElementById('btn');
    const btnLine = document.querySelectorAll('.line');
    btn.classList.toggle('active');

    if (info.style.display === 'block') {
        info.style.display = 'none';
        btnLine.forEach(function(line) {
            line.style.backgroundColor = '';
        });
    } else {
        info.style.display = 'block';
        btnLine.forEach(function(line) {
            line.style.backgroundColor = '#41c7f8';
        });
    }
}



function imgPerfil() {
    const perfil2 = document.querySelector('.perfil2');
    
    if (perfil2.style.display === 'none') {
        perfil2.style.display = 'block';
    } else {
        perfil2.style.display = 'none';
    }
}

function showText() {
    const char = text.split("").reverse();
    const type = setInterval(() => {
        if (!char.length) {
            return clearInterval(type);
        }
        const next = char.pop();
        textSub.innerHTML += next;
    }, interval);
}

showText();

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
