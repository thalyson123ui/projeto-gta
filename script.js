// ==========================================================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================================================
const elementoNome = document.querySelector(".nome-destaque");
const elementoImagemPersonagem = document.querySelector(".personagem-img");
const botoesAvatar = document.querySelectorAll(".btn-avatar");

// ==========================================================================
// CONFIGURAÇÃO DOS PERSONAGENS (PALETA ROCKSTAR VICE CITY)
// ==========================================================================
const personagens = [
    {
        nome: "LUCIA",
        imagem: "img/lucia.png",
        corGlow: "#ff007a" // Rosa Neon
    },
    {
        nome: "JASON",
        imagem: "img/jason.png",
        corGlow: "#00f0ff" // Ciano Neon
    },
    {
        nome: "CJ",
        imagem: "img/cj.png",
        corGlow: "#ffbe00" // Amarelo Sunset
    }
];

// Transição suave para a troca de imagem
elementoImagemPersonagem.style.transition = "opacity 0.25s ease, transform 0.25s ease";

// ==========================================================================
// FUNÇÃO DE TROCA DE PERSONAGEM
// ==========================================================================
function trocarPersonagem(personagemDados, botaoSelecionado) {
    // 1. Efeito de fade-out
    elementoImagemPersonagem.style.opacity = "0";
    elementoImagemPersonagem.style.transform = "scale(0.96)";

    setTimeout(() => {
        // 2. Atualiza textos e imagem
        elementoNome.textContent = personagemDados.nome;
        elementoImagemPersonagem.src = personagemDados.imagem;
        elementoImagemPersonagem.alt = `Personagem ${personagemDados.nome}`;

        // 3. Atualiza os efeitos de iluminação em neon
        elementoNome.style.color = personagemDados.corGlow;
        elementoNome.style.textShadow = `
            0 0 30px ${personagemDados.corGlow}cc,
            0 0 60px ${personagemDados.corGlow}66,
            0 0 100px rgba(255, 120, 0, 0.3)
        `;

        // 4. Retorna a imagem com fade-in
        elementoImagemPersonagem.style.opacity = "1";
        elementoImagemPersonagem.style.transform = "scale(1)";
    }, 180);

    // 5. Atualiza o indicador ativo no menu
    botoesAvatar.forEach((btn) => btn.classList.remove("ativo"));
    if (botaoSelecionado) {
        botaoSelecionado.classList.add("ativo");
    }
}

// Escuta cliques nos avatares
botoesAvatar.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        if (personagens[indice]) {
            trocarPersonagem(personagens[indice], botao);
        }
    });
});