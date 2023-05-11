// Concatenação
// let nome = prompt("Digite seu nome")
// let corFavorita = prompt("Digite sua cor favorita")
// console.log(`A cor favorita da ` + nome + ` é `+ corFavorita);

// Template String
// let nome = prompt("Digite seu nome")
// let corFavorita = prompt("Digite sua cor favorita")
// console.log(`A cor favorita da ${nome} é ${corFavorita}`)

// Template String com citação
// let nome = prompt("Digite seu nome")
// let corFavorita = prompt("Digite sua cor favorita")
// let citacao = prompt("Digite sua citação")
// console.log(`A cor favorita da ${nome} é ${corFavorita}. Sua citação favorita é \"${citacao}\".`)

// Transformando letras em maiúscula
// let nome = prompt("Digite seu nome")
// let corFavorita = prompt("Digite sua cor favorita")
// let citacao = prompt("Digite sua citação")
// console.log(`A cor favorita da ${nome.toUpperCase()} é ${corFavorita}. 
// Sua citação favorita é \"${citacao}\".`)

// Contando caracteres
// let nome = prompt("Digite seu nome")
// let corFavorita = prompt("Digite sua cor favorita")
// let citacao = prompt("Digite sua citação")
// console.log(`A cor favorita da ${nome} é ${corFavorita}. 
// Sua citação favorita é \"${citacao}\".`)
// console.log(`Nùmero de caracteres do nome: `, nome.length)
// // Localizando caracteres - retorna true or false
// console.log(nome.includes("a"))

let nome = prompt("Qual seu nome? ")
let email = prompt("Qual seu email? ")
const frase = `O email ${email.trim()} foi cadastrado com sucesso. Boas vindas, ${nome}`
const novaFrase = frase.replaceAll("R", "X");
console.log(frase);
console.log("Número de caracteres de seu nome: ", nome.length)
console.log("O email digitado contém o '@'?", email.includes("@"));
console.log("Nessa frase as letras 'R' foram trocadas por 'X'", novaFrase);

