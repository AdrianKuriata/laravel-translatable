import {createApp} from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import store from './store/index'
import router from './router'

// Plugins
import vuetify from './plugins/vuetify'
import './plugins/fontawesome'

const app = createApp(App)
app.provide('$eventEmit', ($name, $data) => {
    document.dispatchEvent(new CustomEvent($name, {
        detail: $data
    }))
})
app.provide('$eventListen', ($name, $callback) => {
    document.addEventListener($name, $callback)
})

app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')


