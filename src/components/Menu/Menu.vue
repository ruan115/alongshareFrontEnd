<template>
  <a-menu
    :defaultSelectedKeys="[selectedIndex]"
    v-model="selectedMenu"
    theme="dark"
    mode="inline"
    :inlineCollapsed="collapsed"
    @click="handleClick"
  >
    <a-menu-item v-for="menuItem of menuListWithAuth" :key="menuItem.path">
      <img :src="'https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/'+menuItem.type" style="height: 25px;width: 25px;margin: 10px">
      <span class="menu__item">{{menuItem.title}}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
  import {getUserInfo} from "@/util/util"
  import store from '@/store/index';
export default {
    inject: ['reload'],
    name:'Sidemenu',
    props:{
        menuIndex: {
            type: Number,
            default: 0
        },
        selectedIndex :{
            type: String,
            default: 'home'
        },
        selectedKeys:{
          type: String,
          default: 'home'
        },
        collapsed: {
          type: Boolean,
          default: true
        }
    },
    watch: {
      selectedKeys(value) {
        if(value) {
          this.selectedMenu = value;
        }
      },
    },
    data() {
        return {
            login:false,
            selectedMenu:["home"]
            // menu:[]
        }
    },
    methods: {
      handleClick({ key}) {
        this.reload();
        this.$router.push(key);
      },
      updateSelectedMenu(){
        this.selectedMenu=["login"]
      }
    },
    computed: {
      menuListWithAuth() {
        if(!store.state.map.menuList) return [];
        if (!this.login){
          this.updateSelectedMenu()
        }
        return store.state.map.menuList.filter( item => item.auth)
      }
    },
    mounted(){
      this.$router.push('home');
    },
    created() {
      let userInfo=getUserInfo()
      if (userInfo){
        this.login=true
      }
    }
};
</script>

<style lang="less" scoped>
    .menu__item{
      font-size: 16px;
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #1A1A1A;
    }
    .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
      background-image: linear-gradient(to right ,#3AAF75 ,#203C2E)
    }
    .ant-menu-item-selected{
      /*background-image: linear-gradient(to right, rgba(67, 217, 142, 1) 0, rgba(67, 217, 142, 0) 94.270831% ) !important;*/
      background-image: linear-gradient(to right ,#3AAF75 ,#203C2E)
    }
</style>
