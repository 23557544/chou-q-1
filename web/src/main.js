import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Net from 'net';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(ElementUI); 
Vue.use(Net)
console.log(Net)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
