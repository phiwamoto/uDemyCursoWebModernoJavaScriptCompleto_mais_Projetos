// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar uma função de forma literal
function fun1() { }


// Armazenar uma função em uma variável
const fun2 = function () { }

// Armazenar uma função dentro de um array
const array = [function (a, b) { return a + b } , fun1, fun2 ]
console.log(array[0](2, 3))

// Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar uma função como parametro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// Retornar uma função por retorno - Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)


run(function() { console.log('Executando...') })