import { createApp } from 'vue'
import TestUI from 'dawn-ui'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(TestUI).mount('#app')