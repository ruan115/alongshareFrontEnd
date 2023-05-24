const api = {
    // 登录相关
    login:"login",
    getIpCountry:"ipcountry",
    codelogin:"codelogin",
    checkToken:"checkToken",
    logoutToken:"logoutToken",
    googlelogin:"google/login",
    facebooklogin:"facebook/login",

    //用户
    updateUserById:"user/updateUserById",
    getLoginCode:"user/getLoginCode",
    getUserById:"user/getUserById",
    getUserIntegral:"user/getUserIntegral",
    getRegisterCode:"user/getRegisterCode",
    register:"user/register",
    getResetPwdCode:"user/getResetPwdCode",
    updatePwd:"user/updatePwd",

    uploadFile:"file/upload",

    //抽奖
    luckdraw:"prizepool/luckdraw",

    //许愿
    insertMessage:"message/insert",
    getMessageByUserid:"message/list",

    //获取抽奖兑换码
    getUserexcodeByUserid:"userexcode/getByUserId",

    //兑换兑换码
    exchange:"userexcode/exchange",
    marketexchange:"userexcode/marketexchange",

    //帮助
    getHelptypeAll:"helptype/all",
    getHelpdetailList:"helpdetail/list",

    //工单类型
    getWordertypeAll:"wordertype/all",
    insertWorkorder:"workorder/insert",
    updateWorkorder:"workorder/update",

    //车票
    getTicketListByUserId:"ticket/getListByUserId",
    carinforesetpwd:"carinfo/resetpwd",
    carinforeminder:"carinfo/reminder",


    //商品
    getGoodsspuAll:"goodsspu/all",
    getGoodsspuById:"goodsspu/getById",
    //计算价格
    calprice:"goodssku/calprice",

    //订单提交
    orderSubmit:"orderinfo/submit",

    //续费
    orderRenew:"orderinfo/renew",

    //车票
    userAllTicket:"ticket/userall",
    //国家信息
    getCountryinfoAll:"countryinfo/all",
    //省份信息
    getProvinceAll:"province/all",
    //提现
    insertWithdrawal:"withdrawal/insert",

    //获取支付地址
    getPayAddressByUserId:"payaddress/getByUserId",

    //查询所有支付方式
    paytypeall:"paytype/all"

}

export default api;
