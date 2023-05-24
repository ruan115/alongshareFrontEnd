<template>
    <div class="justify-center homebg">
        <div style="width: 80%;margin-top: 40px;">
            <div class="flex-row justify-center">
                <img style="width: 95px;height: 95px;" referrerpolicy="no-referrer"
                    src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/aslogo.png" />
                <div class="text-wrapper">
                    <!-- <span>Join&nbsp;</span> -->
<!--                    <span>가입하다&nbsp;</span>-->
                    <span>{{$t('home.join')}}&nbsp;</span>
                    <span class="texttitle">ALONGSHARE</span>
                    <!-- <span>Open your shared subscription at a lower price</span> -->
<!--                    <span>더 저렴한 가격으로 OTT 서비스를 즐기세요</span>-->
                    <span>{{$t('home.texttitle')}}</span>
                </div>
            </div>
            <div class="cardall">
                <el-card class="box-card" v-for="(item, index) in spuList" :key="index">
                    <div class="justify-center">
                        <img :src="item.homeimg" style="height: 60px;">
                    </div>
                    <div class="dashed"></div>
                    <div class="justify-center" style="line-height: 60px;">
                        <span style="font-size: 35px;font-weight:bolder;font-family: 仿宋; color: #43D98E;">{{ item.price}}</span>
                        <span style="margin-left: 5px;">$/month</span>
                    </div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==1" v-html="$t('home.detail1')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==2" v-html="$t('home.detail2')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==3" v-html="$t('home.detail3')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==5" v-html="$t('home.detail5')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==7" v-html="$t('home.detail7')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==9" v-html="$t('home.detail9')"></div>
                    <div style="font-size: 12px;line-height: 12px;" v-if="item.id==10" v-html="$t('home.detail10')"></div>

                    <div class="justify-center" style="position: absolute;bottom: 15px;width: 85%">
                        <!-- <el-button type="primary" style="width: 100%" @click="tobug(item)" v-if="item.isbuy == '1'">Buy Now</el-button> -->
<!--                        <el-button type="primary" style="width: 100%" @click="tobug(item)" v-if="item.isbuy == '1'">구입</el-button>-->
                        <el-button type="primary" style="width: 100%" @click="tobug(item)" v-if="item.isbuy == '1'">{{$t('home.buynow')}}</el-button>
                        <!-- <el-button type="info" style="width: 100%" v-else disabled>Product sold out</el-button> -->
<!--                        <el-button type="info" style="width: 100%" v-else disabled>제품 매진</el-button>-->
                        <el-button type="info" style="width: 100%" v-else disabled>{{$t('home.soldout')}}</el-button>
                    </div>
                </el-card>
            </div>
            <div class="justify-between" style="margin-left: 50px;">
                <div class="icondiv">
                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/realdeliver.png" class="iconimg">
                    <div class="contentdiv">
                        <!-- <p class="icontitle">Real time delivery</p> -->
<!--                        <p class="icontitle">즉시 배송</p>-->
                        <p class="icontitle">{{$t('home.delivery')}}</p>
                        <!-- <p class="icondesc">Real time delivery after payment without waiting</p> -->
<!--                        <p class="icondesc">결제 후 바로 상품을 받아보세요</p>-->
                        <p class="icondesc">{{$t('home.after')}}</p>
                    </div>
                </div>
                <!--                <div class="icondiv">-->
                <!--                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/resetpwd.png" class="iconimg">-->
                <!--                    <div class="contentdiv">-->
                <!--                        <p class="icontitle">Quick Password Reset</p>-->
                <!--                        <p class="icondesc">Pwd does not work? Click rest pwd on the subscription page without waiting and manual operation</p>-->
                <!--                    </div>-->
                <!--                </div>-->
                <div class="icondiv">
                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/ssl.png" class="iconimg">
                    <div class="contentdiv">
                        <!-- <p class="icontitle">SSl certificate</p> -->
<!--                        <p class="icontitle">SSL 인증서</p>-->
                        <p class="icontitle">{{$t('home.certificate')}}</p>

                        <!-- <p class="icondesc">Payments are made in a secure environment with ssl security certificates</p> -->
<!--                        <p class="icondesc">SSL 보안 인증서로 안전한 환경에서 결제가 이루어집니다.</p>-->
                        <p class="icondesc">{{$t('home.payments')}}</p>
                    </div>
                </div>
            </div>
            <div class="justify-between" style="margin-top: 30px;margin-left: 50px;">
                <div class="icondiv">
                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/kefu.png" class="iconimg">
                    <div class="contentdiv">
                        <!-- <p class="icontitle">24/7 online support</p> -->
