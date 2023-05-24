<template>
    <div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane disabled></el-tab-pane>
<!--                <el-tab-pane label="판촉 정보" name="first" style="background-color: black">-->
                <el-tab-pane :label="$t('friends.promotioninfo')" name="first" style="background-color: black">
                <!-- <el-tab-pane label="Promotion information" name="first" style="background-color: black"> -->
                    <div class="cardall">
                        <div class="img1">
                            <div style="padding: 10px 0 0 20px;height: 30%">
<!--                                <span style="font-size: 20px;color: white;font-family: 黑体">현재 레벨</span>-->
                                <span style="font-size: 20px;color: white;font-family: 黑体">{{$t('friends.currentlevel')}}</span>
                                <!-- <span style="font-size: 20px;color: white;font-family: 黑体">current level</span> -->
                                <el-tooltip class="item" effect="dark"
                                    :content="$t('friends.content')"
                                    placement="top-start">
                                    <el-button type="text" style="margin-left: 10px;" icon="el-icon-question"></el-button>
                                </el-tooltip>
                            </div>
                            <div style="display: flex;justify-content: space-around;height: 50%">
                                <div style="color: white;width: 50%" class="justify-center">
                                    <div style="margin-top: 30px;">
                                        <span style="font-size: 20px;font-family: 黑体">{{
                                            userprofile.introlevel.level.substr(0, 2) }}</span>
                                        <span style="font-size: 40px;font-weight: bolder">{{
                                            userprofile.introlevel.level.substring(2) }}</span>
                                    </div>
                                </div>
                                <div style="width: 50%;" class="justify-center">
                                    <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/crown.png"
                                        style="width: 100px;height: 80px;">
                                </div>
                            </div>
                            <div class="gradedesc">

<!--                                <span class="gradetext">구성원의 역할</span>-->
                                <!-- <span class="gradetext">The role of members</span> -->
                                <span class="gradetext">{{$t('friends.rolemembers')}}</span>
                            </div>
                        </div>
                        <div class="img2">
                            <div style="padding: 10px 0 0 20px;color: white;">
<!--                                <span :class="{ 'highlight': tglink, 'obscurity': !tglink }" @click="switchdata(1)">프로모션 링크 </span>-->
                                <!-- <span :class="{ 'highlight': tglink, 'obscurity': !tglink }"  @click="switchdata(1)">Promotional Links </span> -->
                                <span :class="{ 'highlight': tglink, 'obscurity': !tglink }" @click="switchdata(1)">{{$t('friends.promotionallinks')}}</span>
                                <span style="padding: 5px;">/</span>
<!--                                <span :class="{ 'highlight': !tglink, 'obscurity': tglink }" @click="switchdata(2)">할인 코드</span>-->
                                    <!-- <span :class="{ 'highlight': !tglink, 'obscurity': tglink }" @click="switchdata(2)">Discount Codes</span> -->
                                <span :class="{ 'highlight': !tglink, 'obscurity': tglink }" @click="switchdata(2)">{{$t('friends.discountcodes')}}</span>
                            </div>
                            <div style="display: flex;justify-content: space-around;color: white;" v-show="tglink">
                                <div style="width: 70%">
                                    <div style="margin-top: 10px;padding-left: 10%">
                                        <div><span class="link">{{ userprofile.referrallink }}</span></div>
                                        <div style="margin-top: 10px;">
<!--                                            <el-button type="primary" size="small" @click="copyLink(userprofile.referrallink)">복사</el-button>-->
                                            <el-button type="primary" size="small" @click="copyLink(userprofile.referrallink)">{{$t('friends.copy')}}</el-button>
                                            <!-- @click="copyLink(userprofile.referrallink)">copy</el-button> -->
                                            <!--  <el-button type="primary" size="small">分享</el-button>-->
                                        </div>
                                        <div style="margin-top: 10px;">

