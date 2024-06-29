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
