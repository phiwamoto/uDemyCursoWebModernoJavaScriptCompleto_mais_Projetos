let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variavel maluna: sem var e let!
abc = 3 // Não faça isso em casa!!!
console.log(global.abc)

// modelu.exports = { e: 456, f: false, g: 'teste' }