<!--                                            <span style="font-size: 14px;">할인율 </span>-->
                                            <span style="font-size: 14px;">{{$t('friends.rebateratio')}} </span>
                                            <!-- <span style="font-size: 14px;">The rebate ratio is </span> -->
                                            <span style="font-size: 30px;font-weight: bolder;margin-left: 5px;">{{userprofile.rebateratio * 100 }}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 30%;" class="justify-center">
                                    <vue-qr :text="userprofile.referrallink" style="width: 80px;height: 80px;"></vue-qr>
                                </div>
                            </div>
                            <div style="display: flex;justify-content: space-around;color: white;" v-show="discode">
                                <div style="width: 70%">
                                    <div style="margin-top: 10px;padding-left: 10%">
                                        <div><span class="link">{{ userprofile.discountcode }}</span></div>
                                        <div style="margin-top: 10px;">
                                            <el-button type="primary" size="small" @click="copyLink(userprofile.discountcode)">{{$t('friends.copy')}}</el-button>
                                        </div>
                                        <!-- @click="copyLink(userprofile.discountcode)">copy</el-button>
                                        </div> -->
                                        <div style="margin-top: 10px;" v-if="userprofile.discode.type == '1'">
<!--                                            <span style="font-size: 14px;">할인율</span>-->
                                            <span style="font-size: 14px;">{{$t('friends.discountratio')}}</span>
                                            <!-- <span style="font-size: 14px;">Discount ratio</span> -->
                                            <span style="font-size: 30px;font-weight: bolder;margin-left: 5px;">{{ userprofile.discode.discountratio * 100 }}%</span>
                                        </div>
                                        <div style="margin-top: 10px;" v-else>
<!--                                            <span style="font-size: 14px;">최저 할인율</span>-->
                                            <!-- <span style="font-size: 14px;">Lowest discount ratio</span> -->
                                            <span style="font-size: 14px;">{{$t('friends.lowestdiscountratio')}}</span>
                                            <span style="font-size: 30px;font-weight: bolder;margin-left: 5px;">{{userprofile.discode.discountratio * 100 }}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 30%;" class="justify-center"></div>
                            </div>
                        </div>
                        <div class="img3">
                            <div style="padding: 10px 0 0 20px;">
<!--                                <span style="font-size: 20px;color: white;font-family: 黑体">지갑 및 포인트</span>-->
                                <span style="font-size: 20px;color: white;font-family: 黑体">{{$t('friends.walletsandpoints')}}</span>
                                <!-- <span style="font-size: 20px;color: white;font-family: 黑体">Wallets and Points</span> -->
                            </div>
                            <div style="display: flex;justify-content: space-around;color: white;">
                                <div style="width: 50%;" class="justify-center">
                                    <div style="width: 80%">
                                        <div style="margin-left: 10px;">
                                            <span style="font-size: 18px;">USD</span>
                                            <span style="font-size: 35px;font-weight: bolder;padding: 10px;">{{ userprofile.wallet }}</span>
                                        </div>
                                        <div style="line-height: 12px;">
                                            <!-- <span style="display: flex;flex-wrap: wrap;font-size: 12px;">您申请提现后，我们会在3个工作日内审核并打款，最终到账时间以银行或支付机构为准</span>-->
<!--                                            <span style="word-break:break-all;font-size: 12px;">출금 신청 후 영업일 기준 3일 이내에 검토 후 입금해 드립니다.</span>-->
                                            <span style="word-break:break-all;font-size: 12px;">{{$t('friends.applywithdrawal')}}</span>
                                                <!-- <span style="word-break:break-all;font-size: 12px;">After you apply for
                                                withdrawal, we will review and make payment within 3 working days</span> -->
                                        </div>
                                        <div class="justify-between" style="padding: 10px 0;">
<!--                                            <el-button type="primary" size="small" @click="toWithdrawal">철회하다</el-button>-->
                                            <el-button type="primary" size="small" @click="toWithdrawal">{{$t('friends.withdraw')}}</el-button>
                                                <!-- @click="toWithdrawal">Withdraw</el-button> -->
<!--                                            <el-button type="primary" size="small" @click="toLog">기록</el-button>-->
                                            <!-- <el-button type="primary" size="small" @click="toLog">Record</el-button> -->
                                            <el-button type="primary" size="small" @click="toLog">{{$t('friends.record')}}</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="dashed"></div>
                                <div style="width: 50%;" class="justify-center">
                                    <div style="width: 80%">
                                        <div style="margin-left: 10px;">
