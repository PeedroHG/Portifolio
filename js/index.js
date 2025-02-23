function mudarImagem() {
    document.getElementById("minha-foto").src = "./img/foto2.png"; 
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    const buffer = 250;

    return (
        rect.top < (window.innerHeight - buffer || document.documentElement.clientHeight - buffer) &&
        rect.bottom > buffer &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.efeito');

    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);