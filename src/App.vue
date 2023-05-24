<template>
  <!--  <a-config-provider :locale="locale">-->
  <div id="app" style="height: 100%">
    <router-view v-if="isRouterAlive" />
  </div>
  <!--  </a-config-provider>-->
</template>

<script>
import store from '@/store/index';
import { getIpCountry } from "@/request/requests";
import { MessageError } from "@/util/util"
import Bus from "@/util/Bus";
import { gapi } from "gapi-script";
gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: "398083746235-90dd311t5aem2j1rjhes07sto6e5no44.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});
import cn from 'element-ui/lib/locale/lang/zh-CN';
import en from 'element-ui/lib/locale/lang/en';
import kr from 'element-ui/lib/locale/lang/ko';
import it from 'element-ui/lib/locale/lang/it';

import moment from 'moment';
import 'moment/locale/ka';
moment.locale('kr');

export default {
  data() {
    return {
      locale: kr,
      language: "",
      isRouterAlive: true,
    }
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      // 刷新页面
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
    async getIpCountryInfo() {
      let res = await getIpCountry()
      if (res.status == "200") {
        this.language = res.data
        console.log(this.language)
        this.toSetLang()
      } else {
        MessageError(res.msg)
      }
    },
    setMenu() {
      if (localStorage.lang == 'kr') {
        store.commit('setMenuListData', store.state.map.menuListLogin)
      } else if (localStorage.lang == 'en') {
        store.commit('setMenuListData', store.state.map.menuListLoginEn)
      } else if (localStorage.lang == 'it') {
        store.commit('setMenuListData', store.state.map.menuListLoginIt)
      }
    },
    toSetLang() {
      if (this.language.toLowerCase() == 'kr') {
        localStorage.setItem("lang", 'kr')
        this.$i18n.locale = 'kr'
        this.locale = kr
        moment.locale('kr');
      } else if (this.language.toLowerCase() == 'en') {
        localStorage.setItem("lang", 'en')
        this.$i18n.locale = 'en'
        this.locale = en
        moment.locale('en');
      } else if (this.language.toLowerCase() == 'en') {
        localStorage.setItem("lang", 'it')
        this.$i18n.locale = 'it'
        this.locale = it
        moment.locale('it');
      }
      console.log(localStorage.lang)

      this.setMenu()

      // localStorage.lang == undefined ? localStorage.setItem("lang",'kr'):''

      Bus.$on('switchLanguage', (value) => {
        localStorage.lang = value
        let lang = localStorage.lang
        console.log(lang)
        if (lang == 'cn') {
          this.$i18n.locale = 'cn'
          this.locale = cn
          moment.locale('cn');
        }
        if (lang == 'it') {
          this.$i18n.locale = 'it'
          this.locale = it
          moment.locale('it');
        }
        if (lang == 'en') {
          this.$i18n.locale = 'en'
          this.locale = en
          moment.locale('en');
        }
        if (lang == 'kr') {
          this.$i18n.locale = 'kr'
          this.locale = kr
          moment.locale('kr');
        }
        this.setMenu()
      })
    }
  },
  created() {
    this.getIpCountryInfo()
  }
}
</script>

<style lang="css" src="./assets/common.css"></style>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;

  .shop-compare-table {
    .ant-table-fixed-header .ant-table-scroll .ant-table-header {
      margin-bottom: -17px !important;
      padding-bottom: 0px !important;
    }

    .ant-table-tbody>tr>td {
      word-wrap: break-word;
      word-break: break-all;
    }
  }

  .editable-add-btn {
    margin-bottom: 10px;
  }

  .mgr-btm-10 {
    margin-bottom: 10px;
  }

  .hide-clear {
    .ant-select-selection:hover .ant-select-selection__clear {
      opacity: 0;
    }
  }
}</style>
