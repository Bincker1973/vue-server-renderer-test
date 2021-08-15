import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";

Vue.config.productionTip = false

export function createApp(): {app: Vue, router: VueRouter}{
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return {
    app,
    router
  }
}
