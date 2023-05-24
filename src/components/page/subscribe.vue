<template>
    <div class="justify-center" v-if="userTickets.length>0">
        <div style="display: flex;flex-wrap: wrap;width: 98%;margin-top: 1%;margin-left: 1%;">
            <div style="width: 32%;margin: 0.5%;"  v-for="(item,index) in userTickets" :key="index">
                <div v-if="item.goodsSpu.goodsname.toLowerCase().indexOf('netflix')>-1">
                    <div style="width: 100%;padding-top:1%;background: linear-gradient(223deg, #603084 0%, #603084 0%, #4B9C9D 100%);border-radius: 5px;position: relative">
                        <div class="justify-center" style="width: 100%;height: 150px;margin-top: 6%">
                            <div style="width: 90%;color: white;display: flex;flex-wrap: nowrap;justify-content: space-around;height: 70px;">
                                <span style="font-family: DIN-Bold-;font-weight: bolder">Netflix-<span style="font-family: MingLiU-ExtB;font-weight: normal">ALONGSHAR VIP</span></span>
                                <!-- <el-button style="background-color: #4A9F9C;border: 0;height: 30px;" type="primary" size="small" round @click="getGoodsspuByIdInfo(item.goodsSpu.id)">Renew now</el-button> -->
                                <el-button style="background-color: #4A9F9C;border: 0;height: 30px;" type="primary"
                                           size="small" round @click="getGoodsspuByIdInfo(item.goodsSpu.id)">계속 구매</el-button>
                            </div>
                        </div>
                        <div class="justify-center" style="width: 100%;position: absolute;top: 100px;z-index: 999">
                            <div style="font-size: 12px;color: white;width: 80%;background: linear-gradient(142deg, #5F2F83 0%, #4A9F9C 100%);box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.15);border-radius: 10px 10px 10px 10px;">
                                <div style="margin-top:5%;display: flex;justify-content: space-around;">
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/noreplace.png" width="100%">
                                        <!-- <span class="textdesc">Renew the same subscription without changing</span> -->
                                        <span class="textdesc">같은 제품을 계속 구매</span>

                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/4k.png" width="100%">
                                        <!-- <span class="textdesc">4K+HDR HD, independent viewing record</span> -->
                                        <span class="textdesc">4K+HDR HD, 독립 시청 기록</span>

                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/refundensure.png" width="100%">
                                        <!-- <span class="textdesc">money-back guarantee</span> -->
                                        <span class="textdesc">환불 보증</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;background-color: #F6F6F6;padding-top: 120px;font-size: 12px;">
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Time left</span> -->
                                    <span style="color: black">남은 시간</span>
                                    <!--倒计时  剩余时间-->
                                    <span style="color: red">{{item.ext1}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account opening time</span> -->
                                    <span style="color: black">계좌 개설 시간</span>
                                    <span style="color: #8E8E8E">{{item.startTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">End Time</span> -->
                                    <span style="color: black">종료 시간</span>
                                    <span style="color: #8E8E8E">{{item.endTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account</span> -->
                                    <span style="color: black">계정</span>
                                    <span style="color: #8E8E8E">{{item.loginemail}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%" class="psdinput">
                                        <!-- <span style="color: black">Password</span> -->
                                        <span style="color: black">비밀번호</span>
                                        <span style="color: #8E8E8E">
                                            <el-input type="password" v-model="item.loginpwd" show-password></el-input>
                                        </span>
                                    </div>
                                    <!--                                    <div style="height: 25px;margin-top: 10px;">-->
                                    <!--                                        <el-button class="resetpwd" type="primary" size="small" round @click="resetpwd(item)">reset Password</el-button>-->
                                    <!--                                    </div>-->
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.num==1">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%">
                                        <!-- <span style="color: black">Profile</span> -->
                                        <span style="color: black">소개</span>
                                        <span style="color: #8E8E8E">사용 해주세요 NO.

                                            <span style="background-color: #5E2D82;padding:2px 5px;color: white">{{item.seatno+1}}</span>
                                            <!-- sub account</span> -->
                                            서브 계정</span>

                                    </div>
                                    <div style="height: 30px;margin-top: 10px;">
                                        <el-button style="height: 30px;border: 1px solid #8E8E8E;background-color: #ffffff;color: #8E8E8E" type="primary" size="small" round @click="remind(item)">
                                            <icon-font type="icon-jinggao" style="margin-right: 5px;"/>
                                            <!-- My profile is misused by someone! -->
                                            내 프로필이 누군가에 의해 오용되었습니다！
                                        </el-button>
                                    </div>
                                    <div style="display: flex;justify-content: space-between;width: 100%;margin-top: 20px;">
                                        <el-badge value="1" class="item" v-if="item.carinfo.avatar0">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar0"></el-avatar>
                                        </el-badge>
                                        <el-badge value="1" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-netflix.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-if="item.carinfo.avatar1">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar1"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-netflix.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-if="item.carinfo.avatar2">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar2"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-netflix.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-if="item.carinfo.avatar3">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar3"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-netflix.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-if="item.carinfo.avatar4">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar4"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-netflix.png"></el-avatar>
                                        </el-badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;font-size: 16px;color: white">
                            <div class="justify-center">
                                <div style="width: 80%;display: flex;justify-content: space-around;height: 60px;line-height: 60px;">
                                    <span @click="getGoodsspuByIdInfo(item.goodsSpu.id)" style="cursor: pointer">Renew</span>
                                    <div class="dashed"></div>
                                    <!-- <router-link to="help" style="color: white">Help</router-link> -->
                                    <!-- <router-link to="help" style="color: white">돕다</router-link>
                                    <div class="dashed"></div> -->
                                    <!-- <router-link to="aftersales" style="color: white">After sales</router-link> -->
                                    <router-link to="aftersales" style="color: white">애프터 서비스</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(267deg, #5F3786 0%, #4B9C9D 100%);border-radius: 5px;margin-top: 3%">
                        <div class="justify-center">
                            <div style="color: white;font-size: 12px;width: 80%;margin-top: 3%">
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p> -->
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.일련번호에 따라
                                        본인 서브계정을 이용해주세요.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.다른 하위 계정을
                                        수정/삭제하지 마십시오.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.구독 관련 정보
                                        수정 금지</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">알림 ：어떤 문제가
                                        발생할 경우 즉시 고객 서비스에 연락하여 Along Share에서 서브스크립션을 구매하여 VIP 고객 서비스를 즐기실 수 있으며, 리필 시 번호 변경이
                                        필요 없습니다.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="item.goodsSpu.goodsname.toLowerCase().indexOf('disney')>-1">
                    <div style="width: 100%;padding-top:1%;margin: 0.5%;background: linear-gradient(62deg, #1DAEDB 0%, #040244 100%);;border-radius: 5px;position: relative">
                        <div class="justify-center" style="width: 100%;height: 150px;margin-top: 6%">
                            <div style="width: 90%;color: white;display: flex;flex-wrap: nowrap;justify-content: space-around;height: 70px;">
                                <span style="font-family: DIN-Bold-;font-weight: bolder">Disney-<span style="font-family: MingLiU-ExtB;font-weight: normal">ALONGSHAR VIP</span></span>
                                <!-- <el-button style="background: linear-gradient(316deg, #1893C2 0%, #90DFF8 100%);box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35);border: 0;height: 30px;" type="primary" size="small" round @click="getGoodsspuByIdInfo(item.goodsSpu.id)">renew now</el-button> -->
                                <el-button style="background: linear-gradient(316deg, #1893C2 0%, #90DFF8 100%);box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35);border: 0;height: 30px;" type="primary" size="small" round @click="getGoodsspuByIdInfo(item.goodsSpu.id)">계속
                                    구매</el-button>
                            </div>
                        </div>
                        <div class="justify-center" style="width: 100%;position: absolute;top: 100px;z-index: 999">
                            <div style="font-size: 12px;color: white;width: 80%;background: linear-gradient(145deg, #040244 0%, #1CB1DC 100%);box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.15);border-radius: 10px 10px 10px 10px;">
                                <div style="margin-top:5%;display: flex;justify-content: space-around;">
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/noreplace.png" width="100%">
                                        <!-- <span class="textdesc">Renew the same subscription without changing</span> -->
                                        <span class="textdesc">같은 제품을 계속 구매</span>

                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/4k.png" width="100%">
                                        <!-- <span class="textdesc">4K+HDR HD, independent viewing record</span> -->
                                        <span class="textdesc">4K+HDR HD, 독립 시청 기록</span>

                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/refundensure.png" width="100%">
                                        <!-- <span class="textdesc">money-back guarantee</span> -->
                                        <span class="textdesc">환불 보증</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;background-color: #F6F6F6;padding-top: 120px;font-size: 12px;">
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Time left</span> -->
                                    <span style="color: black">남은 시간</span>
                                    <!--倒计时  剩余时间-->
                                    <span style="color: red">{{item.ext1}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account opening time</span> -->
                                    <span style="color: black">계좌 개설 시간</span>
                                    <span style="color: #8E8E8E">{{item.startTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">End Time</span> -->
                                    <span style="color: black">종료 시간</span>
                                    <span style="color: #8E8E8E">{{item.endTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account</span> -->
                                    <span style="color: black">계정</span>
                                    <span style="color: #8E8E8E">{{item.loginemail}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%" class="psdinput">
                                        <!-- <span style="color: black">Password</span> -->
                                        <span style="color: black">비밀번호</span>
                                        <span style="color: #8E8E8E">
                                            <el-input type="password" v-model="item.loginpwd" show-password></el-input>
                                        </span>
                                    </div>
                                    <!--                                    <div style="height: 25px;margin-top: 10px;">-->
                                    <!--                                        <el-button class="resetpwd" type="primary" size="small" round @click="resetpwd(item)">Reset Password</el-button>-->
                                    <!--                                    </div>-->
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.num==1">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%">
                                        <!-- <span style="color: black">Profile</span> -->
                                        <span style="color: black">소개</span>
                                        <!-- <span style="color: #8E8E8E">please use NO. <span style="background-color: #3C85D5;padding:2px 5px;color: white">{{item.seatno+1}}</span> sub account</span> -->
                                        <span style="color: #8E8E8E">사용 해주세요 NO. <span style="background-color: #3C85D5;padding:2px 5px;color: white">{{item.seatno+1}}</span> 서브 계정</span>

                                    </div>
                                    <div style="height: 30px;margin-top: 10px;">
                                        <el-button style="height: 30px;border: 1px solid #8E8E8E;background-color: #ffffff;color: #8E8E8E" type="primary" size="small" round @click="remind(item)">
                                            <icon-font type="icon-jinggao" style="margin-right: 5px;"/>
                                            <!-- My profile is misused by someone! -->
                                            내 프로필이 누군가에 의해 오용되었습니다！
                                        </el-button>
                                    </div>
                                    <div style="display: flex;justify-content: space-between;width: 100%;margin-top: 20px;">
                                        <el-badge value="1" class="item" v-if="item.carinfo.avatar0">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar0"></el-avatar>
                                        </el-badge>
                                        <el-badge value="1" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-if="item.carinfo.avatar1">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar1"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-if="item.carinfo.avatar2">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar2"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-if="item.carinfo.avatar3">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar3"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-if="item.carinfo.avatar4">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar4"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;font-size: 16px;color: white">
                            <div class="justify-center">
                                <div style="width: 80%;display: flex;justify-content: space-around;height: 60px;line-height: 60px;">
                                    <!-- <span @click="getGoodsspuByIdInfo(item.goodsSpu.id)" style="cursor: pointer">Renew</span> -->
                                    <span @click="getGoodsspuByIdInfo(item.goodsSpu.id)" style="cursor: pointer">재계약</span>
                                    <div class="dashed"></div>
                                    <!-- <router-link to="help" style="color: white">Help</router-link> -->
                                    <!-- <router-link to="help" style="color: white">돕다</router-link> -->

                                    <div class="dashed"></div>
                                    <!-- <router-link to="aftersales" style="color: white">After sales</router-link> -->
                                    <router-link to="aftersales" style="color: white">애프터 서비스</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(144deg, #1CB1DC 0%, #030747 100%);border-radius: 5px;margin-top: 3%">
                        <div class="justify-center">
                            <!-- <div style="color: white;font-size: 12px;width: 80%;margin-top: 3%">
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p>
                            </div> -->
                            <div style="color: white;font-size: 12px;width: 80%;margin-top: 3%">
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.일련번호에 따라
                                        본인 서브계정을 이용해주세요.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.다른 하위 계정을
                                        수정/삭제하지 마십시오.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.구독 관련 정보
                                        수정 금지</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">알림 ：어떤 문제가
                                        발생할 경우 즉시 고객 서비스에 연락하여 Along Share에서 서브스크립션을 구매하여 VIP 고객 서비스를 즐기실 수 있으며, 리필 시 번호 변경이
                                        필요 없습니다.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div style="width: 100%;padding-top:1%;margin: 0.5%;background: #ffffff;border-radius: 5px;">
                        <div class="justify-center" style="width: 100%;height: 50px;margin-top: 6%">
                            <div style="width: 90%;color: white;display: flex;flex-wrap: nowrap;justify-content: space-around;height: 70px;">
                                <span style="font-family: DIN-Bold-;font-weight: bolder;color: black">{{item.carname}}</span>
                                <el-button style="background: linear-gradient(270deg, #43D98E 0%, #B4F4D4 100%);border: 0;height: 30px;" type="primary" size="small" round @click="getGoodsspuByIdInfo(item.goodsSpu.id)">renew now</el-button>
                            </div>
                        </div>
                        <div class="justify-center" style="width: 100%;">
                            <div style="font-size: 12px;color: #8E8E8E;width: 80%;;border-radius: 10px;">
                                <div class="dashed-green"></div>
                                <div style="margin-top:5%;display: flex;justify-content: space-around;">
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/noreplace-green.png" width="100%">
                                        <!-- <span class="textdesc">Renew the same subscription without changing</span> -->
                                        <span class="textdesc">같은 제품을 계속 구매</span>
                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/4k-green.png" width="100%">
                                        <!-- <span class="textdesc">4K+HDR HD, independent viewing record</span> -->
                                        <span class="textdesc">4K+HDR HD, 독립 시청 기록</span>

                                    </div>
                                    <div style="width: 25%;">
                                        <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/refundensure-green.png" width="100%">
                                        <!-- <span class="textdesc">money-back guarantee</span> -->
                                        <span class="textdesc">환불 보증</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;background-color: #F6F6F6;font-size: 12px;">
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Time left</span> -->
                                    <span style="color: black">남은 시간</span>
                                    <!--倒计时  剩余时间-->
                                    <span style="color: red">{{item.ext1}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account opening time</span> -->
                                    <span style="color: black">계좌 개설 시간</span>
                                    <span style="color: #8E8E8E">{{item.startTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">End Time</span> -->
                                    <span style="color: black">종료 시간</span>

                                    <span style="color: #8E8E8E">{{item.endTime}}</span>
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.goodsSpu.goodsname.toLowerCase().indexOf('youtube')==-1">
                                <div style="width: 80%;padding: 10px;margin:5px;display: flex;justify-content: space-between;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <!-- <span style="color: black">Account</span> -->
                                    <span style="color: black">계정</span>

                                    <span style="color: #8E8E8E">{{item.loginemail}}</span>
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.goodsSpu.goodsname.toLowerCase().indexOf('youtube')==-1">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%" class="psdinput">
                                        <!-- <span style="color: black">Password</span> -->
                                        <span style="color: black">비밀번호</span>
                                        <span style="color: #8E8E8E">
                                            <el-input type="password" v-model="item.loginpwd" show-password></el-input>
                                        </span>
                                    </div>
                                    <!--                                    <div style="height: 25px;margin-top: 10px;">-->
                                    <!--                                        <el-button class="resetpwd" type="primary" size="small" round @click="resetpwd(item)">Reset Password</el-button>-->
                                    <!--                                    </div>-->
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.num==1&&item.goodsSpu.goodsname.toLowerCase().indexOf('youtube')==-1">
                                <div style="width: 80%;padding: 10px;margin:5px;border: 1px solid #ebeef5;border-radius: 3px;">
                                    <div style="display: flex;justify-content: space-between;width: 100%">
                                        <!-- <span style="color: black">Profile</span> -->
                                        <span style="color: black">소개</span>
                                        <!-- <span style="color: #8E8E8E">please use NO. <span style="background-color: #43D98E;padding:2px 5px;color: white">{{item.seatno+1}}</span> sub account</span> -->
                                        <span style="color: #8E8E8E">사용 해주세요 NO. <span style="background-color: #43D98E;padding:2px 5px;color: white">{{item.seatno+1}}</span> 서브 계정</span>

                                    </div>
                                    <div style="height: 30px;margin-top: 10px;">
                                        <el-button style="height: 30px;border: 1px solid #8E8E8E;background-color: #ffffff;color: #8E8E8E" type="primary" size="small" round @click="remind(item)">
                                            <icon-font type="icon-jinggao" style="margin-right: 5px;"/>
                                            <!-- My profile is misused by someone! -->
                                            내 프로필이 누군가에 의해 오용되었습니다！
                                        </el-button>
                                    </div>
                                    <div style="display: flex;justify-content: space-between;width: 100%;margin-top: 20px;">
                                        <el-badge value="1" class="item" v-if="item.carinfo.avatar0">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar0"></el-avatar>
                                        </el-badge>
                                        <el-badge value="1" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-if="item.carinfo.avatar1">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar1"></el-avatar>
                                        </el-badge>
                                        <el-badge value="2" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-if="item.carinfo.avatar2">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar2"></el-avatar>
                                        </el-badge>
                                        <el-badge value="3" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-if="item.carinfo.avatar3">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar3"></el-avatar>
                                        </el-badge>
                                        <el-badge value="4" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-if="item.carinfo.avatar4">
                                            <el-avatar shape="square" :size="50" :src="item.carinfo.avatar4"></el-avatar>
                                        </el-badge>
                                        <el-badge value="5" class="item" v-else>
                                            <el-avatar shape="square" :size="50" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/subscribe-disney.png"></el-avatar>
                                        </el-badge>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-center" v-if="item.goodsSpu.goodsname.toLowerCase().indexOf('youtube')>-1">
                                <div style="width: 80%;">
                                    <div style="background-color: #E8F2FE;padding: 10px;border-radius: 5px;">
                                        <div>
                                            <div style="color: #2496F3">
                                                <!-- Enter your YouTube login email. Be sure to use your login email address to join the family group,
                                                otherwise you will be kicked out of the family. If you need help, please contact Alongshare Customer Service via email on the -->
                                                YouTube 로그인 이메일을 입력하세요. 로그인 이메일 주소를 사용하여 가족 그룹에 가입해야 합니다.
                                                그렇지 않으면 가족에서 쫓겨날 것입니다. 도움이 필요하시면 이메일을 통해 Alongshare 고객 서비스에 문의하십시오.
                                                play.google.com 계정 국가/지역을 확인하세요: ES, FR, PL, IT, DE, NL, GB, CA, US, JP, GR, CH, LT, PA, SG, CZ, SE,
                                                PT, BE , 일리노이. 문제가 발생하면 시간 내에 티켓을 통해 직원에게 문의하십시오.
                                                <router-link to="aftersales" style="margin: 5px;color: #217CD6">애프터 서비스</router-link>
                                                지원 페이지.
                                            </div>
                                        </div>
                                    </div>
                                    <div style="padding: 10px 0;">
                                        <el-form :model="form" :rules="rules" ref="ruleForm">
                                            <el-form-item prop='content'>
                                                <el-input v-model="form.content" placeholder="YouTube login email"></el-input>
                                            </el-form-item>
                                            <!-- <el-button type="primary" style="width: 100%" @click="submitUser(item.id)">submit</el-button> -->
                                            <el-button type="primary" style="width: 100%" @click="submitUser(item.id)">제출하다</el-button>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;font-size: 16px;background-color:#43D98E;color: #ffffff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
                            <div class="justify-center">
                                <div style="width: 80%;display: flex;justify-content: space-around;height: 60px;line-height: 60px;">
                                    <!-- <span @click="getGoodsspuByIdInfo(item.goodsSpu.id)" style="cursor: pointer">Renew</span> -->
                                    <span @click="getGoodsspuByIdInfo(item.goodsSpu.id)" style="cursor: pointer">재계약</span>
                                    <div class="dashed"></div>
                                    <!-- <router-link to="help" style="color: white">Help</router-link>
                                    <div class="dashed"></div> -->
                                    <router-link to="aftersales" style="color: white">After sales</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background:#226C47;border-radius: 5px;margin-top: 3%">
                        <div class="justify-center">
                            <!-- <div style="color: white;font-size: 12px;width: 80%;margin-top: 3%">
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p>
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p> -->
                            <div style="color: white;font-size: 12px;width: 80%;margin-top: 3%">
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.Please use your own sub account according to the serial number</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">1.일련번호에 따라
                                        본인 서브계정을 이용해주세요.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.Do not modify/delete other sub-accounts</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">2.다른 하위 계정을
                                        수정/삭제하지 마십시오.</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.Do not modify subscription-related information</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">3.구독 관련 정보
                                        수정 금지</span></p>
                                <!-- <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">Reminder: If you encounter any problems, please contact customer service in time, buy a subscription at alongshare, enjoy VIP customer service, and do not need to change the number for renewal.</span></p> -->
                                <p><span style="font-size: 10pt; font-family: 'book antiqua', palatino, serif;">알림 ：어떤 문제가
                                        발생할 경우 즉시 고객 서비스에 연락하여 Along Share에서 서브스크립션을 구매하여 VIP 고객 서비스를 즐기실 수 있으며, 리필 시 번호 변경이
                                        필요 없습니다.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <el-drawer
                :close-on-press-escape="false"
                :wrapperClosable="false"
                :visible.sync="drawer1"
                direction="rtl">
            <div style="width: 100%" class="justify-center">
                <div style="width: 90%">
                    <div style="width: 70%" class="justify-between">
                        <div class="block">
                            <el-avatar :size="100" :src="spu.img"></el-avatar>
                        </div>
                        <div style="margin-left: 5%">
                            <div style="margin-top: 20px;">
                                <span style="color: #43D98E;font-weight: bolder;font-size: 1.8em;">${{price}}</span>
                                <del style="color: red;font-weight: bolder;font-size: 1em;margin-left: 10px;" v-if="''!=originalprice&&originalprice>price">${{originalprice}}</del>
                            </div>
                            <div style="font-size: 1em">
                                <!-- <span>{{form1.num}} parking space</span> -->
                                <span>{{ form1.num }} 위치</span>
                                <span style="margin-left: 10px;">{{month}}</span>
                            </div>
                            <div style="font-size: 1em;font-weight: bolder;color: red">
                                <!-- <span v-if="giftstimes>0"> gift {{giftstimes}} month</span> -->
                                <span v-if="giftstimes > 0"> 선물 {{ giftstimes }} month</span>
                            </div>
                        </div>
                    </div>
                    <el-form :model="form1" :rules="rules1" ref="ruleForm1">
                        <div style="padding: 10px 0 0 10px;">
                            <!-- <p>Month</p> -->
                            <p>구입 시간</p>
                        </div>
                        <el-form-item prop="skuid">
                            <el-radio-group v-model="form1.skuid" style="display: flex;flex-wrap: wrap;" @change="updatePrice">
                                <el-radio-button :label="item.id" v-for="(item,index) in spu.skus" :key="index" class="skuname">{{item.skuname}}</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <!-- <p>Screen</p> -->
                            <p>위치 공유</p>

                        </div>
                        <el-form-item prop="num">
                            <el-radio-group v-model="form1.num" style="display: flex;" v-if="spu.type=='2'" @change="updatePrice">
                                <!-- <el-radio-button label="1" class="skuname">1 screen</el-radio-button> -->
                                <el-radio-button label="1" class="skuname">1 서브 계정</el-radio-button>
                                <!-- <el-radio-button :label="spu.num" class="skuname">{{spu.num}} screen</el-radio-button> -->
                                <el-radio-button :label="spu.num" class="skuname">{{spu.num}} 서브계정</el-radio-button>
                            </el-radio-group>
                            <el-radio-group v-model="form1.num" style="display: flex;" v-else  @change="updatePrice">
                                <!-- <el-radio-button label="1" class="skuname">1 screen</el-radio-button> -->
                                <el-radio-button label="1" class="skuname">1 서브 계정</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <!-- <p>Buy Type</p> -->
                            <p>구매 유형</p>
                        </div>
                        <el-form-item prop="buytype">
                            <el-radio-group v-model="form1.buytype" style="display: flex;">
                                <!-- <el-radio-button label="3" class="skuname">Renew</el-radio-button> -->
                                <el-radio-button label="3" class="skuname">재계약</el-radio-button>


                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <span>Discount code</span>
                            <!-- <el-input type="text" v-model="form1.discountcode" placeholder="Discount code" style="width: 50%;margin-left: 3%" clearable></el-input> -->
                            <el-input type="text" v-model="form1.discountcode" placeholder="할인 코드" style="width: 50%;margin-left: 3%" clearable></el-input>
                            <!-- <el-button type="primary" style="margin-left: 3%" @click="useDiscountcode">Use</el-button> -->
                            <el-button type="primary" style="margin-left: 3%" @click="useDiscountcode">사용</el-button>
                        </div>
                        <el-divider></el-divider>
                        <el-form-item style="padding-left: 10px;"  prop="paycode">
                            <!-- <span>Payment method</span> -->
                            <span>지불 방법</span>
                            <!-- <el-select v-model="form1.paycode" placeholder="please choose" style="margin-left: 5%"> -->
                            <el-select v-model="form1.paycode" placeholder="선택하십시오" style="margin-left: 5%">
                                <el-option
                                        v-for="item in payOptions"
                                        :key="item.code"
                                        :label="item.name"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div style="padding: 50px 0;">
                            <!-- <el-button style="width: 100%" type="primary" round @click="soonbug">Renew now</el-button> -->
                            <el-button style="width: 100%" type="primary" round @click="soonbug">즉시 재계약</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </el-drawer>

        <el-drawer
                :close-on-press-escape="false"
                :wrapperClosable="false"
                :visible.sync="drawer3"
                direction="rtl">
            <div style="width: 100%" class="justify-center">
                <div style="width: 90%">
                    <div style="font-size: 1.5em;color: #43D98E;font-weight: bolder;font-family: Source Han Sans CN-Normal">
                        <!-- <p>Credit Card</p> -->
                        <p>신용 카드</p>
                    </div>
                    <el-form :model="form3" :rules="rules3" ref="ruleForm3" size="mini">
                        <el-form-item prop="cardnumber">
                            <!-- <el-input v-model="form3.cardnumber" placeholder="Card number"></el-input> -->
                            <el-input v-model="form3.cardnumber" placeholder="카드 번호"></el-input>
                        </el-form-item>
                        <el-form-item prop="date">
                            <el-date-picker
                                    style="width: 100%"
                                    v-model="form3.date"
                                    type="month"
                                    format="MM/yyyy"
                                    value-format="yyyy-MM"
                                    placeholder="만료 날짜">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item prop="cvv">
                            <el-input v-model="form3.cvv" placeholder="CVC/CVV(3 digts)"></el-input>
                        </el-form-item>
                        <el-form-item prop="name">
                            <!-- <el-input v-model="form3.name" placeholder="Name on card"></el-input> -->
                            <el-input v-model="form3.name" placeholder="카드 소지자 이름"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <!-- <el-checkbox v-model="form3.issave">Save this card for future payments</el-checkbox> -->
                            <el-checkbox v-model="form3.issave">향후 결제를 위해 이 카드를 저장하세요.</el-checkbox>
                        </el-form-item>
                        <div style="padding: 50px 0;">
                            <!-- <el-button style="width: 100%" type="primary" round @click="playorder">Play ${{price}}</el-button> -->
                            <el-button style="width: 100%" type="primary" round @click="playorder">지불하다 ${{price}}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </el-drawer>

        <el-drawer
                :close-on-press-escape="false"
                :wrapperClosable="false"
                :visible.sync="drawer4"
                direction="rtl">
            <div class="justify-center" style="margin-top: 30%">
                <el-result :title="payReslutTitle">
                    <template slot="icon">
                        <el-image :src="payReslutIcon" style="width: 80px;height: 80px;"></el-image>
                    </template>
                </el-result>
            </div>
        </el-drawer>
    </div>
    <div class="justify-center" style="background-color: white;width: 100%;height: 100vh;font-weight: bolder;font-size: 2em;" v-else>
        <!-- <p style="margin-top: 45vh">There are no subscriptions yet, please hurry to buy it</p> -->
        <p style="margin-top: 45vh">아직 구독이 안 되었으니 서둘러 구입해 주세요</p>
    </div>
</template>

<script>
    import { userAllTicket,getGoodsspuById,orderRenew,calprice,carinforesetpwd,carinforeminder,paytypeall,insertWorkorder } from "@/request/requests";
    import {getUserInfo,MessageError,MessageInfo,MessageSuccess,startLoading,aminuteLoading} from "@/util/util"
    import { Icon } from 'ant-design-vue';

    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: 'https://at.alicdn.com/t/c/font_3778069_0whrgs2ck2jr.js',
    });
    export default {
        components: {
            IconFont,
        },
        name: "subscribe",
        data(){

            let validateNumber = (rule, value, callback) => {
                if (!(/^[0-9]*$/.test(value))) {
                    callback(new Error('CVV ERROR!'));
                }  else {
                    callback();
                }
            };
            return{
                payOptions:[],
                temp:"",
                userinfo:"",
                userTickets:[],
                spu:"",
                drawer1:false,
                drawer3:false,
                drawer4:false,
                payReslutIcon:"https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/paysuccess.png",
                // payReslutTitle:"Payment succeeded",
                payReslutTitle: "결제 성공",
                price:"",
                originalprice:"",
                month:"",
                giftstimes:"",
                form:this.initform(),
                rules: {
                    content :[
                        {required: true, message: 'Please enter the Email', trigger: 'blur'},
                    ],
                },
                form1:this.initform1(),
                rules1:{
                    // skuid :[
                    //     {required: true, message: 'Please select a month', trigger: 'blur'},],
                    // num :[
                    //     {required: true, message: 'Please select the number of screens', trigger: 'blur'},],
                    // buytype :[
                    //     {required: true, message: 'Please select the purchase type', trigger: 'blur'},],
                    // paycode :[
                    //     {required: true, message: 'Please select the payment method', trigger: 'blur'},],
                    skuid: [
                        // { required: true, message: 'Please select a month', trigger: 'blur' },],
                        { required: true, message: '월을 선택하세요.', trigger: 'blur' },],
                    num: [
                        // { required: true, message: 'Please select the number of screens', trigger: 'blur' },],
                        { required: true, message: '하위 계정 수를 선택하세요.', trigger: 'blur' },],
                    buytype: [
                        // { required: true, message: 'Please select the purchase type', trigger: 'blur' },],
                        { required: true, message: '구매유형을 선택해주세요', trigger: 'blur' },],
                    paycode: [
                        // { required: true, message: 'Please select the payment method', trigger: 'blur' },],
                        { required: true, message: '결제수단을 선택해주세요', trigger: 'blur' },],
                },
                form3:this.initform3(),
                rules3:{
                    name: [
                        // { required: true, message: 'Please enter Name on card', trigger: 'blur' },],
                        { required: true, message: '카드 소유자 이름을 입력하십시오', trigger: 'blur' },],
                    cardnumber: [
                        // { required: true, message: 'Please enter Card number', trigger: 'blur' },],
                        { required: true, message: '카드번호를 입력해주세요', trigger: 'blur' },],
                    cvv: [
                        { required: true, message: 'Please enter CVV', trigger: 'blur' },
                        { validator: validateNumber, trigger: 'blur' }
                    ],
                    date: [
                        // { required: true, message: 'Please enter Expiry date', trigger: 'blur' },],
                        { required: true, message: '만료 날짜를 입력하세요.', trigger: 'blur' },],
                },
            }
        },
        methods:{
            async submitUser(ticketid) {
                if (""!=this.form.content.trim()&&null!=this.form.content){
                    this.operatorUser(ticketid)
                }else {
                    MessageError("Please enter the Email")
                    return
                }
            },
            async operatorUser(ticketid) {
                this.form.userid=this.userinfo.id
                this.form.ticketid=ticketid
                this.form.typeid=5
                let  res = await insertWorkorder(this.form)
                if (res.status == "200") {
                    // MessageSuccess("처리 상태가 제출되었습니다. 작업 주문서에서 처리 상태를 확인하십시오.")
                    MessageSuccess("처리 상태가 제출되었습니다. 작업 주문서에서 처리 상태를 확인하십시오.")
                    this.form=this.initform()
                    this.$refs.ruleForm.clearValidate();
                } else {
                    MessageError(res.msg)
                }
            },
            initform(){
                return{
                    id : "", // 序号
                    userid : "", // 用户id
                    workorderno : "", // 工单号
                    ticketid : "", // 车票id
                    typeid : "", // 类型id
                    content : "", // 工单内容
                    status : "", // 状态
                    reply : "", // 处理回复
                }
            },
            initform1(){
                return{
                    goodsid: "",
                    skuid: "",
                    num: "",
                    buytype: "",
                    paycode: "",
                    discountcode: "",
                }
            },
            initform3(){
                return{
                    name:"",
                    cardnumber:"",
                    cvv:"",
                    date:"",
                    issave:"",
                }
            },
            playorder(){
                this.$refs.ruleForm3.validate((valid) => {
                    if (valid) {
                        let userInfo=getUserInfo()
                        if (userInfo) {
                            this.userinfo = JSON.parse(userInfo)
                            this.toSubmitOrder()
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async toSubmitOrder() {
                let session_id = this.$cookies.get("session_id")
                let data = {
                    goodsid: this.form1.goodsid,
                    skuid: this.form1.skuid,
                    num: this.form1.num,
                    buytype: this.form1.buytype,
                    paycode: this.form1.paycode,
                    discountcode: this.form1.discountcode,

                    name:this.form3.name,
                    cardnumber:this.form3.cardnumber,
                    cvv:this.form3.cvv,
                    date:this.form3.date,
                    issave:this.form3.issave==true?1:0,

                    userid:this.userinfo.id,
                    sessionid:session_id
                }
                let loading = aminuteLoading()
                let res = await orderRenew(data)
                if (res.status == "200") {
                    this.closeAllDrawer()
                    loading.close()
                    this.drawer4=true
                    this.payReslutIcon="https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/paysuccess.png"
                    // this.payReslutTitle="Payment succeeded"
                    this.payReslutTitle = "결제 성공"

                } else {
                    loading.close()
                    this.drawer4=true
                    this.payReslutIcon="https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/payerror.png"
                    this.payReslutTitle=res.msg
                }
                loading.close()
            },
            closeAllDrawer(){
                this.drawer1=false
                this.drawer3=false
                this.form1=this.initform1();
                this.form3=this.initform3();
                this.userAllTicketInfo()
            },
            updatePrice(){
                this.spu.skus.forEach(r=>{
                    if (r.id==this.form1.skuid){
                        this.price=this.form1.num*r.price
                        this.originalprice=""
                        this.month=r.skuname
                        this.giftstimes=r.giftstimes
                    }
                })
            },
            async useDiscountcode() {
                let code = this.form1.discountcode.trim()
                if ("" == code || null == code) {
                    // MessageError("Discount code cannot be empty!")
                    MessageError("할인 코드는 비워둘 수 없습니다!")

                    return
                }
                let userInfo=getUserInfo()
                if (userInfo){
                    this.userinfo=JSON.parse(userInfo)
                    let data={
                        goodsid:this.form1.goodsid,
                        skuid:this.form1.skuid,
                        num:this.form1.num*1,
                        discountcode:this.form1.discountcode,
                        userid:this.userinfo.id
                    }
                    let loading=startLoading()
                    let res = await calprice(data)
                    if (res.status == "200") {
                        if (0!=res.data&&res.data<this.price){
                            this.originalprice=this.price
                            this.price = res.data
                        }
                        loading.close()
                    } else {
                        MessageError(res.msg)
                        loading.close()
                    }
                    loading.close()
                }
            },
            async soonbug() {
                this.$refs.ruleForm1.validate((valid) => {
                    if (valid) {
                        let userInfo=getUserInfo()
                        if (userInfo) {
                            this.userinfo = JSON.parse(userInfo)
                            this.drawer3=true
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async userAllTicketInfo() {
                let loading=startLoading()
                let res = await userAllTicket(this.userinfo.id)
                if (res.status == "200") {
                    this.userTickets = res.data
                    if (res.data.length>0){
                        this.userTickets.forEach(r=>{
                            r.ext1=this.countTime(r.endTime)
                        })
                        this.temp = setInterval(() => {
                            this.userTickets.forEach(r=>{
                                r.ext1=this.countTime(r.endTime)
                            })
                        },60000)
                    }
                    loading.close()
                } else {
                    MessageError(res.msg)
                    loading.close()
                }
                loading.close()
            },
            countTime(time) {
                //获取当前时间
                let date = new Date();
                let now = date.getTime();
                //设置截止时间
                let endDate = new Date(time);
                let end = endDate.getTime();
                //时间差
                let leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                let count
                if (leftTime >= 0) {
                    let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                    d = d < 10 ? "0" + d : d
                    let h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    h = h < 10 ? "0" + h : h
                    let m = Math.floor(leftTime / 1000 / 60 % 60);
                    m = m < 10 ? "0" + m : m
                    // let s = Math.floor(leftTime / 1000 % 60);
                    // s = s < 10 ? "0" + s : s
                    // count = d + ' Days ' + h + ' Hours ' + m + ' minute ' + s + ' second'
                    count = d + ' Days ' + h + ' Hours ' + m + ' minute '
                }
                // console.log(count);
                return count
            },
            async getGoodsspuByIdInfo(id) {
                let loading = startLoading()
                let res = await getGoodsspuById(id)
                if (res.status == "200") {
                    this.spu = res.data
                    this.form1={
                        goodsid: this.spu.id,
                        skuid: this.spu.skus[0].id,
                        num: 1,
                        buytype: "3",
                        paycode: this.payOptions[0].value,
                        discountcode: "",
                    }
                    this.price=this.spu.skus[0].price
                    this.month=this.spu.skus[0].skuname
                    this.giftstimes=this.spu.skus[0].giftstimes
                    this.drawer1=true
                    loading.close()
                } else {
                    MessageError(res.msg)
                    loading.close()
                }
                loading.close()
            },
            resetpwd(val){
                // this.$confirmel('The original password for this operation will no longer be used, whether to continue?', 'Tips', {
                this.$confirmel('이 작업의 원래 암호는 더 이상 사용되지 않습니다. 계속하시겠습니까?', '팁', {
                    // confirmButtonText: 'Confirm',
                    confirmButtonText: '확인',
                    // cancelButtonText: 'Cancel',
                    cancelButtonText: '취소',

                    type: 'warning'
                }).then(() => {
                    this.toResetpwd(val)
                }).catch(() => {
                    // MessageInfo("Canceled");
                    MessageInfo("취소");

                });
            },
            async toResetpwd(val) {
                let data = {
                    carid: val.carid
                }
                let loading = startLoading()
                let res = await carinforesetpwd(data)
                if (res.status == "200") {
                    MessageSuccess(res.msg)
                    this.userAllTicketInfo()
                    loading.close()
                } else {
                    MessageError(res.msg)
                    loading.close()
                }
                loading.close()
            },
            async toResetpwd1(val) {
                if (!(/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,16}$/.test(val.loginpwd))) {
                    // MessageError('The password meets uppercase and lowercase letters, numbers and special characters, any combination of three of them, and the length is between 8 and 16!');
                    MessageError('비밀번호는 대문자와 소문자, 숫자, 특수문자 중 3가지 조합을 모두 충족하며, 길이는 8자에서 16자 사이!')

                    return
                } else {
                    let data = {
                        carid: val.carid,
                        loginpwd: val.loginpwd
                    }
                    let loading = startLoading()
                    let res = await carinforesetpwd(data)
                    if (res.status == "200") {
                        MessageSuccess(res.msg)
                        this.userAllTicketInfo()
                        loading.close()
                    } else {
                        MessageError(res.msg)
                        loading.close()
                    }
                    loading.close()
                }
            },
            async remind(val) {
                let loading = startLoading()
                let res = await carinforeminder(val.carid)
                if (res.status == "200") {
                    MessageSuccess(res.msg)
                    loading.close()
                } else {
                    MessageError(res.msg)
                    loading.close()
                }
                loading.close()
            },
            async paytypeallInfo() {
                let res = await paytypeall()
                if (res.status == "200") {
                    this.payOptions = res.data
                } else {
                    MessageError(res.msg)
                }
            }
        },
        created() {
            let userInfo=getUserInfo()
            if (userInfo){
                this.userinfo=JSON.parse(userInfo)
                this.userAllTicketInfo()
                this.paytypeallInfo()
            }
        },
        destroyed(){
            clearInterval(this.temp);
            // console.log(this.temp,"销毁")
        }
    }
</script>

<style scoped>
    .dashed{
        width: 1px;
        margin-top: 10px;
        height: 40px;
        background-image: linear-gradient(to bottom, #ffffff 0%, #8E8E8E 50%, transparent 30%);
        background-size: 8px 2px;
        background-repeat: repeat-y;
    }
    .dashed-green{
        margin-left: -10%;
        width: 120%;
        height: 2px;
        background-image: linear-gradient(to right, #ffffff 0%, #8E8E8E 50%, transparent 30%);
        background-size: 8px 8px;
        background-repeat: repeat-x;
    }
    .psdinput>>>.el-input__inner {
        border: 0;
        height: 15px;
        width: 200px;
        text-align: right;
        background-color: #F6F6F6;
        font-size: 0.5em;
    }
    .psdinput>>>.el-input__suffix{
        top:-10px;
    }
    .resetpwd{
        height: 25px;
        line-height: 2px;
        border: 1px solid #8E8E8E;
        background-color: #ffffff;
        color: #8E8E8E
    }
    .skuname{
        border-left: 1px solid #DCDFE6;
        border-radius: 10px;
        margin-left: 3%;
        margin-top: 10px;
    }

    .textdesc{
        word-break:break-all;
        padding: 5px;
        -webkit-transform: scale(0.8);
    }
</style>
