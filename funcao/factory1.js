// Factory simples
function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criaPessoa())


/*
-- Criar objetos manuais dependendo da quantidade vai dar trabalho,
   então podemos usar a funcao factory (fabrica)

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}
*/