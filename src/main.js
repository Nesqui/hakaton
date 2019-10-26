import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from './firebase/';
import Toasted from 'vue-toasted';
// you can also pass options, check options reference below
Vue.use(Toasted, {
    theme: "toasted-primary",
    position: "bottom-center",
    duration: 2000
})

Vue.use(firebase)

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')