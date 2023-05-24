<template>
    <div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane disabled></el-tab-pane>
                <!-- <el-tab-pane label="Lottery" name="first" style="background-color: black"> -->
                <el-tab-pane :label="$t('luckdraw.lotteryticket')" name="first" style="background-color: black">
                    <div style="width: 80%;margin-left: 10%;padding-top: 20px;">
                        <div style="line-height: 60px;">
                            <!-- <span style="color: white;font-size: 20px;">Integral：</span> -->
                            <span style="color: white;font-size: 20px;">{{$t('luckdraw.integral')}}：</span>
                            <span style="color: #43D98E;font-size: 36px;font-weight: bolder;">{{ integral }}</span>
                            <!--                            <el-button type="primary" round size="small" style="margin-left: 40px;">check in</el-button>-->
                        </div>
                        <div style="width: 100%">
                            <div
                                style="background-color: #226C47;color: #CBCCCD;padding: 5px 10px;font-size:0.8em;border-radius: 5px;">
                                <span style="display: flex;flex-direction: row;flex-wrap: wrap;">
                                    <!-- Welcome to alongshare, this is our activity page, click on the card to draw prizes with one click,
                                    the awards include various free account packages,
                                    discount codes and other discounts, thank you for your support and trust. -->
<!--                                    alongshare에 오신 것을 환영합니다. 이것은 우리의 활동 페이지입니다. 카드를 클릭하면 한 번의 클릭으로 경품을 받을 수 있습니다.-->
<!--                                    보상에는 다양한 무료 계정 패키지가 포함되며,-->
<!--                                    할인 코드 및 기타 할인, 귀하의 지원과 신뢰에 감사드립니다.-->
                                    {{$t('luckdraw.welcome')}}
                                </span>
                            </div>
                        </div>
                        <div style="width: 100%;height: 100%">
                            <transition name="el-zoom-in-center" v-for="item in 8" :key="item">
                                <div v-show="show" @click="openprize(item)" class="transition-box"></div>
                            </transition>
                            <transition name="el-zoom-in-center" v-for="(item, index) in prizepools" :key="index">
                                <div v-show="!show" @click="show = true" class="transition-boxopen">
                                    <div class="justify-center" style="margin-top: 35%">
                                        <p style="font-size: 1.5em;font-weight: bolder">{{ item.name }}</p>
                                    </div>
                                    <div class="justify-center">
                                        <div class="couponinfo">
                                            <p style="line-height: 35px;color: white" v-if="item.isprize == '1'">
                                                {{ item.timelength }}</p>
                                            <!-- <p style="line-height: 35px;color: white" v-else>none</p> -->
                                            <p style="line-height: 35px;color: white" v-else>{{$t('luckdraw.none')}}</p>
                                        </div>
                                    </div>
                                    <div class="justify-around" style="font-size: 12px;margin-top: 23%"
                                        v-if="item.isprize == '1'">
                                        <!-- <span style="color: white">Redemption code:<span
                                                class="excode"> -->
                                        <span style="color: white">{{$t('luckdraw.redemptioncode')}}<span class="excode">
                                                {{ item.excode }}</span></span>
                                        <!-- <span style="color: white;cursor: pointer" @click="copyexcode(item.excode)"
                                            @click.stop="copyexcode">copy</span> -->
                                        <span style="color: white;cursor: pointer" @click="copyexcode(item.excode)"
                                            @click.stop="copyexcode">{{$t('luckdraw.copy')}}</span>
                                    </div>
                                    <div class="justify-around" style="font-size: 12px;margin-top: 23%" v-else>
                                        <!-- <p style="line-height: 35px;color: white" v-else>none</p> -->
                                        <span style="color: white">{{$t('luckdraw.none')}}</span>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- <el-tab-pane label="Prize list" name="second"> -->
                <el-tab-pane :label="$t('luckdraw.prizelist')" name="second">
                    <el-data-table ref="table" v-bind="tableConfig" :columns="columns"
                        style="margin-left: 30px;margin-top: 10px;width: 95%">
                    </el-data-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { toluckdraw, getUserIntegral, exchange } from "@/request/requests";
