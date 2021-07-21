new Vue ({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        furyBar: 0,
        manaBar: 100,
        warrior: "",
        wizard: "",
        stuned: 0,
        firePlus: 0,
        monsterPlus: 0,
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

        hurt(min, max, plusMin, plusMax) {
            const hurt = this.getRandom(min + plusMin, max + plusMax)
            this.monsterLife = Math.max(this.monsterLife - hurt, 0)
        },

        getHurt(min, max, plusMax, plusMin) {
            const hurt = this.getRandom(min + plusMin, max + plusMax)
            this.playerLife = Math.max(this.playerLife - hurt, 0)
        },


        // ataques
        warriorAttack() {
            this.hurt(5, 12, 0, 0)
            this.stuned = 0
            if (this.furyBar < 100) {
                this.furyBar = this.furyBar + 20
                if (this.furyBar > 100) {
                    this.furyBar = 100
                }
            }
        },

        warriorKick() {
            this.hurt(4, 8, 0, 0)
            this.stuned = 1 
            if (this.furyBar < 100) {
                this.furyBar = this.furyBar + 10
                if (this.furyBar > 100) {
                    this.furyBar = 100
                }
            }
        },

        warriorFury() {
            this.hurt(12, 30, 0, 0)
            this.stuned = 0
            this.furyBar = 0
        },

        wizardFire() {
            this.hurt(1, 10, this.firePlus, this.firePlus)
            this.manaBar = this.manaBar - 10
            if (this.firePlus < 14) {
                this.firePlus = this.firePlus + 2
            } else {
            }
        },

        wizardMana() {
            this.manaBar = 100
        },

        wizardHeal() {
            this.manaBar = this.manaBar - 50
            if (this.playerLife <= 75) {
                this.playerLife = this.playerLife + 25
            } else {
                this.playerLife = 100
            }
        },

        monsterAttack() {
            if (this.stuned == 0) {
                this.getHurt(5, 10, this.monsterPlus, this.monsterPlus)
            } else {

            }
        },

        setMonsterPlus() {

        },
    },
    watch: {

    }
})