<!--                        <p class="icontitle">24/7 온라인 지원</p>-->
                        <p class="icontitle">{{$t('home.onlinesupport')}}</p>
                        <!-- <p class="icondesc">24/7 online private customer service</p> -->
<!--                        <p class="icondesc">24/7 온라인 개인 고객 서비스</p>-->
                        <p class="icondesc">{{$t('home.privatecustomer')}}</p>
                    </div>
                </div>
                <div class="icondiv">
                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/cooperate.png" class="iconimg">
                    <div class="contentdiv">
                        <!-- <p class="icontitle">The right co subscriber</p> -->
<!--                        <p class="icontitle">같은 니즈를 가진 가입자</p>-->
                        <p class="icontitle">{{$t('home.subscriber')}}</p>
                        <!-- <p class="icondesc">Share premium subscriptions at a lower price. Priority matching for cosubscribers from the same country/region</p> -->
<!--                        <p class="icondesc">동일한 국가에서 공통 요구사항을 가진 파트너 매칭을 우선시합니다.</p>-->
                        <p class="icondesc">{{$t('home.subscriptions')}}</p>
                    </div>
                </div>
            </div>
            <div class="justify-between" style="margin-top: 30px;margin-left: 50px;margin-bottom: 50px;">
                <div class="icondiv">
                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/refund.png" class="iconimg">
                    <div class="contentdiv">
                        <!-- <p class="icontitle">money-back guarantee</p> -->
<!--                        <p class="icontitle">환불 보증</p>-->
                        <p class="icontitle">{{$t('home.moneyback')}}</p>
                        <!-- <p class="icondesc">You have 1-20 days to apply for a refund</p> -->
<!--                        <p class="icondesc">환불을 신청할 수 있는 기간은 1~20일입니다.</p>-->
                        <p class="icondesc">{{$t('home.refund')}}</p>
                    </div>
                </div>
            </div>
        </div>

        <el-drawer :close-on-press-escape="false" :wrapperClosable="true" :visible.sync="drawer1" direction="rtl">
            <div style="width: 100%" class="justify-center">
                <div style="width: 90%">
                    <div style="width: 70%" class="justify-between">
                        <div class="block">
                            <el-avatar :size="100" :src="spu.img"></el-avatar>
                        </div>
                        <div style="margin-left: 5%">
                            <div style="margin-top: 10px;">
                                <span style="color: #43D98E;font-weight: bolder;font-size: 1.8em;">${{ price }}</span>
                                <del style="color: red;font-weight: bolder;font-size: 1em;margin-left: 10px;"
                                    v-if="'' != originalprice && originalprice > price">${{ originalprice }}</del>
                            </div>
                            <div style="font-size: 1em">
                                <!-- <span>{{ form1.num }} parking space</span> -->
<!--                                <span>{{ form1.num }} 위치</span>-->
                                <span>{{ form1.num }} {{$t('home.parkingspace')}}</span>
                                <span style="margin-left: 10px;">{{ month }}</span>
                            </div>
                            <div style="font-size: 1em;font-weight: bolder;color: red">
                                <!-- <span v-if="giftstimes > 0"> gift {{ giftstimes }} month</span> -->
<!--                                <span v-if="giftstimes > 0"> 선물 {{ giftstimes }} month</span>-->
                                <span v-if="giftstimes > 0"> {{$t('home.gift')}} {{ giftstimes }} month</span>
                            </div>
                        </div>
                    </div>
                    <el-form :model="form1" :rules="rules1" ref="ruleForm1">
                        <div style="padding: 10px 0 0 10px;">
<!--                            <p>Month</p>-->
<!--                            <p>구입 시간</p>-->
                            <p>{{$t('home.month')}}</p>
                        </div>
                        <el-form-item prop="skuid">
                            <el-radio-group v-model="form1.skuid" style="display: flex;flex-wrap: wrap;"
                                @change="updatePrice">
                                <el-radio-button :label="item.id" v-for="(item, index) in spu.skus" :key="index"
                                    class="skuname">{{ item.skuname }}</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <!-- <p>Screen</p> -->
<!--                            <p>위치 공유</p>-->
                            <p>{{$t('home.screen')}}</p>
                        </div>
                        <el-form-item prop="num">
                            <el-radio-group v-model="form1.num" style="display: flex;" v-if="spu.type == '2'" @change="updatePrice">
                                <!-- <el-radio-button label="1" class="skuname">1 screen</el-radio-button>
                                <el-radio-button :label="spu.maxnum" class="skuname">{{ spu.maxnum }} screen</el-radio-button> -->
