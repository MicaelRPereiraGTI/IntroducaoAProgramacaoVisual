document.addEventListener("DOMContentLoaded", function () {
    const images = {
        "Visão Normal": ["normal-red.svg", "normal-blue.svg", "normal-green.svg", "normal-yellow.svg"],
        "Protanopia": ["protanopia-red.svg", "protanopia-blue.svg", "protanopia-green.svg", "protanopia-yellow.svg"],
        "Deuteranopia": ["deuteranopia-red.svg", "deuteranopia-blue.svg", "deuteranopia-green.svg", "deuteranopia-yellow.svg"],
        "Tritanopia": ["tritanopia-red.svg", "tritanopia-blue.svg", "tritanopia-green.svg", "tritanopia-yellow.svg"]
    };

    const normalButton = document.getElementById("normalButton");
    const protanopiaButton = document.getElementById("protanopiaButton");
    const deuteranopiaButton = document.getElementById("deuteranopiaButton");
    const tritanopiaButton = document.getElementById("tritanopiaButton");

    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    // Função para realizar a transição suave
    function fadeOut(element) {
        element.style.opacity = "0";
        setTimeout(() => {
            element.style.display = "none";
            fadeIn(element);
        }, 200); // Reduzimos o tempo de atraso para um efeito mais rápido
    }

    function fadeIn(element) {
        setTimeout(() => {
            element.style.display = "block";
            element.style.opacity = "1";
        }, 200); // Reduzimos o tempo de atraso para um efeito mais rápido
    }

    function changeView(view) {
        fadeOut(left);
        fadeOut(right);

        // Defina um atraso para garantir que a transição de desaparecimento seja concluída antes da exibição do novo conteúdo
        setTimeout(() => {
            left.innerHTML = `<h1>${view}</h1><div class="image-container">${images[view].map(image => `<img src="${image}" alt="${image}">`).join("")}</div>`;
            
            // Aqui, você pode definir o texto específico para cada tipo de daltonismo
            let description = "";
            if (view === "Protanopia") {
                description = "Nesse caso também há a dificuldade em distinguir o vermelho do verde, mas o portador não enxerga a cor vermelha.";
            } else if (view === "Deuteranopia") {
                description = "O portador desse tipo de daltonismo tem dificuldade de distinguir a cor verde, e existe uma confusão entre o vermelho e o verde.";
            } else if (view === "Tritanopia") {
                description = "Indivíduos com essa condição não conseguem distinguir entre o azul e o amarelo, mas essa é a forma mais rara do daltonismo cromático.";
            } else {
                description = "<p>Imagina entrar na loja para comprar uma roupa e não conseguir distinguir as cores? Imaginou? Pois saiba que esta é apenas uma das dificuldades diárias da pessoa com daltonismo. <br/><br/><br/>Causa mais é por conta do distúrbio genético ligado ao cromossomo X. Entretanto, o daltonismo também pode ser provocado por danos físicos ou químicos e pela senilidade.<br/><br/><br/>Ser mais frequente na população masculina, e se caracteriza por anomalias nos cones, células especiais da retina, responsáveis por absorver as cores..</p>";
            }
            right.innerHTML = `<h2>${view}</h2><p>${description}</p>`;
            
            fadeIn(left);
            fadeIn(right);
        }, 200); // Reduzimos o tempo de atraso para um efeito mais rápido
    }

    normalButton.addEventListener("click", () => changeView("Visão Normal"));
    protanopiaButton.addEventListener("click", () => changeView("Protanopia"));
    deuteranopiaButton.addEventListener("click", () => changeView("Deuteranopia"));
    tritanopiaButton.addEventListener("click", () => changeView("Tritanopia"));

    // Inicialmente, carregue o conteúdo normal
    changeView("Visão Normal");
});
