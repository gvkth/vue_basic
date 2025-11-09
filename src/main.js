import Vue from 'vue';
import App from './App.vue';
import router from './router'; // nếu không có router, xóa dòng này
// import store from './store'; // nếu có Vuex, bật dòng này

Vue.config.productionTip = false;

var appVue = new Vue({
  router, // xóa nếu bạn không dùng router
  // store, // bật nếu có store
  render: h => h(App)
}).$mount('#app');

console.log(appVue)