let igual_pressed = 0;

// Acessar todos os botões (exceto C e DEL)
let botao_input = document.querySelectorAll(".botao");

let input = document.getElementById("input");
let igual = document.getElementById("igual");
let limpar = document.getElementById("limpar");
let deletar = document.getElementById("deletar");

window.onload = () => {
    input.value = "";
};


// Usando o "ForEach" para acessar cada classe
botao_input.forEach((botao_class) => {
    botao_class.addEventListener("click", () => {
        if (igual_pressed == 1) {
            input.value = "";
            igual_pressed = 0;
        }

        // Valor no display de cada botão
        input.value += botao_class.value;
    });
});

// Alcançando os resultados

igual.addEventListener("click", () => {
    igual_pressed = 1;
    let inp_val = input.value;
    try{
        // Avaliando as entradas do usuário
        let solucao = eval(inp_val);
        // Verdadeiro para números natuarais e falso para decimais
        if (Number.isInteger(solucao)){
            input.value = solucao;
        } else {
            input.value = solution.toFixed(2);
        }
    }catch (err) {
        // Se o usuário inseriu algo errado
        alert ("Entrada inválida!")
    };
});

// Limpar o Display
limpar.addEventListener("click", () => {
    input.value = "";
});

// Deletar apenas um dígito
deletar.addEventListener("click", () => {
    input.value = input.value.substr (0, input.value.lenght - 1);
});

