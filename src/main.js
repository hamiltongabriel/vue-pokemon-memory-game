import Vue from 'vue'
import store from './store'
import { install as Filters } from './support/filters'
import './buefy'
import './registerServiceWorker'
import './assets/scss/app.scss'

Vue.use(Filters)

Vue.config.productionTip = false

const App = () => import(/* webpackChunkName: "app-shell" */ './AppShell.vue')

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
