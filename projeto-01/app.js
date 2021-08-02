new Vue ({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        furyBar: 0,
        manaBar: 100,
        angryBar: 0,
        warrior: "",
        wizard: "",
        stuned: 0,
        firePlus: 0,
        monsterPlus: 0,
        logs: [],
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

        hurt(min, max, plusMin, plusMax, source, target, cls) {
            const hurt = this.getRandom(min + plusMin, max + plusMax)
            this.monsterLife = Math.max(this.monsterLife - hurt, 0)
            if(hurt != undefined) {
                this.registerLog(`${source} atingiu ${target} com ${hurt}.`)
            }
        },

        getHurt(min, max, plusMax, plusMin, source, target, hurt) {
            const hurt = this.getRandom(min + plusMin, max + plusMax)
            this.playerLife = Math.max(this.playerLife - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`)
        },


        // ataques
        warriorAttack() {
            this.hurt(5, 12, 0, 0, 'Jogador', 'Monstro', 'player')
            this.stuned = 0
            if (this.furyBar < 100) {
                this.furyBar = this.furyBar + 20
                if (this.furyBar > 100) {
                    this.furyBar = 100
                }
            }
        },

        warriorKick() {
            this.hurt(4, 8, 0, 0, 'Jogador', 'Monstro', 'player')
            this.stuned = 1 
            this.angryBar = this.angryBar + 0,4
            this.monsterPlus = this.monsterPlus + 0,4
            if (this.furyBar < 100) {
                this.furyBar = this.furyBar + 10
                if (this.furyBar > 100) {
                    this.furyBar = 100
                }
            }
        },

        warriorFury() {
            this.hurt(12, 30, 0, 0, 'Jogador', 'Monstro', 'player')
            this.stuned = 0
            this.furyBar = 0
        },

        wizardFire() {
            this.hurt(1, 10, this.firePlus, this.firePlus, 'Jogador', 'Monstro', 'player')
            this.manaBar = this.manaBar - 10
            if (this.firePlus < 21) {
                this.firePlus = this.firePlus + 3
            }
        },

        wizardMana() {
            this.manaBar = 100
        },

        wizardHeal() {
            this.manaBar = this.manaBar - 50
            if (this.playerLife <= 70) {
                this.playerLife = this.playerLife + 30
            } else {
                this.playerLife = 100
            }
        },

        monsterAttack() {
            if (this.monsterLife != 0) {
                if (this.stuned == 0) {
                    this.getHurt(5, 10, this.monsterPlus, this.monsterPlus, 'Monstro', 'Jogador', 'player')
                }
            }
        },

        setAnger() {
            if (this.angryBar <= 100) {
                this.angryBar = this.angryBar + 2
                this.monsterPlus = this.monsterPlus + 2
            } else {
                this.angryBar = 100
                this.monsterPlus = 100
            }
            if (this.monsterLife <= 8) {
                this.playerLife = 0
            }
        },

        //logs
        registerLog(text, cls) {
            this.log.unshift({ text, cls })
        }
    },
    watch: {

    }
})