// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}       // Erro

Object.freeze(pessoa)        // Congelou o OBJETO, nao muda mais o OBJETO

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)