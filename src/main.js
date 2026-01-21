import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Clean up any stale service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

createApp(App).use(router).mount('#app')
