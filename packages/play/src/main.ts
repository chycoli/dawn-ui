import { createApp } from 'vue'
import DawnUI from 'dawn-ui'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(DawnUI).mount('#app')