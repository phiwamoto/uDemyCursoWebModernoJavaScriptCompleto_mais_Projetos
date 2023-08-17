console.log(soma(3, 4)) // O interpretador JavScript carrega primeiro as funções para depois executar as linhas de codigo, por isso consegue executar
// console.log(sub(3, 4)) // erro, pois tem que ser apos a declaracao
// console.log(mult(3, 4)) // erro, pois tem que ser apos a declaracao

// function declaration > Forma tradicional
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression >>> Uma forma pouca usado, facilita no encontrar problema, pois o nome aparece na stack
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))