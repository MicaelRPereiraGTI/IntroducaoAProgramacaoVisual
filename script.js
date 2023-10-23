$(document).ready(function () {
    // Função para atualizar as cores das divs com base no tipo de daltonismo selecionado
    function updateColors() {
        const selectedType = $("input[name='color-blindness']:checked").val();
        let color1, color2, color3, color4;

        if (selectedType === "normal") {
            color1 = "#ffaa00"; // Laranja
            color2 = "#00aa00"; // Verde
            color3 = "#00aaff"; // Azul
            color4 = "#ffff00"; // Amarelo
        } else if (selectedType === "protanopia") {
            color1 = "#ff0000"; // Vermelho
            color2 = "#00ff00"; // Verde
            color3 = "#0000ff"; // Azul
            color4 = "#ffff00"; // Amarelo
        } else if (selectedType === "deuteranopia") {
            color1 = "#ffaa00"; // Laranja
            color2 = "#00aa00"; // Verde
            color3 = "#00aaff"; // Azul
            color4 = "#ffff00"; // Amarelo
        } else if (selectedType === "tritanopia") {
            color1 = "#ffaa00"; // Laranja
            color2 = "#00aa00"; // Verde
            color3 = "#00aaff"; // Azul
            color4 = "#aaaaaa"; // Cinza
        }

        $("#color-1").css("background-color", color1);
        $("#color-2").css("background-color", color2);
        $("#color-3").css("background-color", color3);
        $("#color-4").css("background-color", color4);
    }

    // Atualize as cores quando a seleção mudar
    $("input[name='color-blindness']").change(updateColors);

    // Chame a função para definir as cores iniciais com base na seleção atual
    updateColors();
});
