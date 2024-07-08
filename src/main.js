import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/styles.scss';

// Sweet Alert 2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#01da92',
  cancelButtonColor: '#e5e5e5',
};

createApp(App).use(store).use(router).use(VueSweetalert2,options).mount('#app')
