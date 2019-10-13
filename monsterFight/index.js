new Vue({
    el: '#game',
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameON: true,
        playing: false,
        logs: []
    },
    methods: {
        attacks() {
            var damage = this.calDamage(2, 6)            
            this.myHealth -= damage
            var damage = this.calDamage(3, 9)
            this.monsterHealth -= damage
            this.playing = true
            this.logs.unShift("You Hits the monster by")

        },
        special() {
            var damage = this.calDamage(2, 6)
            this.myHealth -= damage
            var damage = this.calDamage(6, 12)
            this.monsterHealth -= damage
            this.playing = true
        },
        healUp() {
            if (this.myHealth < 97)
                this.myHealth += 4
            this.playing = true
        },
        giveUp() {
            this.myHealth = 10
            this.gameON = false
        },
        start() {
            this.myHealth = 100
            this.monsterHealth = 100
            this.gameON = true
            this.playing = false
        },
        calDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        }
    },
    watch: {
        monsterHealth() {
            if (this.monsterHealth <= 0) {
                this.gameON = !this.gameON;
            }
        },

    }
})