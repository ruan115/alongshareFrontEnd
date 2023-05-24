<template>
    <div class="section_18 flex-col">
        <div class="group_46 flex-row">
            <div class="food-icon flex-col">
                <img class="image_8" referrerpolicy="no-referrer"
                    src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/logo.png" />
                <!-- <span class="food-icon-text">contact us</span> -->
<!--                <span class="food-icon-text">문의하기</span>-->
                <span class="food-icon-text">{{$t('footer.contactus')}}</span>
                <div class="food-icon-Contact flex-row justify-between">
                    <div class="food-icon-fs flex-col"></div>
                    <div class="food-icon-dy flex-col"></div>
                    <div class="food-icon-twt flex-col"></div>
                    <a href="mailto:delecia@alongshare.com"><div class="food-icon-email flex-col"></div></a>

                </div>
            </div>
            <!-- <div class="section_20 flex-col"></div> -->
            <div class="text-wrapper_29 flex-col">
                <!-- <span class="text_62">Navigation</span> -->
<!--                <span class="text_62">목차</span>-->
                <span class="text_62">{{$t('footer.navigation')}}</span>
                <!-- <router-link to="home" class="text_63">Home</router-link> -->
<!--                <router-link to="home" class="text_63">홈페이지</router-link>-->
                <router-link to="home" class="text_63">{{$t('footer.home')}}</router-link>
                <!-- <router-link to="friends" class="text_64">Friends</router-link> -->
<!--                <router-link to="friends" class="text_64">연맹</router-link>-->
                <router-link to="friends" class="text_64">{{$t('footer.friends')}}</router-link>

                <!-- <router-link to="subscribe" class="text_65">Subscribe</router-link> -->
<!--                <router-link to="subscribe" class="text_65">구독하다</router-link>-->
                <router-link to="subscribe" class="text_65">{{$t('footer.subscribe')}}</router-link>
                <!-- <router-link to="aftersales" class="text_66">AfterSales</router-link> -->
<!--                <router-link to="aftersales" class="text_66">고객센터</router-link>-->
                <router-link to="aftersales" class="text_66">{{$t('footer.aftersales')}}</router-link>

            </div>
            <div class="section_21 flex-col justify-between">
                <!-- <span class="text_68">Help</span> -->
<!--                <span class="text_68">돕다</span>-->
                <span class="text_68">{{$t('footer.help')}}</span>
                <div class="text-group_41 flex-col justify-between">
                    <!-- <router-link to="aftersales" class="text_69">After Sales</router-link> -->
                    <!-- <router-link to="help" class="text_70">Help Center</router-link> -->
                    <!-- <router-link to="helpdetail?id=9" class="text_70">Terms of Use</router-link> -->
<!--                    <router-link to="helpdetail?id=9" class="text_70">이용약관</router-link>-->
                    <router-link to="helpdetail?id=9" class="text_70">{{$t('footer.termsofuse')}}</router-link>

                    <!-- <router-link to="helpdetail?id=10" class="text_70">Refund Policy</router-link> -->
<!--                    <router-link to="helpdetail?id=10" class="text_70">환불 정책</router-link>-->
                    <router-link to="helpdetail?id=10" class="text_70">{{$t('footer.refundpolicy')}}</router-link>

                    <!-- <router-link to="helpdetail?id=11" class="text_70">Privacy Policy</router-link> -->
<!--                    <router-link to="helpdetail?id=11" class="text_70">개인 정보 정책</router-link>-->
                    <router-link to="helpdetail?id=11" class="text_70">{{$t('footer.privacypolicy')}}</router-link>
                </div>
            </div>
             <div class="text-wrapper_30 flex-col">
                 <span class="text_71">{{$t('footer.language')}}</span>
                                <div class="text_72"></div>
<!--                 <div style="font-weight: bolder;color: #C2C2C2"> -->
<!--                     <v-google-translate /> -->
<!--                 </div> -->
                 <a-select @change="handleChange" style="width: 120px;" v-model="language">
                     <a-select-option value="kr"> 한국어 </a-select-option>
<!--                     <a-select-option value="cn"> 中文/简体 </a-select-option>-->
                     <a-select-option value="en"> EngLish </a-select-option>
                     <a-select-option value="it"> italian </a-select-option>

                 </a-select>

<!--                 <span class="text_73">国家</span>-->
<!--                                <span class="text_74">中国</span>-->
             </div>
            <div class="section_22 flex-col">
                <!-- <span class="text_75">Payment method</span> -->
<!--                <span class="text_75">지불 방법</span>-->
                <span class="text_75">{{$t('footer.paymentmethod')}}</span>
                <div class="image-wrapper_1 flex-row justify-between">
                    <img class="label_1" referrerpolicy="no-referrer"
                        src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/visa.png" />
                    <img class="image_9" referrerpolicy="no-referrer"
                        src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/mastercard.png" />
                </div>
                <div class="box_34 flex-row justify-between">
                    <div class="block_11 flex-col"></div>
                    <div class="block_12 flex-col"></div>
                </div>
            </div>
            <div class="section_23 flex-col justify-between">
                <div class="box_35 flex-col align-center">
                    <div class="box_36 flex-col"></div>
                </div>
                <div class="box_37 flex-col"></div>
            </div>
        </div>

        <!--        <div class="text-wrapper_31 flex-row">-->
        <!--            <router-link to="help" class="text_76">帮助中心</router-link>-->
        <!--        </div>-->
        <div class="justify-center" style="font-weight: bolder;color: rgb(62,77,83);font-size: 8px;">
            <p>Copyright &copy; 2023 China Guangxi Nanning Yuanchuang Trading Co., Ltd. </p>
        </div>
        <div class="justify-center" style="font-weight: bolder;color: rgb(62,77,83);font-size: 8px;">
            <p>(Room 705, Residential Building, Building C3, Futingyuan, Pedestrian Street West Road, Binzhou Town, Binyang County)</p>
        </div>
        <div class="justify-center" style="font-weight: bolder;color: rgb(62,77,83);font-size: 8px;">
            <p>E-mail consultation: delecia@alongshare.com</p>
        </div>
    </div>
