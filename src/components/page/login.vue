<template>
    <div style="margin-top: 100px;">
        <div class="justify-center mgtop">
            <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/alongshare.png" width="260px;">
        </div>
        <div class="justify-center mgtop">
            <!-- <span class="wellogin">Welcome to Login</span> -->
<!--            <span class="wellogin">로그인을 환영합니다</span>-->
            <span class="wellogin">{{$t('login.welcomelogin')}}</span>
        </div>
        <div class="justify-center mgtop">
            <el-form :model="form" :rules="rules" ref="ruleForm" style="width: 300px;">
                <el-form-item prop='email'>
                    <el-input :placeholder="$t('home.emailaddress')" clearable autocomplete="off" v-model='form.email' />
                </el-form-item>
                <el-form-item prop='password'>
                    <el-input :placeholder="$t('login.password')" clearable autocomplete="off" v-model='form.password' type="password"
                        show-password />
                </el-form-item>
                <el-form-item style="margin-bottom: 0px;">
                    <!-- <el-button type="primary" style="width:100%" @click="submitlogin">Login</el-button> -->
<!--                    <el-button type="primary" style="width:100%" @click="submitlogin">로그인을</el-button>-->
                    <el-button type="primary" style="width:100%" @click="submitlogin">{{$t('login.login')}}</el-button>
                    <div style="display: flex;justify-content: space-between">
<!--                        <el-button type="text" @click="updatepwd">비밀번호 변경</el-button>-->
<!--                        <el-button type="text" @click="reg">등록된 계좌</el-button>-->
                        <!-- <el-button type="text" @click="updatepwd">Change Password</el-button>
                        <el-button type="text" @click="reg">Registered Account</el-button> -->
                        <el-button type="text" @click="updatepwd">{{$t('login.updatepwd')}}</el-button>
                        <el-button type="text" @click="reg">{{$t('login.reg')}}</el-button>
                    </div>
                </el-form-item>
                <el-form-item class="justify-between" prop='checked'>
                    <el-checkbox v-model="form.checked" style="width: 300px;">
                        <span style="font-size: 12px;word-break:normal;word-wrap:normal;white-space:pre-wrap">
                            <!-- by clicking <span style="color: #43D98E">"Login"</span>
                            You signify that you have read and accept our terms and conditions
                            Please read our Privacy Policy to find out how your data is processed -->
                            <span style="color: #43D98E">"{{$t('login.login')}}"</span>
                            {{$t('login.agreement')}}
                        </span>
                    </el-checkbox>
                </el-form-item>
                <el-form-item>
                    <div class="justify-around">
                        <div class="fastlogin"></div>
                        <div style="width: 30%" class="justify-center"><span style="color: #ffffff">{{$t('login.quicklogin')}}</span></div>
                        <div class="fastlogin"></div>
                        <!--<el-divider><span style="color: #ffffff">快速登录</span></el-divider>-->
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="justify-around">

                        <fb-signin-button :params="fbSignInParams" @success="onSignInSuccess" @error="onSignInError"
                            style="cursor: pointer">
                            <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/facebook-login.png"
                                class="thirdlogin">
                        </fb-signin-button>
                        <div v-google-signin-button="clientId" style="cursor: pointer">
                            <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/google-login.png"
                                class="thirdlogin">
                        </div>
                    </div>
                </el-form-item>
            </el-form>
        </div>

        <el-dialog customClass="customWidth" :visible.sync="dialogFormVisible" :close-on-press-escape="false"
            :close-on-click-modal="false" :before-close="closeDialog">
            <div class="justify-center">
                <!-- <span class="regtext">Register account</span> -->
<!--                <span class="regtext">등록된 계좌</span>-->
                <span class="regtext">{{$t('login.reg')}}</span>
            </div>
            <el-form :model="formReg" :rules="rulesReg" ref="ruleReg">
                <el-form-item prop='name'>
                    <el-input :placeholder="$t('login.name')" clearable autocomplete="off" v-model='formReg.name' />
                </el-form-item>
                <el-form-item prop='email'>
                    <el-input :placeholder="$t('home.emailaddress')" clearable autocomplete="off" v-model='formReg.email' />
                </el-form-item>
                <el-form-item prop='code'>
                    <el-input :placeholder="$t('login.verificationcode')" v-model="formReg.code" style="color: #43D98E">
                        <template slot="append">
                            <el-button @click="sendCode" id="sendcode" style="" type="primary" :disabled="!show">
                                <!-- <span v-show="show">Send Code</span> -->
                                <span v-show="show">{{$t('login.sendcode')}}</span>
                                <span v-show="!show" class="count">{{ count }} s</span>
                            </el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop='password'>
                    <el-input :placeholder="$t('login.password')" clearable autocomplete="off" v-model='formReg.password'
                        show-password />
                </el-form-item>
                <el-form-item prop='agapassword'>
                    <el-input :placeholder="$t('login.password')" clearable autocomplete="off" v-model='formReg.agapassword'
                        show-password />
                </el-form-item>
            </el-form>
            <div class="justify-center">
                <!-- <el-button type="primary" @click="submitReg" style="width: 80%;font-size: 1.2em" round>Register</el-button> -->
