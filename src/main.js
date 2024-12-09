import { createApp } from 'vue'
import './style.css'
 
import {Message} from 'vue-glob-message'
import App from './App.vue'
const app = createApp(App)
app.use(Message)
app.mount('#app')