<!--                                            <span style="font-size: 18px;">완전한</span>-->
                                            <span style="font-size: 18px;">{{$t('friends.integral')}}</span>
                                            <!-- <span style="font-size: 18px;">Integral</span> -->
                                            <span style="font-size: 35px;font-weight: bolder;padding: 10px;">{{userprofile.integral }}</span>
                                        </div>
                                        <div style="margin-left: 10px;">
<!--                                            <span style="word-break:normal;word-wrap:normal;white-space:pre-wrap;font-size: 12px;">포인트는 복권에 사용할 수 있습니다</span>-->
                                            <span style="word-break:normal;word-wrap:normal;white-space:pre-wrap;font-size: 12px;">{{$t('friends.pointsused')}}</span>
                                            <!-- style="word-break:normal;word-wrap:normal;white-space:pre-wrap;font-size: 12px;">Points
                                            can be used for lottery</span>？ -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="background-color: white;margin-top: 20px;border-radius: 7px;">
                        <div style="padding: 10px 0 0 40px;font-size: 20px;font-weight: bolder">
<!--                            주문 상세 정보-->
                            {{$t('friends.orderdetails')}}
                            <!-- <div style="padding: 10px 0 0 40px;font-size: 20px;font-weight: bolder">
                            Order Details -->
                        </div>
                        <el-data-table ref="table1" v-bind="tableConfig1" :columns="columns1"
                            style="margin-left: 30px;margin-top: 10px;width: 95%;height: 600px;margin-bottom: 40px;">
                        </el-data-table>
                        <div
                            style="margin-top: -40px;padding:0 0 20px 40px;font-size: 20px;font-weight: bolder;color: black">
                            <span>
                                {{$t('friends.orderamount')}}：USD
                                <!--                                주문 금액: USD-->
                                <!-- Order amount：USD -->
                                <span style="color: #43D98E">0.00</span>
                                EUR
                                <span style="color: #43D98E">0.00</span>
                            </span>

                            <span style="margin-left: 20px;">
<!--                                이익:USD-->
                               {{$t('friends.earnings')}}：USD
                                <!-- Earnings：USD -->
                                <span style="color: #43D98E">0.00</span>
                                EUR
                                <span style="color: #43D98E">0.00</span>
                            </span>
                        </div>
                    </div>
                </el-tab-pane>
<!--                <el-tab-pane label="출금 기록" name="second">-->
                <el-tab-pane :label="$t('friends.withdrawalsrecord')" name="second">
                <!-- <el-tab-pane label="Withdrawals record" name="second"> -->
                    <el-data-table ref="table" v-bind="tableConfig" :columns="columns"
                        style="margin-left: 30px;margin-top: 10px;width: 95%;height: 600px;margin-bottom: 40px;">
                    </el-data-table>
                </el-tab-pane>
            </el-tabs>

            <el-dialog customClass="customWidth" title="Withdrawal application" :visible.sync="dialogFormVisible"
                :close-on-press-escape="false" :close-on-click-modal="false" :before-close="closeDialog">
                <el-form :model="form" :rules="rules" ref="ruleUser">
<!--                    <el-form-item label='계정' prop='account' :label-width="formLabelWidth">-->
                    <el-form-item :label="$t('friends.accounts')" prop='account' :label-width="formLabelWidth">
                    <!-- <el-form-item label='Accounts' prop='account' :label-width="formLabelWidth"> -->
                        <el-input placeholder='Please enter the receiving account' clearable autocomplete="off" v-model='form.account' size="small" />
                    </el-form-item>
<!--                    <el-form-item label='계정 유형' prop='type' :label-width="formLabelWidth">-->
                    <el-form-item :label="$t('friends.accounttype')" prop='type' :label-width="formLabelWidth">
                    <!-- <el-form-item label='Account type' prop='type' :label-width="formLabelWidth"> -->
                        <el-select v-model="form.type" placeholder="please choose">
                            <el-option v-for="item in accountTypeOptions" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('friends.withdrawalamount')" prop='price' :label-width="formLabelWidth">
<!--                    <el-form-item label='인출 금액.' prop='price' :label-width="formLabelWidth">-->
                    <!-- <el-form-item label='Withdrawal Amount' prop='price' :label-width="formLabelWidth"> -->
                        <el-input-number placeholder='Please enter the withdrawal amount' clearable autocomplete="off"
                            v-model='form.price' :precision="2" :step="0.1" :max="userprofile.wallet"></el-input-number>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
