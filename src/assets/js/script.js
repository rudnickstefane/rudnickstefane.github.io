function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    const typeInterval = setInterval(function () {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

function abrirDetalhes(button) {
    document.querySelectorAll('.card.active').forEach(card => {
        card.classList.remove('active');
    });

    const card = button.closest('.card');
    card.classList.add('active');
    const cardTitle = card.querySelector('.card-title').innerText;
    const cardTags = card.querySelector('.card-tags').innerText.split(', ');
    const cardDescription = card.querySelector('.card-description').textContent;

    document.getElementById('nomeProjeto').innerText = cardTitle;
    document.getElementById('descricaoProjeto').textContent = cardDescription;
    const tagsContainer = document.createElement('div');

    nomeProjeto.innerText = cardTitle;
    descricaoProjeto.textContent = cardDescription;

    nomeProjeto.nextElementSibling.innerHTML = '';
    cardTags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tech-tag');
        span.innerText = tag;
        nomeProjeto.nextElementSibling.appendChild(span);
    });

    document.getElementById('overlay').style.display = 'block';
    const detalhesBox = document.getElementById('detalhesBox');
    detalhesBox.style.display = 'block';
    setTimeout(() => detalhesBox.style.transform = 'translateY(0)', 10);

    document.documentElement.style.overflow = 'hidden';
}

function fecharDetalhes() {
    document.getElementById('overlay').style.display = 'none';

    const detalhesBox = document.getElementById('detalhesBox');
    detalhesBox.style.transform = 'translateY(100%)';
    setTimeout(() => detalhesBox.style.display = 'none', 500);

    document.documentElement.style.overflow = '';
}

function abrirGaleria() {
    const card = document.querySelector('.card.active');
    const galeriaText = card.querySelector('.card-gallery').textContent;
    const regex = /src\/assets\/img\/[\w.-]+\.png/g;
    const galeriaImages = galeriaText.match(regex) || [];
    const miniaturasContainer = document.querySelector('.galeria-miniaturas');
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    const mensagemInicial = document.getElementById('mensagemInicial');

    miniaturasContainer.innerHTML = '';
    galeriaImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.onclick = () => {
            imagemAmpliada.src = url;
            imagemAmpliada.style.display = 'block';
            mensagemInicial.style.display = 'none';
        };
        miniaturasContainer.appendChild(img);
    });

    imagemAmpliada.style.display = 'none';
    mensagemInicial.style.display = 'block';

    document.getElementById('galeriaBox').style.display = 'block';

    document.getElementById('overlay-gallery').style.display = 'block';
}

function fecharGaleria() {
    document.getElementById('galeriaBox').style.display = 'none';
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    const mensagemInicial = document.getElementById('mensagemInicial');

    imagemAmpliada.style.display = 'none';
    imagemAmpliada.src = '';
    mensagemInicial.style.display = 'block';

    document.getElementById('overlay-gallery').style.display = 'none';
}

function abrirNotifyBox() {
    const card = document.querySelector('.card.active');
    const notifyMessage = card.querySelector('.card-notify').textContent;
    document.getElementById('notifyMessage').textContent = notifyMessage;

    document.getElementById('notifyBox').style.display = 'block';
    document.getElementById('overlay-notify').style.display = 'block';
}

function fecharNotifyBox() {
    document.getElementById('notifyBox').style.display = 'none';
    document.getElementById('overlay-notify').style.display = 'none';
}

window.onscroll = function () {
    var btnScrollTop = document.getElementById("btnScrollTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
    const pointerDiv = document.querySelector('.pointer');

    document.addEventListener("mousemove", function (e) {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;

        const gradient = `radial-gradient(600px at ${x}% ${y}%, rgba(94, 87, 153, 0.15), transparent 80%)`;

        pointerDiv.style.background = gradient;
    });

    const developerTextElement = document.getElementById('developer-text');
    typeEffect(developerTextElement, 100);

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});