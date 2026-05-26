let vetor1 = [];
let vetor2 = [];
let intersecao = [];
let contador = 0;
let repetido;

console.log("VETOR 1");

for (let i = 0; i < 5; i++) {
    vetor1[i] = Number(prompt("Digite um número:"));
    console.log(vetor1[i]);
}

console.log("VETOR 2");

for (let i = 0; i < 5; i++) {
    vetor2[i] = Number(prompt("Digite um número:"));
    console.log(vetor2[i]);
}

for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 5; j++) {

        if (vetor1[i] == vetor2[j]) {

            repetido = false;

            for (let k = 0; k < contador; k++) {

                if (intersecao[k] == vetor1[i]) {
                    repetido = true;
                }

            }

            if (repetido == false) {
                intersecao[contador] = vetor1[i];
                contador++;
            }

        }

    }

}

console.log("Interseção:");

for (let i = 0; i < contador; i++) {
    console.log(intersecao[i]);
}