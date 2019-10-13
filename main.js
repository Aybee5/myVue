new Vue({
    el: '#app',
    data: {
        name: 'Ibrahim',
        twitter: 'https://twitter.com/_Aybee5',
        counter: 0
    },
    methods: {
        sayHello() {
            console.log("Hello Vue");
        },
        Clicked() {
            console.log(`You clicked me ${this.counter++} times`)
        },
        sayBye() {
            return `Hey ${this.name} see you next time`;
        }
    }

});