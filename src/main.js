import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/styles.scss';

createApp(App).use(store).use(router).mount('#app')
