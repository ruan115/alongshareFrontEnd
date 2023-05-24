import API from './API'
import { axios } from '@/request/request.js'

export function codelogin(data) {
    return axios.post(`${API.codelogin}`,data)
}
export function login(data) {
    return axios.post(`${API.login}`,data)
}
export function getIpCountry() {
    return axios.get(`${API.getIpCountry}`)
}

export function checkToken(data) {
    return axios.post(`${API.checkToken}`,data)
}
export function logoutToken() {
    return axios.get(`${API.logoutToken}`)
}
export function googlelogin(data) {
    return axios.post(`${API.googlelogin}`,data)
}
export function facebooklogin(data) {
    return axios.post(`${API.facebooklogin}`,data)
}


//用户表
export function updateUserById(data) {
    return axios.put(`${API.updateUserById}`,data)
}
export function getUserByid(data) {
    return axios.get(`${API.getUserById}?id=`+data)
}
export function getUserIntegral() {
    return axios.get(`${API.getUserIntegral}`)
}

export function getLoginCode(data) {
    return axios.get(`${API.getLoginCode}?email=`+data)
}
export function getRegisterCode(data) {
    return axios.get(`${API.getRegisterCode}?email=`+data)
}
export function register(data) {
    return axios.post(`${API.register}`,data)
}
export function getResetPwdCode(data) {
    return axios.get(`${API.getResetPwdCode}?email=`+data)
}
export function updatePwd(data) {
    return axios.put(`${API.updatePwd}`,data)
}


export function downFile(url,parameter){
    console.log(parameter)
    return axios({
        url: url,
        params: parameter,
        method:'get' ,
        responseType: 'blob'
    })
}

export function uploadFile(data) {
    return axios.post(`${API.uploadFile}`,data)
}
export function toluckdraw(data) {
    return axios.get(`${API.luckdraw}?position=`+data)
}
export function insertMessage(data) {
    return axios.post(`${API.insertMessage}`,data)
}
export function getMessageByUserid(data) {
    return axios.get(`${API.getMessageByUserid}?userid=`+data)
}
export function getUserexcodeByUserid(data) {
    return axios.get(`${API.getUserexcodeByUserid}?remark=`+data)
}
export function exchange(data) {
    return axios.post(`${API.exchange}`,data)
}
export function marketexchange(data) {
    return axios.post(`${API.marketexchange}`,data)
}

export function getHelptypeAll() {
    return axios.get(`${API.getHelptypeAll}`)
}
export function getHelpdetailByid(id) {
    return axios.get(`${API.getHelpdetailList}?id=`+id)
}
export function getWordertypeAll() {
    return axios.get(`${API.getWordertypeAll}`)
}
export function insertWorkorder(data) {
    return axios.post(`${API.insertWorkorder}`,data)
}
export function updateWorkorder(data) {
    return axios.put(`${API.updateWorkorder}`,data)
}
export function getTicketListByUserId() {
    return axios.get(`${API.getTicketListByUserId}`)
}
export function carinforesetpwd(data) {
    return axios.post(`${API.carinforesetpwd}`,data)
}
export function carinforeminder(data) {
    return axios.post(`${API.carinforeminder}?carid=`+data)
}

export function getGoodsspuAll() {
    return axios.get(`${API.getGoodsspuAll}`)
}
export function getGoodsspuById(data) {
    return axios.get(`${API.getGoodsspuById}?id=`+data)
}
export function orderSubmit(data) {
    return axios.post(`${API.orderSubmit}`,data)
}
export function orderRenew(data) {
    return axios.post(`${API.orderRenew}`,data)
}

export function calprice(data) {
    return axios.post(`${API.calprice}`,data)
}
export function userAllTicket(data) {
    return axios.get(`${API.userAllTicket}?userid=`+data)
}
export function getCountryinfoAll() {
    return axios.get(`${API.getCountryinfoAll}`)
}
export function getProvinceAll(data) {
    return axios.get(`${API.getProvinceAll}?code=`+data+"-")
}
export function insertWithdrawal(data) {
    return axios.post(`${API.insertWithdrawal}`,data)
}
export function getPayAddressByUserId(data) {
    return axios.get(`${API.getPayAddressByUserId}?userid=`+data)
}
export function paytypeall() {
    return axios.get(`${API.paytypeall}`)
}
