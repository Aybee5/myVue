let var_one = new Vue({
    el: '#app-one',
    data: {
        title: 'I am instance one'
    },
    methods: {
        greeting() {
            return "Hello there, my name is one"
        }
    }
});

var var_two = new Vue({
    el: '#app-two',
    data: {
        title: 'I am instance two'
    },
    methods: {
        greeting() {
            return "Hello there, my name is two"
        }
    }
});