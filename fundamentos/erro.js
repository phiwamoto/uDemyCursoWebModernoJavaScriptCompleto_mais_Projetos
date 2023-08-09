function trataErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e)  {
        trataErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto'}         // Chamar assim (para dar erro) >>>>> const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)