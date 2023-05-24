<template>
  <div class="exception">
    <div class="exception__img">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt>
    </div>
    <div class="exception__content">
      <h1 class="exception__number">404</h1>
      <h2>抱歉，你访问的页面不存在</h2>
      <router-link :to="{name:'login'}">
        <a-button type="primary">返回</a-button>
      </router-link>
    </div>
  </div>
</template>
<style>
.exception {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0;
}
h1 {
  font-size: 72px;
  color: #434e59;
  margin-bottom: 30px;
}
h2 {
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
}
.exception {
  display: flex;
}
.exception__img img {
  padding-right: 152px;
  height: 300px;
}
</style>
