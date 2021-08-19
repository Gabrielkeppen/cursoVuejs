import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Contador from './components/contador'

Vue.component('contador', Contador)

createApp(App).use(store).use(router).mount('#app')
