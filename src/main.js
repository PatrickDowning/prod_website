import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {Amplify, Auth} from "aws-amplify"
import awsconfig from './aws-exports'
import "@aws-amplify/ui-vue/styles.css"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
