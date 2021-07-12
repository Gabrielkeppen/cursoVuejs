new Vue ({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        warrior: "",
        wizard: "",
        plus: 0,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        },
        
        selectWarrior() {
            return this.warrior != ""
        },

        selectWizard() {
            return this.wizard != ""
        },
    },
    methods: {
        getWarrior() {
            this.warrior = "selected"
            return this.warrior
        },

        getWizard() {
            this.wizard = "selected"
            return this.wizard
        },

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min 
            return Math.round(value)
        },

        hurt(min, max, plus) {
            const hurt = this.getRandom(min + plus, max + plus)
            this.monsterLife = Math.max(this.monsterLife - hurt, 0)
        },

        setPlus() {
            
        }
    },
    watch: {

    }
})