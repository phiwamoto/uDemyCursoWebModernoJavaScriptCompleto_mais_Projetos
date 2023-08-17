function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo provado
    let velocidadeAtual = 0

    // metodo publico (Porque está usando o THIS. que deixa publico, para ser privado usar CONST ou LET)
    // const aceletar =    //     let acelerar = 
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico (Porque está usando o THIS. que deixa publico, para ser privado usar CONST ou LET)
    // const getVelocidadeAtual =    //     let getVelocidadeAtual = 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro  // Pode ser new Carro ou new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

