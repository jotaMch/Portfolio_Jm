const textSub = document.querySelector('.subtitle');
const text = 'Desenvolvedor Front-end';
const interval = 80;

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

function recolher() {
    const info = document.querySelector('#info');
    if (info.style.display === 'block') {
        info.style.display = 'none';
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


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}



//btn toggle


const checkbox = document.querySelector('input[type="checkbox"]');
const hello = document.querySelector('.hello');
const menuList = document.querySelector('.menu-list'); 
const menuItems = document.querySelectorAll('.menu-list li');
const paragrafos = document.querySelectorAll('p');
const cards = document.querySelectorAll('.back-content');
const elementsToToggle = document.querySelectorAll('header, .flex, #sobre, #skills, #projetos, .ftr, li');

checkbox.addEventListener('change', function() {
    // Verifica se o checkbox está marcado
if (checkbox.checked) { 
        elementsToToggle.forEach(function(element) {
        element.classList.add('light');
        });

        textSub.style.color = '#222';
        hello.style.color = '#222';
        menuList.style.backgroundColor = 'rgba(248, 201, 148, 0.97)';

        paragrafos.forEach(function(paragrafo) {
        paragrafo.style.color = '#000';
        });

        cards.forEach(function(card) {
        card.style.backgroundColor = ' rgba(250, 196, 134, 0.637)';
        });

        menuItems.forEach(function(item) {
        item.style.color = '#222';
        });
        } else {
        elementsToToggle.forEach(function(element) {
        element.classList.remove('light');
        });

        // Retorna à cor original

        textSub.style.color = ''; 
        hello.style.color = ''; 
        menuList.style.backgroundColor = ''; 

        paragrafos.forEach(function(paragrafo) {
        paragrafo.style.color = ''; 
        });

        cards.forEach(function(card) {
        card.style.backgroundColor = ''; 
        });

        menuItems.forEach(function(item) {
        item.style.color = ''; 
    });
    }
});


