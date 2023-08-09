// novo recurso do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa  // Atribuindo em uma variavel
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa  // Aqui definido um valor defaul para "bemHumorada"
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: {ag, num} } = pessoa    // Aqui da erro, pois nao existe dentro da estrutura a conta
// console.log(ag, num)  