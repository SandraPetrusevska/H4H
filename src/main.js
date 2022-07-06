import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

/*
const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
}); */
