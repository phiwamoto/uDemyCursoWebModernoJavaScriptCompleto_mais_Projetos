function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)         // para o bind mudar o SELF pelo THIS e apagar a const self = this
}

new Pessoa