<!--                                <el-radio-button label="1" class="skuname">1 서브 계정</el-radio-button>-->
<!--                                <el-radio-button :label="spu.maxnum" class="skuname">{{ spu.maxnum }} 서브계정</el-radio-button>-->
                                <el-radio-button label="1" class="skuname">{{$t('home.1screen')}}</el-radio-button>
                                <el-radio-button :label="spu.maxnum" class="skuname">{{ spu.maxnum }} {{$t('home.maxnum')}}</el-radio-button>
                            </el-radio-group>
                            <el-radio-group v-model="form1.num" style="display: flex;" v-else @change="updatePrice">
                                <!-- <el-radio-button label="1" class="skuname">1 screen</el-radio-button> -->
<!--                                <el-radio-button label="1" class="skuname">1 서브 계정</el-radio-button>-->
                                <el-radio-button label="1" class="skuname">{{$t('home.1screen')}}</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <!-- <p>Buy Type</p> -->
<!--                            <p>구매 유형</p>-->
                            <p>{{$t('home.buytyp')}}</p>
                        </div>
                        <el-form-item prop="buytype">
                            <el-radio-group v-model="form1.buytype" style="display: flex;">
                              <!-- <el-radio-button label="1" class="skuname">subscription</el-radio-button> -->
<!--                              <el-radio-button label="1" class="skuname">계정</el-radio-button>-->
                                <el-radio-button label="1" class="skuname">{{$t('home.subscription')}}</el-radio-button>
                                <!-- <el-radio-button label="2" class="skuname">Voucher</el-radio-button> -->
<!--                                <el-radio-button label="2" class="skuname">상환 코드</el-radio-button>-->
                                <el-radio-button label="2" class="skuname">{{$t('home.voucher')}}</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-divider></el-divider>
                        <div style="padding-left: 10px;">
                            <!-- <span>Discount code</span> -->
<!--                            <span>할인 코드</span>-->
                            <span>{{$t('home.discountcode')}}</span>
                            <!-- <el-input type="text" v-model="form1.discountcode" placeholder="Discount code" -->
<!--                            <el-input type="text" v-model="form1.discountcode" placeholder="할인 코드" style="width: 50%;margin-left: 2%" clearable></el-input>-->
                            <el-input type="text" v-model="form1.discountcode" :placeholder="$t('home.discountcode')" style="width: 50%;margin-left: 2%" clearable></el-input>
                            <!-- <el-button type="primary" style="margin-left:3%" @click="useDiscountcode">Use</el-button> -->
<!--                            <el-button type="primary" style="margin-left:3%" @click="useDiscountcode">사용</el-button>-->
                            <el-button type="primary" style="margin-left:3%" @click="useDiscountcode">{{$t('home.use')}}</el-button>
                        </div>
                        <el-divider></el-divider>
                        <el-form-item style="padding-left: 10px;" prop="paycode">
                            <!-- <span>Payment method</span> -->
<!--                            <span>지불 방법</span>-->
                            <span>{{$t('home.paymentmethod')}}</span>
                            <!-- <el-select v-model="form1.paycode" placeholder="please choose" style="margin-left: 5%"> -->
                            <el-select v-model="form1.paycode" :placeholder="$t('home.pleasechoose')" style="margin-left: 5%">
                                <el-option v-for="item in payOptions" :key="item.code" :label="item.name"
                                    :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div style="padding: 50px 0;">
                            <!-- <el-button style="width: 100%" type="primary" round @click="soonbug">Buy now</el-button> -->
                            <el-button style="width: 100%" type="primary" round @click="soonbug">{{$t('home.buynow')}}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </el-drawer>

        <el-drawer :close-on-press-escape="false" :wrapperClosable="false" :visible.sync="drawer2" direction="rtl">
            <div style="width: 100%" class="justify-center">
                <div style="width: 90%">
                    <div style="font-size: 1.5em;font-weight: bolder;font-family: Source Han Sans CN-Normal">
                        <!-- <p>Billing Details</p> -->
<!--                        <p>결제 세부 정보</p>-->
                        <p>{{$t('home.billingdetails')}}</p>
                    </div>
                    <div v-if="'' != payaddress && null != payaddress && payaddress.length > 0"
                        style="margin-bottom: 20px;">
                        <!-- <el-select placeholder="Payment Address Information" v-model="addressinfo" @change="changeAddress"> -->
