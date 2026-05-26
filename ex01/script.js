let nomes = [];
for (let i = 0; i < 7; i++) {
    nomes[i] = prompt("Digite o nome da pessoa:");
}

console.log("Nomes em ordem inversa:");

for (let i = 6; i >= 0; i--) {
    console.log(nomes[i]);
}