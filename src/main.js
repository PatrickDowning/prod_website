import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {Amplify, Auth} from "aws-amplify"
import awsConfig from "@aws-amplify/ui-vue"
import "@aws-amplify/ui-vue/styles.css"

Auth.configure(awsConfig);

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
