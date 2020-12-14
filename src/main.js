/**
 * 项目的启动入口
 */
import Vue from 'vue'   //加载vue
import App from './App.vue'  //加载根组件
import router from './router' //加载路由

Vue.config.productionTip = false

/**
 * 创建vue 根实例
 * 把router配置到根实例中
 * 通过render方法，把app根组件渲染到#app入口节点【index.html】
 */
new Vue({
  router,
  render: h => h(App)
  //el:"#app"  等价于 $mount('#app')
}).$mount('#app')
