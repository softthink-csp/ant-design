import Vue from "vue";
import App from "./App.vue";
import {button} from 'ant-design-vue'
import router from "./router";
import store from "./store";
//import 'ant-design-vue/dist/antd.less'
// import 'ant-design-vue/lib/button/style'
// import button from 'ant-design-vue/lib/button'

Vue.config.productionTip = false;
Vue.use(button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