import { getUserInfo, MessageError, MessageInfo, MessageSuccess, startLoading } from "@/util/util"
export default {
    name: "luckdraw",
    data() {
        const statusOptions = [
            {
                value: "1",
                // label:"not used"
                // label: "사용하지 않았다"
                label: this.$t('luckdraw.notused')
            },
            {
                value: "2",
                // label:"Used"
                // label: "이미 사용 된"
                label: this.$t('luckdraw.used')
            },
            {
                value: "3",
                // label:"Expired"
                // label: "만료"
                label: this.$t('luckdraw.expired')
            },
        ]
        const columns = [
            // {prop: 'id',label: 'Prize No'},
            // { prop: 'id', label: '상품번호' },
            { prop: 'id', label: this.$t('luckdraw.prizeno') },

            // {prop: 'name',label: 'Contents'},
            // { prop: 'name', label: '내용물' },
            { prop: 'name', label: this.$t('luckdraw.contents') },

            // {prop: 'excode',label: 'Redemption code'},
            // { prop: 'excode', label: '상환 코드' },
            { prop: 'excode', label: this.$t('luckdraw.redemptioncode') },

            { prop: 'status', label: 'Status', formatter: row => this.statusState(row) },
            // {prop: 'exchangetime',label: 'Exchange date'},
            // { prop: 'exchangetime', label: '교환 날짜' },
            { prop: 'exchangetime', label: this.$t('luckdraw.exchangedate') },

            // {prop: 'createTime',label: 'createTime'},
            // { prop: 'createTime', label: '생성시간' },
            { prop: 'createTime', label: this.$t('luckdraw.createtime') },
        ]
        return {
            activeName: 'first',
            show: true,
            prizepools: [],
            columns,
            statusOptions,
            tableConfig: {
                url: '',
                dataPath: 'data.list',
                totalPath: 'data.total',
                paginationSize: 10,
                extraButtons: [
                    {
                        type: 'primary',
                        // text: 'exchange',
                        // text: '환전',
                        text: this.$t('luckdraw.exchange'),
                        icon: 'el-icon-folder-checked',
                        disabled: (row) => {
                            if (row.status == '1') {
                                return false
                            } else {
                                return true
                            }
                        },
                        atClick: async row => {
                            this.handleExchange(row)
                            return false
                        },
                    },
                ],
                headerButtons: [],
                hasDelete: false,
                hasEdit: false,
                hasOperation: true,
                hasNew: false,
                operationAttrs: {
                    width: '100px',
                    fixed: 'right',
                },
            },
            userinfo: {},
            integral: "",
        }
    },
    methods: {
        statusState(row) {
            let data
            this.statusOptions.forEach(r => {
                if (r.value == row.status) {
                    data = r.label
                }
            })
            return data
        },
        handleClick(tab) {
            console.log(tab.name);
            if (tab.name == 'second') {
                this.tableConfig.axiosConfig = {
                    headers: {
                        'Authorization': 'X-KILOGOD-AUTHORIZATION ' + this.$cookies.get('token'),
                    }
                }
                this.tableConfig.url = "userexcode/getByUserId?remark=来源抽奖"
                this.$refs.table.getList()
            }
        },
        openprize(num) {
            if (this.userinfo.integral < 10) {
                // MessageError("Insufficient points!")
                // MessageError("불충분한 포인트!")
                MessageError(this.$t('luckdraw.insufficientpoints'))
            }
            // this.$confirmel('This operation will consume 10 points. Continue?', 'Tips', {
            this.$confirmel(this.$t('luckdraw.consumepoints'), this.$t('luckdraw.tips'), {
                // confirmButtonText: 'comfirm',
                confirmButtonText: this.$t('luckdraw.comfirm'),
                // cancelButtonText: 'cancel',
                cancelButtonText: this.$t('luckdraw.cancel'),
                type: 'warning'
            }).then(() => {
                this.luckdrawInfo(num)
            }).catch(() => {
                // MessageInfo("Canceled");
                MessageInfo(this.$t('luckdraw.cancel'));
            });
        },
        async luckdrawInfo(num) {
            console.log(num)
            let res = await toluckdraw(num)
            if (res.status == "200") {
                this.prizepools = res.data.prizepools
                this.show = false
                this.getUserIntegralInfo()
                if (res.data.isprize == '0') {
                    // MessageInfo("Fail to win a prize")
                    MessageInfo(this.$t('luckdraw.failtowin'))
                } else {
                    // MessageInfo("Congratulations on obtaining:" + res.data.prizepool.name + res.data.prizepool.timelength)
                    MessageInfo(this.$t('luckdraw.congratulations') + res.data.prizepool.name + res.data.prizepool.timelength)
                }
            } else {
                MessageError(res.msg)
            }
        },
        copyexcode(val) {
            this.$copyText(val).then(
                function (e) {
                    console.log("copy arguments e:", e);
                    // MessageSuccess("Copy succeeded!");
                    MessageError(this.$t('luckdraw.copysucceeded'));

                },
                function (e) {
                    console.log("copy arguments e:", e);
                    // MessageError("Copy failed!");
                    MessageError(this.$t('luckdraw.copyfailed'));
                }
            );
        },
        async handleExchange(row) {
            let data = {
                id: row.id,
                excode: row.excode,
                userid: this.userinfo.id
            }
            let loading = startLoading()
            let res = await exchange(data)
            if (res.status == "200") {
                loading.close()
                MessageSuccess(res.msg)
            } else {
                loading.close()
                MessageError(res.msg)
            }
            loading.close()
            this.$refs.table.getList()
        },
        async getUserIntegralInfo() {
            let res = await getUserIntegral()
            if (res.status == "200") {
                this.integral = res.data
            } else {
                MessageError(res.msg)
            }
        }
    },
    created() {
        let userInfo = getUserInfo()
        if (userInfo) {
            this.userinfo = JSON.parse(userInfo)
            this.getUserIntegralInfo()
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

.transition-box {
    display: inline-block;
    width: 20%;
    height: 280px;
    margin: 2.5%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/slices.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.transition-boxopen {
    display: inline-block;
    width: 20%;
    height: 280px;
    margin: 2.5%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/slices-open.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.couponinfo {
    width: 40%;
    height: 40px;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/coupon.png);
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
}

.no-data {
    padding: 32px 0;
    text-align: center;
    font-weight: 600;
}

.tip {
    padding-bottom: 16px;
}

.excode {
    color: #656C68;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 2px;
}
</style>
