import { router } from './router/index';
import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales/seetupI18n';



async function bootstrap() {
    const app = createApp(App)
    // app.use(router) 必须在 mount 前边，否则路由渲染异常
    app.use(router)
    app.mount('#app')

    await setupI18n(app)
}

bootstrap()
