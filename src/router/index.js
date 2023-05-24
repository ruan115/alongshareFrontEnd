import Vue from 'vue';
import routeMap from './routeMap';
import VueRouter from 'vue-router';
// import { checkPermission } from '../permission';
// import { checkTokenValid, removeToken } from '@/utils/token'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: routeMap
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

//出现进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export default router;
