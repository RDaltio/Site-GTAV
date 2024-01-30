const botao = document.querySelector(".btn-plataform");

const elementoPlataformas = document.querySelector(".btn-plataform .plataform");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

