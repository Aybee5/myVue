new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        age: 15
    },
    computed: {
        addToA() {
            return this.a + this.age
        },
        addToB() {
            return this.b + this.age
        }
    }

});