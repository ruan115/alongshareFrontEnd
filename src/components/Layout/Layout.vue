<template>
    <!-- <a-layout id="layout">
        <a-layout>
            <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="slider">
                <div class="logo">
                    <img @click="tohome" src="../../assets/logo.png" alt
                        style="width:100px;height: 100px;border-radius: 50px; border: 1px solid #43D98E;cursor: pointer">
                </div>
                <Sidemenu :selected-index="selectedIndex" :selected-keys="selectedKeys" :collapsed="collapsed">
                </Sidemenu>
            </a-layout-sider>
            <a-layout-content :style="{ background: '#000000', minHeight: '280px' }">
                <router-view v-if="isRouterAlive"></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer>
            <Footer></Footer>
        </a-layout-footer>
    </a-layout> -->
    <a-layout id='layout'>
        <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="slider">
            <div class="logo">
                <img @click="tohome" src="../../assets/logo.png" alt
                    style="width:100px;height: 100px;border-radius: 50px; border: 1px solid #43D98E;cursor: pointer">
            </div>
            <Sidemenu :selected-index="selectedIndex" :selected-keys="selectedKeys" :collapsed="collapsed">
            </Sidemenu>
        </a-layout-sider>
        <a-layout class="content-box">
            <a-layout-content :style="{ background: '#000000', minHeight: '280px', flex: 'none' }">
                <router-view v-if="isRouterAlive"></router-view>
            </a-layout-content>
            <a-layout-footer>
                <Footer></Footer>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import Footer from "@/components/page/footer";
import Sidemenu from "@/components/Menu/Menu";
export default {
    name: "Layout",
    components: {
        Footer,
        Sidemenu
    },
    provide() {
        return {
            reload: this.reload
        }
    },
    created() {
        this.checkToken();
    },
    data() {
        return {
            selectedIndex: "home",
            selectedKeys: "home",
            name: "",
            collapsed: false,
            isRouterAlive: true
        };
    },
    watch: {
        '$route.path': function () {
            this.SelectedKeys = [this.$route.path]
        }
    },
    methods: {
        tohome() {
            this.$router.push({ path: "home" });
        },
        initData() {
            let info = this.$cookies.get("userInfo");
            if (info) {
                let { name } = JSON.parse(info);
                this.name = name;
            }
        },
        reload() {
            this.isRouterAlive = false
            this.$nextTick(() => (this.isRouterAlive = true))
        },
        async checkToken() {
            window.console.log("---------layout")
            let now = new Date().getTime();
            let deadline = this.$cookies.get("deadline");
            let token = this.$cookies.get("token");
            let userInfo = this.$cookies.get("userInfo");
            if (!deadline || !token || !userInfo) {
                return this.$router.push({ path: "login" });
            }
            if (deadline < now) {
                return this.$router.push({ path: "login" });
            }
            this.initData();
        }

    }
};
</script>
<style>
html,
body {
    width: 100%;
    height: 100%;
    font-size: 16px;
}

.ant-layout-footer {
    padding: 0 !important;
}

#layout {
    height: 100%;
    min-width: 1280px;
}

#layout .header {
    padding: 0 20px 0 0;
    background: #fff;
    /*box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);*/
}

#layout .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#layout .trigger:hover {
    color: #1890ff;
}

.slider {
    box-shadow: 7px 0px 10px 0px rgb(67 217 142/30%);
}

#layout .logo {
    margin: 40px 0px;
    display: flex;
    justify-content: center;
}

#layout .logo .logo_icon img {
    height: 50px;
}

#layout .logo h1 {
    color: #fff;
    font-size: 20px;
    padding: 8px 0 0 24px;
}

.layout_menu_item {
    line-height: 60px !important;
    height: 60px !important;
}

.content-box {
    justify-content: space-between;
    background: rgb(0, 0, 0);
}
</style>
