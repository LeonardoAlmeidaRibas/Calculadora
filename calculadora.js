const prompt = require("prompt-sync")({ sigint: true });

function validarNumero(input) {
    const numero = parseFloat(input);
    return !isNaN(numero) && isFinite(numero);
}

function calcular(num1, num2, operacao) {
    switch(operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                console.log("Divisão por zero não é permitida.");
            }
            return num1 / num2;
        case '%':
            if (num2 === 0) {
                console.log("Divisão por zero não é permitida.");
            }
            return (num1 / 100) * num2;
        default:
            console.log("Operação inválida.");
    }
}
    const inputNum1 = prompt("Digite o primeiro número:");
    const inputNum2 = prompt("Digite o segundo número:");

    if (!validarNumero(inputNum1) || !validarNumero(inputNum2)) {
        console.log("Entrada inválida. Por favor, digite números válidos.");
    }

    const num1 = parseFloat(inputNum1);
    const num2 = parseFloat(inputNum2);

    const operacao = prompt("Digite a operação desejada (+, -, *, /, %):");

    const resultado = calcular(num1, num2, operacao);

    console.log(`O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);