<!--                    <el-button @click="closeDialog()">취소</el-button>-->
                    <el-button @click="closeDialog()">{{$t('friends.cancel')}}</el-button>
                    <!-- <el-button @click="closeDialog()">Cancel</el-button> -->
<!--                    <el-button type="primary" @click="submitUser">제출</el-button>-->
                    <el-button type="primary" @click="submitUser">{{$t('friends.submit')}}</el-button>
                    <!-- <el-button type="primary" @click="submitUser">Submit</el-button> -->
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { getUserByid, insertWithdrawal } from "@/request/requests";
import { MessageError, MessageSuccess, getUserInfo } from "@/util/util"
import VueQr from 'vue-qr'
export default {
    components: {
        VueQr,
    },
    name: "friends",
    data() {
        let validatePrice = (rule, value, callback) => {
            if (value <= 0) {
                callback(new Error(this.$t('friends.greaterthan')));
                // callback(new Error('Amount must be greater than 0!'));
            } else {
                callback();
            }
        };
        const comstatusOptions = [
            {
                value: "1",
                // label: "正常"
                // label: "표준"
                label: this.$t('friends.normal'),
            },
            {
                value: "0",
                // label: "无效"
                // label: "무효"
                label: this.$t('friends.invalid'),
            },
        ]
        const accountTypeOptions = [
            {
                value: "1",
                // label: "은행카드"
                // label: "bank card"
                label: this.$t('friends.bankcard'),
            },
            {
                value: "2",
                label: "paypal"
            },
        ]
        const typeOptions = [
            {
                value: "1",
                // label: "판촉 링크"
                // label: "Promotion link"
                label: this.$t('friends.promotionlink'),
            },
            {
                value: "2",
                // label: "할인 코드"
                // label: "Discount code"
                label: this.$t('friends.discountcode'),
            },
        ]
        const statusOptions = [
            {
                value: "1",
                // label: "승인 대기 중"
                // label: "Waiting for approval"
                label: this.$t('friends.waitingforapproval'),
            },
            {
                value: "2",
                // label: "지불 대기 중"
                // label: "Waiting for payment"
                label: this.$t('friends.waitingforpayment'),
            },
            {
                value: "3",
                // label: "통과하지 못함"
                // label: "not pass"
                label: this.$t('friends.notpass'),
            },
            {
                value: "4",
                // label: "지불됨"
                // label: "Paid"
                label: this.$t('friends.paid'),
            },
        ]
        const columns = [
            { prop: 'id', label: this.$t('friends.cashwithdrawalid') },
            // { prop: 'id', label: 'Cash withdrawal ID' },
            { prop: 'account', label: this.$t('friends.accountsreceivable') },
            // { prop: 'account', label: 'Accounts receivable' },
            { prop: 'type', label:  this.$t('friends.accounttype'), formatter: row => this.accountTypeState(row) },
            // { prop: 'type', label: 'account type', formatter: row => this.accountTypeState(row) },
            { prop: 'price', label: this.$t('friends.amount') },
            // { prop: 'price', label: 'Amount(USD)' },
            { prop: 'status', label: this.$t('friends.status'), formatter: row => this.statusState(row) },
            // { prop: 'status', label: 'status', formatter: row => this.statusState(row) },
            { prop: 'createTime', label: this.$t('friends.applicationtime') },
            // { prop: 'createTime', label: 'Application time' },
            { prop: 'remark', label: this.$t('friends.processingresults')},
            // { prop: 'remark', label: 'Processing results' },
        ]
        const columns1 = [
            { prop: 'orderid', label: this.$t('friends.orderid') },
            // { prop: 'orderid', label: 'order ID' },
            { prop: 'useremail', label: this.$t('friends.useramount') },
            // { prop: 'useremail', label: 'User Amount' },
            { prop: 'sku.goodsSpu.goodsname', label: 'SKU' },
            { prop: 'sku.skuname',label: this.$t('friends.duration') },
            // { prop: 'sku.skuname', label: 'duration' },
            { prop: 'type', label: this.$t('friends.promotiontype'), formatter: row => this.typeState(row) },
            // { prop: 'type', label: 'promotion type', formatter: row => this.typeState(row) },
            // {prop: 'currency',label: '币种'},
            // { prop: 'status', label: '佣金状态', formatter: row => this.comstatusState(row) },
            { prop: 'status', label: this.$t('friends.status'), formatter: row => this.comstatusState(row) },
            { prop: 'price', label: this.$t('friends.orderamount') },
            // { prop: 'price', label: 'Order Amount(USD)' },
            { prop: 'profit', label: this.$t('friends.eainings')  },
            // { prop: 'profit', label: 'Eainings(USD)' },
            { prop: 'createTime', label: this.$t('friends.createtime') },
            // { prop: 'createTime', label: 'createTime' },
        ]
        return {
            form: this.initForm(),
            dialogFormVisible: false,
            formLabelWidth: "100px",
            typeOptions,
            statusOptions,
            comstatusOptions,
            accountTypeOptions,
            tglink: true,
            discode: false,
            switchcss: true,
            activeName: 'first',
            columns,
            columns1,
            tableConfig: {
                url: '',
                dataPath: 'data.list',
                totalPath: 'data.total',
                paginationSize: 10,
                extraButtons: [
                    {
                        type: 'primary',
                        text: 'exchange',
                        icon: 'el-icon-folder-checked',
                        atClick: async row => {
                            this.handleExchange(row)
                            return false
                        },
                    },
                ],
                headerButtons: [],
                hasDelete: false,
                hasEdit: false,
                hasOperation: false,
                hasNew: false,
                operationAttrs: {
                    width: '100px',
                    fixed: 'right',
                },
            },
            tableConfig1: {
                url: '',
                dataPath: 'data.list',
                totalPath: 'data.total',
                paginationSize: 10,
                extraButtons: [],
                headerButtons: [],
                hasDelete: false,
                hasEdit: false,
                hasOperation: false,
                hasNew: false,
                operationAttrs: {
                    width: '100px',
                    fixed: 'right',
                },
            },
            userinfo: "",
            userprofile: {},
            rules: {
                account: [
                    // { required: true, message: '수금 계좌를 입력하십시오.', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('friends.receivingaccount'), trigger: 'blur' },],
                    // { required: true, message: 'Please enter the receiving account', trigger: 'blur' },],
                price: [
                    // { required: true, message: '출금 금액을 입력하십시오.', trigger: 'blur' },
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('friends.withdrawalamount'), trigger: 'blur' },
                    // { required: true, message: 'Please enter the withdrawal amount', trigger: 'blur' },
                    { validator: validatePrice, trigger: 'blur' },
                ],
                type: [
                    // { required: true, message: '계정 유형을 입력하십시오.', trigger: 'blur' },
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('friends.accounttype'), trigger: 'blur' },
                ],
                    // { required: true, message: 'Please enter account type', trigger: 'blur' },],
            },
        }
    },
    methods: {
        comstatusState(row) {
            let data
            this.comstatusOptions.forEach(r => {
                if (r.value == row.status) {
                    data = r.label
                }
            })
            return data
        },
        handleClick(tab) {
            if (tab.index == '1') {
                this.handleTab1()
            }
            if (tab.index == '2') {
                this.handleTab2()
            }
        },
        toWithdrawal() {
            if (this.userprofile.wallet <= 0) {
                // MessageError("현금 인출할 수 있는 금액이 없다.")
                // MessageError("无可提现金额")
                MessageError(this.$t('friends.nowithdrawableamount'))
                return
            }
            this.dialogFormVisible = true
        },
        toLog() {
            this.activeName = "second"
            this.handleTab2()
        },
        closeDialog() {
            this.dialogFormVisible = false
            this.form = this.initForm();
            this.$refs.ruleUser.clearValidate();
        },
        async submitUser() {
            this.$refs.ruleUser.validate((valid) => {
                if (valid) {
                    this.operatorUser()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async operatorUser() {
            this.form.userid = this.userprofile.id
            let res = await insertWithdrawal(this.form)
            if (res.status == "200") {
                MessageSuccess(res.msg)
                this.getUserByidInfo()
                this.closeDialog()
            } else {
                MessageError(res.msg)
            }
        },
        initForm() {
            return {
                userid: "", // 用户id
                account: "", // 收款账户
                price: "", // 提现金额
                type: "", // 账户类型
                status: "", // 提现状态
                operid: "", // 操作人id
                opername: "", // 操作人
                remark: "", // 备注
            }
        },
        typeState(row) {
            let data
            this.typeOptions.forEach(r => {
                if (r.value == row.type) {
                    data = r.label
                }
            })
            return data
        },
        statusState(row) {
            let data
            this.statusOptions.forEach(r => {
                if (r.value == row.status) {
                    data = r.label
                }
            })
            return data
        },
        accountTypeState(row) {
            let data
            this.accountTypeOptions.forEach(r => {
                if (r.value == row.type) {
                    data = r.label
                }
            })
            return data
        },
        switchdata(val) {
            if (val == 1) {
                this.tglink = true
                this.discode = false
            } else {
                this.tglink = false
                this.discode = true
            }
        },
        copyLink(val) {
            this.$copyText(val).then(
                function (e) {
                    console.log("copy arguments e:", e);
                    MessageSuccess(this.$t('friends.copysuccessfully'));
                    // MessageSuccess("Copy successfully!");
                },
                function (e) {
                    console.log("copy arguments e:", e);
                    // MessageError("복제 실패!");
                    MessageSuccess(this.$t('friends.copyfailed'));
                    // MessageError("Copy failed!");
                }
            );
        },
        handleExchange() {

        },
        async getUserByidInfo() {
            let res = await getUserByid(this.userinfo.id)
            if (res.status == "200") {
                this.userprofile = res.data
                this.userprofile.referrallink = "https://www.alongshare.com/?usercode=" + res.data.referrallink
            } else {
                MessageError(res.msg)
            }
        },
        handleTab1() {
            this.getUserByidInfo()
            this.tableConfig1.axiosConfig = {
                headers: {
                    'Authorization': 'X-KILOGOD-AUTHORIZATION ' + this.$cookies.get('token'),
                }
            }
            this.tableConfig1.url = "commission/getUserById?reuserid=" + this.userinfo.id
        },
        handleTab2() {
            this.tableConfig.axiosConfig = {
                headers: {
                    'Authorization': 'X-KILOGOD-AUTHORIZATION ' + this.$cookies.get('token'),
                }
            }
            this.tableConfig.url = "withdrawal/getByUserId?userid=" + this.userinfo.id
            this.$refs.table.getList()
        }
    },
    created() {
        let userInfo = getUserInfo()
        if (userInfo) {
            this.userinfo = JSON.parse(userInfo)
            this.handleTab1()
        }
    }
}
</script>

<style scoped>
.tabs {
    width: 96%;
    background-color: #ffffff;
    margin: 30px;
    border-radius: 5px;
}

/deep/ .el-tabs__header {
    margin-bottom: 0px;
}

/deep/ .el-tabs__item {
    font-weight: bolder;
}

.cardall {
    display: flex;
    flex-wrap: nowrap;
    padding-top: 20px;
}

.img1 {
    width: 32%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/friends-grade.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 7px;
}

.img2 {
    width: 32%;
    margin-left: 2%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/friends-extend.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 7px;
}

.img3 {
    width: 32%;
    margin-left: 2%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/friends-wallet.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 7px;
}

.gradedesc {
    height: 20%;
    position: relative;
    background-color: #2A8658;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
    justify-content: center;
}

.gradetext {
    font-size: 12px;
    flex-wrap: wrap;
    color: white;
    margin-top: 2%;
}

.link {
    color: #656C68;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 2px;
    word-break: normal;
    word-wrap: normal;
    white-space: pre-wrap;
}

.dashed {
    width: 2px;
    height: 130px;
    background-image: linear-gradient(to bottom, #ffffff 0%, #39B979 50%, transparent 30%);
    background-size: 8px 8px;
    background-repeat: repeat-y;
}

/deep/ .customWidth {
    width: 40%;
}


.highlight {
    font-size: 20px;
    font-family: 黑体;
    font-weight: bolder;
    cursor: pointer
}

.obscurity {
    font-size: 16px;
    color: #D9E2DE;
    cursor: pointer
}
</style>
