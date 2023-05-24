import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from '@/router/index';
import Print from 'vue-print-nb'
// import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import { axiosinstaller } from '@/request/request';
import ElFormRenderer from '@femessage/el-form-renderer'
import ElDataTable from '@femessage/el-data-table'
import config from './util/config'
import {MessageBox} from 'element-ui'
import './styles/element-variables.scss'
import VueClipBoard from 'vue-clipboard2'
import FBSignInButton from 'vue-facebook-signin-button'
import Cookies from "js-cookie";
// import vGoogleTranslate from "v-google-translate";
import i18n from '../public/languages/i18n'
import store from './store';

// Vue.use(vGoogleTranslate);

// Vue.use(VueI18n)
// Vue.config.lang = 'en'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)
Vue.prototype.$cookies = Cookies;
Vue.use(FBSignInButton)
Vue.use(VueClipBoard)
Vue.prototype.$confirmel = MessageBox.confirm;
Vue.use(config);
Vue.use(axiosinstaller);
Vue.prototype.$axios = axios;
Vue.use(Element, { locale })
Vue.use(Antd);
Vue.use(Print);
Vue.component('el-form-renderer', ElFormRenderer)
Vue.component('el-data-table', ElDataTable)
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
  // el: '#app',
  created() {
    // this.checkLogin();
    // if (window.location.href.indexOf("login")>-1){
    //   this.$router.push({ path: "login" });
    // } else {
    //   this.$router.push({ path: "/backhome" });
    // }
    if (window.location.href.indexOf("?usercode=")>-1){
      let usercode=this.$route.query.usercode;
      if (usercode){
        this.$cookies.set("usercode",usercode)
      }
    }
    this.$router.push({ path: "/backhome" });
  },
  methods: {
    checkLogin: function () {
      window.console.log("---------main")
      let deadline = this.$cookies.get('deadline');
      let userInfo = this.$cookies.get("userInfo");
      let token = this.$cookies.get('token');
      let now = new Date().getTime();
      if(!deadline||!userInfo||!token) {
        this.$router.push({ path: "login" });
      }else{
        if (deadline<now){
          this.$router.push({ path: "login" });
        } else {
          this.$router.push({ path: "/backhome" });
        }
      }
    }
  }
}).$mount('#app')
