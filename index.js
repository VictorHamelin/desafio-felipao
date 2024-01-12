const readline = require('readline-sync');
let nome, experiencia;


while (true) {
    nome = readline.question("Qual o nome do herói? ");
    if (nome.trim() !== '') {
        break;
    } else {
        console.log("Nome invalido, tente novamente. ");
    }
}
while (true) {
    experiencia = readline.question("Quanto de experiência o herói possui? ");
    if (!isNaN(experiencia) && experiencia >= 0) {
        break;
    } else {
        console.log("Quantidade invalida, tente novamente. ");
    }
}
const rank = parseInt(experiencia);


let exp;
if (rank < 1000) {
    exp = "Ferro";
} else if (rank >= 1001 && rank <= 2000) {
    exp = "Bronze";
} else if (rank >= 2001 && rank <= 5000) {
    exp = "Prata";
} else if (rank >= 5001 && rank <= 7000) {
    exp = "Ouro";
} else if (rank >= 7001 && rank <= 8000) {
    exp = "Platina";
} else if (rank >= 8001 && rank <= 9000) {
    exp = "Ascendente";
} else if (rank >= 9001 && rank <= 10000) {
    exp = "Imortal";
} else {
    exp = "Radiante";
}


console.log(`O Herói de nome ${nome} está no nível de ${exp}`);
