<template>
    <div class="excode">
        <div style="background-color: white;margin-top: 20px;border-radius: 7px;">
            <div style="padding: 10px 40px 0 40px;font-size: 20px;font-weight: bolder;display:flex;justify-content: space-between">
                <!-- <div>Redemption code</div> -->
<!--                <div>교환</div>-->
                <div>{{$t('excode.redemptioncode')}}</div>

                <div>
                    <el-form :model="form" :rules="rules" ref="ruleUser" inline>
                        <el-form-item prop='excode'>
                            <!-- <el-input v-model="form.excode" placeholder="Please enter the redemption code" style="width: 200px;" clearable></el-input> -->
                            <el-input v-model="form.excode" :placeholder="$t('excode.pleaseredemptioncode')" style="width: 200px;" clearable></el-input>
                        </el-form-item>
                        <el-form-item>
                            <!-- <el-button type="primary" style="margin-left: 10px;" @click="tomarketexchange">exchange</el-button> -->
                            <el-button type="primary" style="margin-left: 10px;" @click="tomarketexchange">{{$t('excode.exchange')}}</el-button>
                        </el-form-item>
                    </el-form>

                </div>
            </div>
            <el-data-table ref="table" v-bind="tableConfig" :columns="columns" style="margin-left: 30px;margin-top: 10px;width: 95%">
            </el-data-table>
        </div>
    </div>
</template>

<script>
    import { exchange,marketexchange} from "@/request/requests";
    import {getUserInfo,startLoading,MessageSuccess,MessageError} from "@/util/util"
    export default {
        name: "excode",
        data(){
            const statusOptions=[
                {
                    value:"1",
                    // label:"not used"
                    // label:"사용하지 않았다"
                    label:this.$t('excode.notused'),
                },
                {
                    value:"2",
                    // label:"Used"
                    // label:"이미 사용 된"
                    label:this.$t('excode.used'),
                },
                {
                    value:"3",
                    // label:"Expired"
                    // label:"만료"
                    label:this.$t('excode.expired'),
                },
            ]
            const columns = [
                {prop: 'id',label: 'No'},
                {prop: 'name',label: 'Name'},
                // {prop: 'excode',label: 'Redemption code'},
                {prop: 'excode',label: this.$t('excode.redemptioncode')},
                // {prop: 'status',label: 'Status',formatter: row => this.statusState(row)},
                {prop: 'status',label: this.$t('excode.status'),formatter: row => this.statusState(row)},
                // {prop: 'exchangetime',label: 'Exchange date'},
                {prop: 'exchangetime',label: this.$t('excode.exchangetime')},
                // {prop: 'createTime',label: 'createTime'},
                {prop: 'createTime',label: this.$t('excode.createtime')},

            ]
            return{
                form:this.initForm(),
                rules: {
                    excode: [
                        // {required: true, message: 'Please enter the redemption code', trigger: 'blur'},],
                        // {required: true, message: '请输入兑换码', trigger: 'blur'},],
                        // {required: true, message: '상환 코드를 입력하세요', trigger: 'blur'},],
                        { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('excode.redemptioncode'), trigger: 'blur' },],

                },
                userinfo:"",
                statusOptions,
                columns,
                tableConfig:{
                    url: 'userexcode/getByUserId',
                    dataPath: 'data.list',
                    totalPath: 'data.total',
                    paginationSize:10,
                    extraButtons: [
                        {
                            type: 'primary',
                            // text: 'exchange',
                            text: this.$t('excode.exchange'),
                            icon: 'el-icon-folder-checked',
                            disabled: (row)=>{
                                if (row.status=='1'){
                                    return false
                                }else {
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
            }
        },
        methods:{
            initForm() {//初始数据
                return {
                    excode : "", // 兑换码
                }
            },
            async handleExchange(row) {
                let data={
                    id:row.id,
                    excode:row.excode,
                    userid:this.userinfo.id
                }
                let loading=startLoading()
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
            statusState(row){
                let data
                this.statusOptions.forEach(r=>{
                    if (r.value==row.status){
                        data=r.label
                    }
                })
                return data
            },
            tomarketexchange(){
                this.$refs.ruleUser.validate((valid) => {
                    if (valid) {
                        this.operator()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async operator() {
                let data = {
                    excode: this.form.excode,
                    userid: this.userinfo.id
                }
                let loading = startLoading()
                let res = await marketexchange(data)
                if (res.status == "200") {
                    this.form = this.initForm();
                    this.$refs.ruleUser.clearValidate();
                    loading.close()
                    MessageSuccess(res.msg)
                } else {
                    loading.close()
                    MessageError(res.msg)
                }
                loading.close()
            }
        },
        created() {
            let userInfo=getUserInfo()
            if (userInfo){
                this.userinfo=JSON.parse(userInfo)
                this.tableConfig.axiosConfig={
                    headers: {
                        'Authorization': 'X-KILOGOD-AUTHORIZATION '+this.$cookies.get('token'),
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .excode{
        width: 96%;
        background-color: #ffffff;
        margin: 30px;
        border-radius: 5px;
        background-color: black;
    }
</style>
