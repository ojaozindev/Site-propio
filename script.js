// Obtenha o botão
const backToTopBtn = document.getElementById("backToTopBtn");

// Quando o usuário rolar 20px para baixo a partir do topo do documento, mostre o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Quando o usuário clicar no botão, rolar para o topo do documento
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
};


/*                                */


const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const closeBtn = document.getElementById('closeBtn');

hamburgerBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    mobileNav.classList.remove('active');
});


// Fechar o menu hamburguer ao clicar em um link dentro dele
const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.classList.remove('active');
    });
});



function mostrarMais() {
    const hiddenProjects = document.querySelectorAll('.project-item.hidden');

    hiddenProjects.forEach(item => {
        item.classList.remove('hidden');
    });

    // Oculta o botão "Ver Mais" após mostrar todos os projetos
    document.querySelector('.ver-mais-container').classList.add('hidden');
}