<!--                        <el-select placeholder="지불 주소 정보" v-model="addressinfo" @change="changeAddress">-->
                        <el-select :placeholder="$t('home.payaddress')" v-model="addressinfo" @change="changeAddress" clearable>
                            <el-option v-for="item in payaddress" :key="item.id"
                                :label="item.country + '-' + item.state + '-' + item.city" :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <el-form :model="form2" :rules="rules2" ref="ruleForm2" label-position="top" size="medium">
                        <div class="justify-between">
                            <div style="width: 42%">
                                <!-- <el-form-item label="First name" prop="firstname"> -->
<!--                                <el-form-item label="이름" prop="firstname">-->
                                <el-form-item :label="$t('home.firstname')" prop="firstname">
                                    <el-input v-model="form2.firstname"></el-input>
                                </el-form-item>
                            </div>
                            <div style="width: 42%;">
                                <!-- <el-form-item label="Last name" prop="lastname"> -->
<!--                                <el-form-item label="성" prop="lastname">-->
                                <el-form-item :label="$t('home.lastname')" prop="lastname">
                                    <el-input v-model="form2.lastname"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <!-- <el-form-item label="Email address" prop="email"> -->
<!--                        <el-form-item label="이메일 주소" prop="email">-->
                        <el-form-item :label="$t('home.emailaddress')" prop="email">
                            <el-input v-model="form2.email"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="Phone" prop="phone"> -->
<!--                        <el-form-item label="핸드폰" prop="phone">-->
                        <el-form-item :label="$t('home.phone')" prop="phone">
                            <el-input v-model="form2.phone"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="Company name" prop="company"> -->
<!--                        <el-form-item label="회사 이름" prop="company">-->
<!--                            <el-input v-model="form2.company"></el-input>-->
<!--                        </el-form-item>-->
                        <!-- <el-form-item label="Country / Region" prop="country"> -->
<!--                        <el-form-item label="국가/지역" prop="country">-->
                        <el-form-item :label="$t('home.country')" prop="country">
                            <el-select v-model="form2.country" :placeholder="$t('home.pleasechoose')" filterable @change="updateCountry">
                                <el-option v-for="item in countryList" :key="item.twocode.trim()"
                                    :label="item.shortname.trim()" :value="item.twocode.trim()">
                                </el-option>
                            </el-select>
                        </el-form-item>
<!--                        <el-form-item label="국가코드" prop="state">-->
                        <el-form-item :label="$t('home.state')" prop="state">
                            <!-- <el-select v-model="form2.state" placeholder="please choose" filterable -->
                            <el-select v-model="form2.state" :placeholder="$t('home.pleasechoose')" filterable v-if="provinceList.length > 0">
                                <el-option v-for="item in provinceList" :key="item.enname.trim()"
                                    :label="item.enname.trim()" :value="item.enname.trim()">
                                </el-option>
                            </el-select>

                            <el-input v-model="form2.state" v-else></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="Town / City" prop="city"> -->
<!--                        <el-form-item label="마을 / 도시" prop="city">-->
                        <el-form-item :label="$t('home.city')" prop="city">
                            <el-input v-model="form2.city"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="Street address" prop="address"> -->
<!--                        <el-form-item label="거리 주소" prop="address">-->
                        <el-form-item :label="$t('home.address')" prop="address">
                            <!-- <el-input v-model="form2.address" placeholder="House number and street name"></el-input> -->
<!--                            <el-input v-model="form2.address" placeholder="문 번호와 거리 이름"></el-input>-->
                            <el-input v-model="form2.address" :placeholder="$t('home.housenumber')"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <!-- <el-input v-model="form2.address1"
                                placeholder="Apartment, suite, unit, etc. (optional)"></el-input> -->
<!--                            <el-input v-model="form2.address1" placeholder="아파트, 스위트, 유닛 등(선택 사항)"></el-input>-->
                            <el-input v-model="form2.address1" :placeholder="$t('home.suiteunit')"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="ZIP Code" prop="postalcode"> -->
<!--                        <el-form-item label="우편 번호" prop="postalcode">-->
                        <el-form-item :label="$t('home.zipcode')" prop="postalcode">
                            <el-input v-model="form2.postalcode"></el-input>
                        </el-form-item>
                        <div style="padding: 50px 0;">
                            <!-- <el-button style="width: 100%" type="primary" round @click="submitUserInfo">Submit</el-button> -->
