import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";
import createStore from "@/createStore";
import {Store} from "vuex";

Vue.config.productionTip = false

export function createApp(): {app: Vue, store: Store<any>, router: VueRouter}{
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return {
    app,
    store,
    router,
  }
}