<!--                <el-button type="primary" @click="submitReg" style="width: 80%;font-size: 1.2em" round>등록하다</el-button>-->
                <el-button type="primary" @click="submitReg" style="width: 80%;font-size: 1.2em" round>{{$t('login.register')}}</el-button>
            </div>
        </el-dialog>

        <el-dialog customClass="customWidth" :visible.sync="dialogFormVisiblePwd" :close-on-press-escape="false"
            :close-on-click-modal="false" :before-close="closeDialogPwd">
            <div class="justify-center">
                <!-- <span class="regtext">Change Password</span> -->
<!--                <span class="regtext">비밀번호 변경</span>-->
                <span class="regtext">{{$t('login.changepassword')}}</span>
            </div>
            <el-form :model="formPwd" :rules="rulesPwd" ref="rulePwd">
                <el-form-item prop='email'>
                    <!-- <el-input placeholder='Email' clearable autocomplete="off" v-model='formPwd.email' /> -->
                    <el-input :label="$t('home.emailaddress')" clearable autocomplete="off" v-model='formPwd.email' />
                </el-form-item>
                <el-form-item prop='code'>
                    <!-- <el-input placeholder="Verification Code" v-model="formPwd.code" style="color: #43D98E"> -->
<!--                    <el-input placeholder="인증 코드" v-model="formPwd.code" style="color: #43D98E">-->
                    <el-input :placeholder="$t('login.verificationcode')" v-model="formPwd.code" style="color: #43D98E">
                        <template slot="append">
                            <el-button @click="sendCodePwd" id="sendcodePwd" style="" type="primary" :disabled="!show">
                                <!-- <span v-show="show">Send Code</span> -->
                                <span v-show="show">{{$t('login.sendcode')}}</span>
                                <span v-show="!show" class="count">{{ count }} s</span>
                            </el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop='password'>
                    <!-- <el-input placeholder='Password' clearable autocomplete="off" v-model='formPwd.password'show-password /> -->
<!--                    <el-input placeholder='비밀번호' clearable autocomplete="off" v-model='formPwd.password' show-password />-->
                    <el-input :placeholder="$t('login.password')" clearable autocomplete="off" v-model='formPwd.password' show-password />
                </el-form-item>
                <el-form-item prop='agapassword'>
                    <!-- <el-input placeholder='Repeat Password' clearable autocomplete="off" v-model='formPwd.agapassword' -->
<!--                    <el-input placeholder='비밀번호를 다시 입력하세요' clearable autocomplete="off" v-model='formPwd.agapassword' show-password />-->
                    <el-input :placeholder="$t('login.agapassword')" clearable autocomplete="off" v-model='formPwd.agapassword' show-password />
                </el-form-item>
            </el-form>
            <div class="justify-center">
                <!-- <el-button type="primary" @click="submitPwd" style="width: 80%;font-size: 1.2em" round>Modify</el-button> -->
