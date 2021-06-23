new Vue({
    el: '#desafio',
    data: {
        valor: '',
        enterValor: '',
        withEnter: ''
    },
    methods: {
        showAlert() {
            alert('EXIBINDO ALERTA')
        },
        getText(e) {           
        },
        afterEnter() {
            if enterValor != null
                enterValor = withEnter
            
        }
    },
})