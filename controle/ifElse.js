const imprimeResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Repovado!')
    }
}

imprimeResultado(10)
imprimeResultado(4)
imprimeResultado('Epa!')  // Cuidado!!! Fracamente Tipada >> Mosta como reprovado!