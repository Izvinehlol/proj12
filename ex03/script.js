let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite o nome da pessoa:");
    idades[i] = Number(prompt("Digite a idade da pessoa:"));
}

console.log("Pessoas menores de idade:");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(nomes[i] + " - " + idades[i] + " anos");
    }
}