import {Message, Loading} from 'element-ui'
import router from '@/router/index';
import Cookies from "js-cookie";
import store from '@/store/index';

export function MessageSuccess(val) {
  Message({
    message: val,
    type: 'success',
    center: true,
    showClose: true,
  })
}
export function MessageError(val) {
  Message({
    message: val,
    type: 'error',
    center: true,
    showClose: true,
  })
}

export function MessageWarning(val) {
  Message({
    message: val,
    type: 'warning',
    center: true,
    showClose: true,
  })
}

export function MessageInfo(val) {
  Message({
    message: val,
    type: 'info',
    center: true,
    showClose: true,
  })
}

export function OpenLoading() {
  let loadingInstance = Loading.service({
    lock: true,
    // text: '正在加载...',
    text: 'loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loadingInstance.close()
  }, 2000)
  return loadingInstance
}

export function startLoading() {
  let loadingInstance = Loading.service({
    lock: true,
    // text: '正在加载...',
    text: 'loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loadingInstance.close()
  }, 10000)
  return loadingInstance
}


export function aminuteLoading() {
  let loadingInstance = Loading.service({
    lock: true,
    // text: '正在加载...',
    text: 'loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loadingInstance.close()
  }, 60000)
  return loadingInstance
}


export function getUserInfo() {
  startLoading().close()
  let deadline = Cookies.get('deadline');
  let userInfo = Cookies.get("userInfo");
  let token = Cookies.get('token');
  if(!deadline||!userInfo||!token) {
    removeInfo()
    router.push('login');
  }else{
    let now = new Date().getTime();
    if (deadline<now){
      removeInfo()
      router.push('login');
    }
  }
  return userInfo;

}
export function removeInfo() {
  Cookies.remove("userInfo");
  Cookies.remove("deadline");
  Cookies.remove("token");
  if (localStorage.lang=='kr'){
    store.commit('setMenuListData', store.state.map.menuListLogin)
  }else {
    store.commit('setMenuListData', store.state.map.menuListLoginEn)
  }
  return null
}
