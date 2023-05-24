export default {
    install(Vue)
    {
        Vue.prototype.baseUrl = 'http://127.0.0.1:8002';//本地
        // Vue.prototype.baseUrl = 'https://www.alongshare.com/';//线上
        Vue.prototype.getTitle = {
            title:'',
            isBack: true,
            isAdd:  false,
        };
        Vue.prototype.showFootTab = {
            isShow:false,
            active:0,
        }
    }
}
