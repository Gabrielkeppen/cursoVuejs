new Vue ({

    el: '#desafio',
    data: {
        nome: 'Gabriel',
        idade: 20,
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2skuhm0vrry40.cloudfront.net%2F2021%2Farticles%2F2021-02-08-09-16%2Fdemon-slayer-kimetsu-no-yaiba-hinokami-keppuutan-recebe-as-primeiras-imagens-1612775792399.jpg%2FEG11%2Fresize%2F1200x-1%2Fdemon-slayer-kimetsu-no-yaiba-hinokami-keppuutan-recebe-as-primeiras-imagens-1612775792399.jpg&imgrefurl=https%3A%2F%2Fwww.eurogamer.pt%2Farticles%2F2021-02-08-demon-slayer-kimetsu-no-yaiba-hinokami-keppuutan-recebe-as-primeiras-imagens&tbnid=MhPVXXzBY2X56M&vet=12ahUKEwihpffX6KvxAhVos5UCHZ1kBXgQMygIegUIARDNAQ..i&docid=lMPZ5ays6pMKGM&w=1200&h=673&q=demon%20slayer&ved=2ahUKEwihpffX6KvxAhVos5UCHZ1kBXgQMygIegUIARDNAQ'
    },

    methods: {
        idadeMultiplicada: function(multiplicacao){
            multiplicacao = this.idade * multiplicacao
            return multiplicacao
        },
        numeroRandomico: function getRandom() {
            return Math.random()
        },
        getName(event){
            this.nome = event.target.value
        }
    }

})