<!--                            <el-button style="width: 100%" type="primary" round @click="submitUserInfo">제출</el-button>-->
                            <el-button style="width: 100%" type="primary" round @click="submitUserInfo">{{$t('home.submit')}}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </el-drawer>

        <el-drawer :close-on-press-escape="false" :wrapperClosable="false" :visible.sync="drawer3" direction="rtl">
            <div style="width: 100%" class="justify-center">
                <div style="width: 90%">
                    <div style="font-size: 1.5em;color: #43D98E;font-weight: bolder;font-family: Source Han Sans CN-Normal">
                        <!-- <p>Credit Card</p> -->
<!--                        <p>신용 카드</p>-->
                        <p>{{$t('home.creditcard')}}</p>
                    </div>
                    <el-form :model="form3" :rules="rules3" ref="ruleForm3" size="mini">
                        <el-form-item prop="cardnumber">
                            <!-- <el-input v-model="form3.cardnumber" placeholder="Card number"></el-input> -->
<!--                            <el-input v-model="form3.cardnumber" placeholder="카드 번호"></el-input>-->
                            <el-input v-model="form3.cardnumber" :label="$t('home.cardnumber')"></el-input>
                        </el-form-item>
                        <el-form-item prop="date">
<!--                            <el-date-picker style="width: 100%" v-model="form3.date" type="month" format="MM/yyyy" value-format="yyyy-MM" placeholder="Expiry date"></el-date-picker>-->
<!--                            <el-date-picker style="width: 100%" v-model="form3.date" type="month" format="MM/yyyy"-->
<!--                                value-format="yyyy-MM" placeholder="만료 날짜">-->
<!--                            </el-date-picker>-->
                            <el-date-picker style="width: 100%" v-model="form3.date" type="month" format="MM/yyyy"
                                            value-format="yyyy-MM" :placeholder="$t('home.expirydate')">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item prop="cvv">
                            <el-input v-model="form3.cvv" placeholder="CVC/CVV(3 digts)"></el-input>
                        </el-form-item>
                        <el-form-item prop="name">
                            <!-- <el-input v-model="form3.name" placeholder="Name on card"></el-input> -->
<!--                            <el-input v-model="form3.name" placeholder="카드 소지자 이름"></el-input>-->
                            <el-input v-model="form3.name" :placeholder="$t('home.nameoncard')"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <!-- <el-checkbox v-model="form3.issave">Save this card for future payments</el-checkbox> -->
<!--                            <el-checkbox v-model="form3.issave">향후 결제를 위해 이 카드를 저장하세요.</el-checkbox>-->
                            <el-checkbox v-model="form3.issave">{{$t('home.savethiscard')}}</el-checkbox>
                        </el-form-item>
                        <div style="padding: 50px 0;">
                            <!-- <el-button style="width: 100%" type="primary" round @click="playorder">Play -->
<!--                            <el-button style="width: 100%" type="primary" round @click="playorder">지불하다 ${{ price }}</el-button>-->
                            <el-button style="width: 100%" type="primary" round @click="playorder">{{$t('home.play')}} ${{ price }}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </el-drawer>

        <el-drawer :close-on-press-escape="false" :wrapperClosable="false" :visible.sync="drawer4" direction="rtl">
            <div class="justify-center" style="margin-top: 30%">
                <el-result :title="payReslutTitle">
                    <template slot="icon">
                        <el-image :src="payReslutIcon" style="width: 80px;height: 80px;"></el-image>
                    </template>
                </el-result>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import { getGoodsspuAll, calprice, orderSubmit, getCountryinfoAll, getProvinceAll, getPayAddressByUserId, paytypeall } from "@/request/requests";
