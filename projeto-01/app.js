new Vue ({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        warrior: "",
        wizard: "",

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
        // seleção da classe
        getWarrior() {
            this.warrior = "selected"
            return this.warrior
        },

        getWizard() {
            this.wizard = "selected"
            return this.wizard
        },

        // gerindo numero dos golpes
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min 
            return Math.round(value)
        },

        hurt(min, max, plusMax , plusMin) {
            const hurt = this.getRandom(min + plusMin, max + plusMax)
            this.monsterLife = Math.max(this.monsterLife - hurt, 0)
        },

        // ataques
        warriorAttack() {
            this.hurt(5, 12, 0, 0)
        },

        warriorKick() {
            this.hurt(4, 8, 0, 0)
            //chamar stun
        },

        warriorFury() {
            this.hurt(4, 8, 0, 0)
            //multiplicar por 3
        },

        wizardFire() {
            //dano mais queimação
        },

        wizardMana() {

        },

        wizardHeal() {

        },

        monsterAttack() {

        },

        monsterDefense() {

        },

        monsterCall() {

        },

        calledAttack() {

        },
    },
    watch: {

    }
})