</template>

<script>
    import Bus from "@/util/Bus";
export default {
    name: "footer1",
    data(){
      return{
          language:"",
      }
    },
    created() {
      this.language=localStorage.lang
    },
    methods:{
        handleChange(value) {
            Bus.$emit('switchLanguage', value)
            this.reload()
        },
    },
    inject: ['reload'],
}
</script>

<style scoped>
.section_18 {
    background-color: rgba(26, 26, 26, 1);
    /* height: 280px;
        width: 100%;
        position: absolute;
        left: 0; */
    overflow: hidden;
}

.food-icon {
    /* width: 133px;
    height: 192px; */
    justify-content: center;
    align-items: center;
}

.food-icon-text {
    /* width: 72px;
    height: 22px; */
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    /* text-align: left; */
    white-space: nowrap;
    line-height: 22px;
    /* margin: -7px 0 0 23px; */
}

.food-icon-Contact {
    /* width: 104px; */
    height: 25px;
    /* margin: 21px 0 0 23px; */
    margin-top: 16px;
}

.food-icon-fs {
    width: 24px;
    height: 24px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/facebook.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-top: 1px;
}

.food-icon-dy {
    width: 24px;
    height: 24px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/douyin.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-left: 16px;
}

.food-icon-twt {
    width: 24px;
    height: 24px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/twitter.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-left: 16px;
}
.food-icon-email {
    width: 24px;
    height: 24px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/email.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-left: 16px;
}

.section_21 {
    width: 64px;
    height: 94px;
    margin: 17px 0 0 110px;
}

.section_22 {
    width: 98px;
    height: 116px;
    margin: 17px 0 0 150px;
}

.section_23 {
    width: 99px;
    height: 75px;
    margin: 57px 0 0 9px;
}

.group_46 {
    /* width: 80%;
        height: 207px;
        margin: 43px 0 0 20%; */
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 40px 0;
}




.image_8 {
    width: 133px;
    height: 131px;
}

.image_9 {
    width: 50px;
    height: 33px;
}



.text_62 {
    width: 36px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
}

.text_63 {
    width: 32px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 21px;
}

.text_64 {
    width: 80px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 13px;
}

.text_65 {
    width: 32px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 13px;
}

.text_66 {
    width: 64px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 13px;
}

.text_67 {
    width: 48px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 13px;
}

.text_68 {
    width: 36px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
}

.text_69 {
    width: 64px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
}

.text_70 {
    width: 64px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 13px;
}

.text_71 {
    width: 36px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
}

.text_72 {
    width: 64px;
    height: 10px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 21px;
}

/*.text_72 {*/
/*    width: 64px;*/
/*    height: 110px;*/
/*    overflow-wrap: break-word;*/
/*    color: rgba(194, 194, 194, 1);*/
/*    font-family: Source Han Sans CN-Normal;*/
/*    text-align: left;*/
/*    white-space: nowrap;*/
/*    line-height: 19px;*/
/*    font-size: 0.8em;*/
/*    z-index: 9999;*/
/*}*/

.text_73 {
    width: 36px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
    margin-top: 21px;
}

.text_74 {
    width: 32px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
    margin-top: 21px;
}

.text_75 {
    width: 72px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: Source Han Sans CN-Medium;
    text-align: left;
    white-space: nowrap;
    line-height: 22px;
    margin-left: 4px;
}

.text_76 {
    width: 64px;
    height: 19px;
    overflow-wrap: break-word;
    color: rgba(194, 194, 194, 1);
    font-size: 16px;
    font-family: Source Han Sans CN-Normal;
    text-align: left;
    white-space: nowrap;
    line-height: 19px;
}

.label_1 {
    width: 42px;
    height: 28px;
    margin-top: 5px;
}


.box_34 {
    width: 86px;
    height: 29px;
    margin: 19px 0 0 7px;
}

.box_35 {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    height: 28px;
    margin-left: 1px;
    width: 98px;
}

.box_36 {
    width: 98px;
    height: 28px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/discover.png) 100% no-repeat;
    background-size: 100% 100%;
}

.box_37 {
    width: 42px;
    height: 28px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/jcb.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-top: 19px;
}

.block_11 {
    width: 28px;
    height: 28px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/americanexpress.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-top: 1px;
}

.block_12 {
    width: 43px;
    height: 28px;
    background: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/vector.png) 100% no-repeat;
    background-size: 100% 100%;
}

.image-wrapper_1 {
    width: 98px;
    height: 33px;
    margin-top: 13px;
}

.text-group_41 {
    width: 64px;
    height: 51px;
    margin-top: 21px;
}

.text-wrapper_29 {
    width: 80px;
    height: 190px;
    margin: 17px 0 0 129px;
}

.text-wrapper_30 {
    width: 64px;
    height: 145px;
    margin: 17px 0 0 80px;
}

.text-wrapper_31 {
    width: 64px;
    height: 19px;
    margin: 13px 0 113px 39.4%;
}
    /deep/ .ant-select-selection{
        background-color: rgb(26,26,26);
        border: 0px;
        color: white;
    }
    /deep/ .ant-select-arrow{
        color: white;
    }
</style>
