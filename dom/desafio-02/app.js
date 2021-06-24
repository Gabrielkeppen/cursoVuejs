new Vue({
    el: '#desafio',
    data: {
        valor: '',
        enterValor: ''
    },
    methods: {
        showAlert() {
            alert('EXIBINDO ALERTA')
        },
        getText(e) {           
        },
        afterEnter(event) {
            enterValor = event.target.value
            
        }
    },
})