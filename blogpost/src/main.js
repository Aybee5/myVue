import Vue from 'vue'
import App from './App.vue'
import VueResoure from 'vue-resource'

Vue.use(VueResoure)
    //custom directive
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString.slice(2, 8)
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')