import { MessageError, startLoading, aminuteLoading, getUserInfo } from "@/util/util"
export default {
    name: "home",
    data() {
        let validateEmail = (rule, value, callback) => {
            if (!(/^([a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6})$/.test(value))) {
                // callback(new Error('Email ERROR!'));
                // callback(new Error('이메일 오류!'));
                callback(new Error(this.$t("home.emailerror")));
            } else {
                callback();
            }
        };
        let validateNumber = (rule, value, callback) => {
            if (!(/^[0-9]*$/.test(value))) {
                callback(new Error('CVV ERROR!'));
            } else {
                callback();
            }
        };
        return {
            addressinfo: "",
            payOptions: [],
            spu: "",
            spuList: [],
            drawer1: false,
            drawer2: false,
            drawer3: false,
            drawer4: false,
            payReslutIcon: "https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/paysuccess.png",
            // payReslutTitle: "payment successful",
            // payReslutTitle: "결제 성공",
            payReslutTitle: this.$t("home.payresluttitle"),
            price: "",
            originalprice: "",
            month: "",
            giftstimes: "",
            userinfo: "",
            countryList: [],
            provinceList: [],
            payaddress: [],
            form1: this.initform1(),
            rules1: {
                skuid: [
                    // { required: true, message: 'Please select a month', trigger: 'blur' },],
                    // { required: true, message: '월을 선택하세요.', trigger: 'blur' },],
                    { required: true, message: this.$t("home.selectamonth"), trigger: 'blur' },],
                num: [
                    // { required: true, message: 'Please select the number of screens', trigger: 'blur' },],
                    // { required: true, message: '하위 계정 수를 선택하세요.', trigger: 'blur' },],
                    { required: true, message: this.$t("home.selectthenumber"), trigger: 'blur' },],
                buytype: [
                    // { required: true, message: 'Please select the purchase type', trigger: 'blur' },],
                    // { required: true, message: '구매유형을 선택해주세요', trigger: 'blur' },],
                    { required: true, message: this.$t("home.selectthepurchase"), trigger: 'blur' },],
                paycode: [
                    // { required: true, message: 'Please select the payment method', trigger: 'blur' },],
                    // { required: true, message: '결제수단을 선택해주세요', trigger: 'blur' },],
                    { required: true, message: this.$t("home.selectthepayment"), trigger: 'blur' },],
            },
            form2: this.initform2(),
            rules2: {
                firstname: [
                    // { required: true, message: 'please enter first name', trigger: 'blur' },],
                    // { required: true, message: '이름을 입력하세요', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.firstname'), trigger: 'blur' },],
                lastname: [
                    // { required: true, message: 'please enter lastname', trigger: 'blur' },],
                    // { required: true, message: '성을 입력하세요.', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.lastname'), trigger: 'blur' },],
                company: [
                    { required: true, message: 'please enter company', trigger: 'blur' },],
                    // { required: true, message: '회사를 입력하십시오', trigger: 'blur' },],
                country: [
                    // { required: true, message: 'please enter country', trigger: 'blur' },],
                    // { required: true, message: '국가를 입력하십시오', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.country'), trigger: 'blur' },],
                state: [
                    // { required: true, message: 'please enter state', trigger: 'blur' },],
                    // { required: true, message: '국가/주', trigger: 'blur' },],
                     { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.state'), trigger: 'blur' },],
                city: [
                    // { required: true, message: 'please enter city', trigger: 'blur' },],
                    // { required: true, message: '도시를 입력하십시오', trigger: 'blur' },],
                     { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.city'), trigger: 'blur' },],
                address: [
                    // { required: true, message: 'please enter address', trigger: 'blur' },],
                    // { required: true, message: '주소를 입력하십시오', trigger: 'blur' },],
                     { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.address'), trigger: 'blur' },],
                postalcode: [
                    // { required: true, message: 'please enter postal code', trigger: 'blur' },],
                    // { required: true, message: '우편번호를 입력하세요', trigger: 'blur' },],
                        { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.zipcode'), trigger: 'blur' },],
                phone: [
                    // { required: true, message: 'please enter phone', trigger: 'blur' },
                    // { required: true, message: '전화를 입력하십시오', trigger: 'blur' },
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.phone'), trigger: 'blur' }
                ],
                email: [
                    // { required: true, message: 'Please enter email', trigger: 'blur' },
                    // { required: true, message: '이메일을 입력하세요', trigger: 'blur' },
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.emailaddress'), trigger: 'blur' },
                    { validator: validateEmail, trigger: 'blur' }
                ],
            },
            form3: this.initform3(),
            rules3: {
                name: [
                    // { required: true, message: 'Please enter Name on card', trigger: 'blur' },],
                    // { required: true, message: '카드 소유자 이름을 입력하십시오', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.nameoncard'), trigger: 'blur' },],
                cardnumber: [
                    // { required: true, message: 'Please enter Card number', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.cardnumber'), trigger: 'blur' },],
                cvv: [
                    // { required: true, message: 'Please enter CVV', trigger: 'blur' },
                    { required: true, message: this.$t('home.pleaseenter')+' CVV', trigger: 'blur' },
                    { validator: validateNumber, trigger: 'blur' }
                ],
                date: [
                    // { required: true, message: 'Please enter Expiry date', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.expirydate'), trigger: 'blur' },],
                    // { required: true, message: '만료 날짜를 입력하세요.', trigger: 'blur' },],
            },
        }
    },
    methods: {
        cleanTrans() {
            // this.delCookie('googtrans')
            window.location.reload()
        },
        changeAddress() {
            this.payaddress.forEach(r => {
                if (r.id == this.addressinfo) {
                    this.form2.firstname = r.firstname
                    this.form2.lastname = r.lastname
                    this.form2.company = r.company
                    this.form2.country = r.country
                    this.form2.state = r.state
                    this.form2.city = r.city
                    this.form2.address = r.address
                    this.form2.postalcode = r.postalcode
                    this.form2.phone = r.phone
                    this.form2.email = r.email
                }
            })
        },
        updateCountry() {
            if (this.form2.country == 'CA' || this.form2.country == 'US') {
                this.getProvinceAllInfo()
            } else {
                this.provinceList = []
            }
        },
        initform1() {
            return {
                goodsid: "",
                skuid: "",
                num: "",
                buytype: "",
                paycode: "",
                discountcode: "",
            }
        },
        initform2() {
            return {
                firstname: "",
                lastname: "",
                company: "",
                country: "",
                state: "",
                city: "",
                address: "",
                address1: "",
                postalcode: "",
                phone: "",
                email: "",
            }
        },
        initform3() {
            return {
                name: "",
                cardnumber: "",
                cvv: "",
                date: "",
                issave: "",
            }
        },
        playorder() {
            this.$refs.ruleForm3.validate((valid) => {
                if (valid) {
                    let userInfo = getUserInfo()
                    if (userInfo) {
                        this.userinfo = JSON.parse(userInfo)
                        this.drawer2 = true
                        this.getCountryinfoAllInfo()
                        this.getPayAddressByUserIdInfo()
                    }
                    console.log(this.form3)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async toSubmitOrder() {
            let session_id = sessionStorage.getItem("session_id")
            let data = {
                goodsid: this.form1.goodsid,
                skuid: this.form1.skuid,
                num: this.form1.num,
                buytype: this.form1.buytype,
                paycode: this.form1.paycode,
                discountcode: this.form1.discountcode,

                firstname: this.form2.firstname,
                lastname: this.form2.lastname,
                company: this.form2.company,
                country: this.form2.country,
                state: this.form2.state,
                city: this.form2.city,
                address: this.form2.address,
                postalcode: this.form2.postalcode,
                phone: this.form2.phone,
                email: this.form2.email,

                name: this.form3.name,
                cardnumber: this.form3.cardnumber,
                cvv: this.form3.cvv,
                date: this.form3.date,
                issave: this.form3.issave == true ? 1 : 0,

                userid: this.userinfo.id,
                sessionid: session_id
            }
            let loading = aminuteLoading()
            let res = await orderSubmit(data)
            if (res.status == "200") {
                this.closeAllDrawer()
                loading.close()
                this.drawer4 = true
                this.payReslutIcon = "https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/paysuccess.png"
                // this.payReslutTitle = "Payment succeeded"
                this.payReslutTitle = this.$t("home.payresluttitle")
            } else {
                loading.close()
                this.drawer4 = true
                this.payReslutIcon = "https://kilogod.oss-cn-shenzhen.aliyuncs.com/alongshare/payerror.png"
                this.payReslutTitle = res.msg
            }
            loading.close()
            console.log(data)
        },
        closeAllDrawer() {
            this.drawer1 = false
            this.drawer2 = false
            this.drawer3 = false
            this.form1 = this.initform1();
            this.form2 = this.initform2();
            this.form3 = this.initform3();
        },
        submitUserInfo() {
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    let userInfo = getUserInfo()
                    if (userInfo) {
                        this.userinfo = JSON.parse(userInfo)
                        this.form2.address = this.form2.address + this.form2.address1
                        this.toSubmitOrder()
                    }
                    console.log(this.form2)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        updatePrice() {
            this.spu.skus.forEach(r => {
                if (r.id == this.form1.skuid) {
                    this.price = this.form1.num * r.price
                    this.originalprice = ""
                    this.month = r.skuname
                    this.giftstimes = r.giftstimes
                }
            })
        },
        async useDiscountcode() {
            let code = this.form1.discountcode.trim()
            if ("" == code || null == code) {
                // MessageError("Discount code cannot be empty!")
                MessageError(this.$t("home.discountcodenotempty"))
                return
            }
            let userInfo = getUserInfo()
            if (userInfo) {
                this.userinfo = JSON.parse(userInfo)
                let data = {
                    goodsid: this.form1.goodsid,
                    skuid: this.form1.skuid,
                    num: this.form1.num * 1,
                    discountcode: this.form1.discountcode,
                    userid: this.userinfo.id
                }
                let loading = startLoading()
                let res = await calprice(data)
                if (res.status == "200") {
                    if (0 != res.data && res.data < this.price) {
                        this.originalprice = this.price
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
        async getGoodsspuAllInfo() {
            let loading = startLoading()
            let res = await getGoodsspuAll()
            if (res.status == "200") {
                this.spuList = res.data
                loading.close()
            } else {
                MessageError(res.msg)
                loading.close()
            }
            loading.close()
        },
        tobug(spu) {
            this.spu = spu
            this.drawer1 = true
            this.form1 = {
                goodsid: spu.id,
                skuid: spu.skus[0].id,
                num: 1,
                buytype: "1",
                paycode: this.payOptions[0].value,
                discountcode: "",
            }
            this.price = spu.skus[0].price
            this.month = spu.skus[0].skuname
            this.giftstimes = spu.skus[0].giftstimes
        },
        async soonbug() {
            this.$refs.ruleForm1.validate((valid) => {
                if (valid) {
                    let userInfo = getUserInfo()
                    if (userInfo) {
                        this.userinfo = JSON.parse(userInfo)
                        if ("wintopay" != this.form1.paycode) {
                            // MessageError("This payment method is currently not supported!")
                            MessageError("이 결제 수단은 현재 지원되지 않습니다.")
                        } else {
                            this.drawer3 = true
                        }
                    }
                    console.log(this.form1)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async getCountryinfoAllInfo() {
            let loading = startLoading()
            let res = await getCountryinfoAll()
            if (res.status == "200") {
                this.countryList = res.data
                this.drawer2 = true
                loading.close()
            } else {
                MessageError(res.msg)
                loading.close()
            }
            loading.close()
        },
        async getProvinceAllInfo() {
            let loading = startLoading()
            let res = await getProvinceAll(this.form2.country)
            if (res.status == "200") {
                this.provinceList = res.data
                loading.close()
            } else {
                MessageError(res.msg)
                loading.close()
            }
            loading.close()
        },
        async getPayAddressByUserIdInfo() {
            let loading = startLoading()
            let res = await getPayAddressByUserId(this.userinfo.id)
            if (res.status == "200") {
                this.payaddress = res.data
                loading.close()
            } else {
                MessageError(res.msg)
                loading.close()
            }
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
        let usercode = this.$route.query.usercode;
        if (usercode) {
            this.$cookies.set("usercode", usercode)
        }
        this.getGoodsspuAllInfo()
        this.paytypeallInfo()
    }

}
</script>

<style scoped>
.homebg {
    width: 100%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/homebg.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.circularinfo {
    width: 60px;
    height: 60px;
    background: linear-gradient(141deg, #38B576 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 1;
    border-radius: 50px;
}

.text-wrapper {
    overflow-wrap: break-word;
    text-align: center;
    white-space: nowrap;
    line-height: 48px;
    margin: 15px -15px 0 -5px;
    font-family: Source Han Sans CN-Bold;
    color: #ffffff;
    font-size: 25px;
}

.texttitle {
    color: #43D98E;
    font-size: 35px;
    font-family: DIN-Bold-;
    padding: 0 10px;
}


.cardall {
    width: 100%;
    flex-flow: row wrap;
    display: flex;
    justify-content: center;
}

.cardall:after {
    content: "";
    width: 69%;
    margin: 3%;
}

.textitem {
    font-size: 14px;
    padding: 6px 0;
}

.box-card {
    width: 23%;
    min-height: 420px;
    color: #626262;
    background-color: #ffffff;
    margin: 1%;
    border: 0px;
    border-radius: 7px;
    position: relative;
}

/*虚线*/
.dashed {
    width: 120%;
    margin: 0 -20px 0 -20px;
    height: 1px;
    background-image: linear-gradient(to right, #626262 0%, #626262 50%, transparent 50%);
    background-size: 8px 2px;
    background-repeat: repeat-x;
}

.desccontent {
    margin: 0px;
}

.contenticon {
    margin-right: 5px;
    color: #43D98E
}

.icondiv {
    width: 50%;
    display: flex;
    flex-wrap: nowrap
}

.iconimg {
    width: 100px;
    height: 100px;
}

.contentdiv {
    margin-left: 60px;
    width: 100%
}

.icontitle {
    font-size: 20px;
    color: white;
    margin-top: 10px;
}

.icondesc {
    font-size: 12px;
    width: 50%;
    color: white;
    flex-direction: row;
    flex-wrap: wrap;
}

.skuname {
    border-left: 1px solid #DCDFE6;
    border-radius: 10px;
    margin-left: 3%;
    margin-top: 10px;
}

/deep/ .el-result__title {
    display: flex;
    justify-content: center;
}

/deep/ .el-result__title>p {
    width: 80%
}
</style>
