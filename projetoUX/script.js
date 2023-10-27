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

    normalButton.addEventListener("click", () => changeView("Visão Normal"));
    protanopiaButton.addEventListener("click", () => changeView("Protanopia"));
    deuteranopiaButton.addEventListener("click", () => changeView("Deuteranopia"));
    tritanopiaButton.addEventListener("click", () => changeView("Tritanopia"));

    function changeView(view) {
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");

        left.innerHTML = `<h1>${view}</h1><div class="image-container">${images[view].map(image => `<img src="${image}" alt="${image}">`).join("")}</div>`;
        right.innerHTML = `<h2>${view}</h2><p>Descrição da ${view}</p>`;
    }
});
