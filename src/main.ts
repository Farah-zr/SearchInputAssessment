import { createApp } from "vue"
import "./assets/styles/index.scss"
import "./style.css"
// @ts-ignore
import App from "./App.vue"
import router from "./router/router"

const app = createApp(App)

app.use(router)

app.mount("#app")
