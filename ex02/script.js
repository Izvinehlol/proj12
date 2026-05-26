let numeros = [];
let soma = 0;
let media;

for (let i = 0; i < 8; i++) {
    numeros[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));
    soma = soma + numeros[i];
}

media = soma / 8;

console.log("Média: " + media);
console.log("Valores acima da média:");

for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
} 