<!--                <el-button type="primary" @click="submitPwd" style="width: 80%;font-size: 1.2em" round>수정하다</el-button>-->
                <el-button type="primary" @click="submitPwd" style="width: 80%;font-size: 1.2em" round>{{$t('login.modify')}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import store from '@/store/index';
import GoogleSignInButton from 'vue-google-signin-button-directive'
import jsonwebtoken from 'jsonwebtoken'

const TIME_COUNT = 60; //更改倒计时时间
import { getRegisterCode, login, register, googlelogin, facebooklogin, getResetPwdCode, updatePwd } from "@/request/requests";
import { MessageError, MessageSuccess, startLoading, getUserInfo } from "@/util/util"
export default {
    directives: {
        GoogleSignInButton
    },
    name: "login",
    data() {
        let validateEmail = (rule, value, callback) => {
            if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value))) {
                callback(new Error(this.$t("home.emailerror")));
            } else {
                callback();
            }
        };
        let validateChecked = (rule, value, callback) => {
            if (value === '' || !value) {
                callback(new Error(this.$t("login.checkagreement")));
            } else {
                callback();
            }
        };
        let validatePswLen = (rule, value, callback) => {
            if (!(/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,16}$/.test(value))) {
                // callback(new Error('The password meets uppercase and lowercase letters, numbers and special characters, any combination of three of them, and the length is between 8 and 16!'));
                // callback(new Error('비밀번호는 대문자와 소문자, 숫자, 특수문자 중 3가지 조합을 모두 충족하며, 길이는 8자에서 16자 사이!'));
                callback(new Error(this.$t("login.validatepswlen")));
            } else {
                callback();
            }
        };
        let validatePsw = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t("login.passwordagain")));
            } else if (value !== this.formReg.password) {
                callback(new Error(this.$t("login.validatepswlen")));
            } else {
                callback();
            }
        };
        let validatePwd = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t("login.passwordagain")));
            } else if (value !== this.formPwd.password) {
                callback(new Error(this.$t("login.validatepswlen")));
            } else {
                callback();
            }
        };
        return {
            formReg: this.initFormReg(),
            formPwd: this.initFormPwd(),
            rulesPwd: {
                email: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.emailaddress'), trigger: 'blur' },
                    { validator: validateEmail, trigger: 'blur' }],
                code: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.verificationcode'), trigger: 'blur' },],
                password: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.password'), trigger: 'blur' },
                    { validator: validatePswLen, trigger: 'blur' },
                ],
                agapassword: [
                    { required: true, message: this.$t('login.passwordagain'), trigger: 'blur' },
                    { validator: validatePwd, trigger: 'blur' }],
            },
            rulesReg: {
                name: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.name'), trigger: 'blur' },],
                email: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.emailaddress'), trigger: 'blur' },
                    { validator: validateEmail, trigger: 'blur' }],
                code: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.verificationcode'), trigger: 'blur' },],
                password: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.password'), trigger: 'blur' },
                    { validator: validatePswLen, trigger: 'blur' },
                ],
                agapassword: [
                    { required: true, message: this.$t('login.passwordagain'), trigger: 'blur' },
                    { validator: validatePsw, trigger: 'blur' }],
            },
            form: this.initForm(),
            rules: {
                email: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.emailaddress'), trigger: 'blur' },
                    { validator: validateEmail, trigger: 'blur' }],
                password: [
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('login.password'), trigger: 'blur' },],
                checked: [
                    { required: true, message: this.$t("login.checkagreement"), trigger: 'blur' },
                    { validator: validateChecked, trigger: 'blur' }],
            },
            show: true,
            count: '',   // 初始化次数
            timer: null,
            clientId: '398083746235-90dd311t5aem2j1rjhes07sto6e5no44.apps.googleusercontent.com',
            fbSignInParams: {
                scope: 'email,user_likes',
                return_scopes: true
            },
            dialogFormVisible: false,
            dialogFormVisiblePwd: false,
        }
    },
    methods: {
        OnGoogleAuthSuccess(idToken) {
            const jsondate = jsonwebtoken.decode(idToken);
            let data = {
                usercode: this.$cookies.get("usercode"),
                name: jsondate.name,
                email: jsondate.email,
                avatar: jsondate.picture,
                thirduserid: jsondate.sub
            }
            this.googlelogin(data)
        },
        OnGoogleAuthFail(error) {
            console.log(error)
            MessageError(error)
        },
        onSignInSuccess(response) {
            console.log(response) //返回第三方的登录信息 tolen等
            if (response.status == 'connected') {
                let data = {
                    usercode: this.$cookies.get("usercode"),
                    token: response.authResponse.accessToken,
                }
                console.log(response.authResponse.accessToken)
                console.log(data)
                this.facebooklogin(data)
            }
        },
        onSignInError(error) {
            //登录失败回调
            console.log(error)
            MessageError(error)
        },
        initForm() {
            return {
                email: "",
                password: "",
                checked: "",
            }
        },
        initFormReg() {
            return {
                name: "",
                email: "",
                code: "",
                password: "",
                agapassword: "",
                usercode: this.$cookies.get("usercode"),
            }
        },
        initFormPwd() {
            return {
                email: "",
                code: "",
                password: "",
                agapassword: "",
            }
        },
        sendCode() {
            if (!(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6})$/.test(this.formReg.email))) {
                MessageError(this.$t("home.emailerror"));
                return false;
            } else {
                if (!this.timer) {
                    this.toSendCode()
                }
            }
        },
        async toSendCode() {
            let loding = startLoading()
            let res = await getRegisterCode(this.formReg.email)
            if (res.status == "200") {
                loding.close()
                MessageSuccess(this.$t("home.verificationsend"))
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);  // 清除定时器
                        this.timer = null;
                    }
                }, 1000)
            } else {
                loding.close()
                MessageError(res.msg)
            }
        },
        sendCodePwd() {
            if (!(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6})$/.test(this.formPwd.email))) {
                MessageError(this.$t("home.emailerror"));
                return false;
            } else {
                if (!this.timer) {
                    this.toSendCodePwd()
                }
            }
        },
        async toSendCodePwd() {
            let loding = startLoading()
            let res = await getResetPwdCode(this.formPwd.email)
            if (res.status == "200") {
                loding.close()
                MessageSuccess(this.$t("home.verificationsend"))
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);  // 清除定时器
                        this.timer = null;
                    }
                }, 1000)
            } else {
                loding.close()
                MessageError(res.msg)
            }
        },
        submitlogin() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.tologin()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        updatepwd() {
            this.dialogFormVisiblePwd = true
        },
        reg() {
            this.dialogFormVisible = true
        },
        closeDialog() {
            this.dialogFormVisible = false
            this.formReg = this.initFormReg()
        },
        closeDialogPwd() {
            this.dialogFormVisiblePwd = false
            this.formReg = this.initFormPwd()
        },
        submitPwd() {
            this.$refs.rulePwd.validate((valid) => {
                if (valid) {
                    this.toupdatepwd()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        async toupdatepwd() {
            let loading = startLoading()
            let res = await updatePwd(this.formPwd)
            if (res.status == "200") {
                loading.close()
                MessageSuccess("Successfully modified!")
                this.closeDialogPwd()
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
        },
        submitReg() {
            this.$refs.ruleReg.validate((valid) => {
                if (valid) {
                    this.toregister()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        async toregister() {
            let loading = startLoading()
            let res = await register(this.formReg)
            if (res.status == "200") {
                loading.close()
                MessageSuccess("Registration success!")
                this.closeDialog()
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
        },
        async tologin() {
            let loading = startLoading()
            let res = await login(this.form)
            if (res.status == "200") {
                loading.close()
                MessageSuccess("Login successful!")
                this.loginRes(res);
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
        },
        loginRes: function (result) {
            let { userInfo, token, deadline } = result.data;
            let { name: name } = userInfo;
            this.$cookies.set("userInfo", JSON.stringify(userInfo), "7d");
            this.$cookies.set("token", token, "7d");
            this.$cookies.set("deadline", Date.parse(deadline), "7d");
            this.$notification.success({
                message: "Login successful",
                description: `Welcome back，${name}`
            });
            if (localStorage.lang=='kr'){
                store.commit('setMenuListData', store.state.map.menuListLogin)
            }else if (localStorage.lang=='en'){
                store.commit('setMenuListData', store.state.map.menuListLoginEn)
            }else if (localStorage.lang=='it'){
                store.commit('setMenuListData', store.state.map.menuListLoginIt)
            }

            this.$router.push({ name: "home" });
        },
        async facebooklogin(data) {
            let loading = startLoading()
            let res = await facebooklogin(data)
            if (res.status == "200") {
                loading.close()
                MessageSuccess("Login successful!")
                this.loginRes(res);
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
        },
        async googlelogin(data) {
            let loading = startLoading()
            let res = await googlelogin(data)
            if (res.status == "200") {
                loading.close()
                MessageSuccess("Login successful!")
                this.loginRes(res);
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
        },
    },
    created() {
        let usercode = this.$route.query.usercode;
        if (usercode) {
            this.$cookies.set("usercode", usercode)
        }
        let userInfo = getUserInfo()
        if (userInfo) {
            this.$router.push({ path: "userinfo" });
        } else {
            if (localStorage.lang=='kr'){
                store.commit('setMenuListData', store.state.map.menuListNoLogin)
            }else if (localStorage.lang=='en'){
                store.commit('setMenuListData', store.state.map.menuListNoLoginEn)
            }else if (localStorage.lang=='it'){
                store.commit('setMenuListData', store.state.map.menuListNoLoginIt)
            }
        }
    }
}
</script>

<style scoped>
.wellogin {
    height: 48px;
    font-size: 32px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    line-height: 38px;
}

.mgtop {
    margin-top: 10px;
}

#sendcode {
    background-color: #43D98E;
    border-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0px;
    color: #ffffff;
    font-family: PingFang SC
}

#sendcodePwd {
    background-color: #43D98E;
    border-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0px;
    color: #ffffff;
    font-family: PingFang SC
}

/deep/ .el-input-group__append {
    border: 0px;
}

/deep/ .el-input__inner {
    height: 48px !important;
    border: 1px solid #43D98E;
}

.el-button--primary {
    height: 48px !important;
}

.fastlogin {
    width: 35%;
    line-height: 40px;
    margin-top: 19px;
    height: 1px;
    border: 1px solid #CBCCCD;
    background-color: #CBCCCD
}

.thirdlogin {
    width: 70px;
    height: 70px;
}

.regtext {
    font-weight: bolder;
    font-size: 28px;
    color: black
}

/deep/ .customWidth {
    width: 500px;
}

/deep/ .el-dialog {
    border-radius: 10px;
}
</style>
