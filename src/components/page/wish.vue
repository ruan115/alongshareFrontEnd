<template>
    <div class="bg">
        <div class="topback"></div>
        <div class="middleback justify-center">
            <img @click="getMessageList" src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/wishmiddle.png" style="transform: scale(1.5);height: 100%;">
        </div>
        <div class="middlebutton justify-center">
            <el-button type="primary" class="btn" round @click="clkwish" v-show="flagwish">wish</el-button>
        </div>
<!--        <div class="bottomback"></div>-->

        <el-dialog customClass="customWidth" :visible.sync="dialogFormVisible" :close-on-press-escape="false" :close-on-click-modal="false" :before-close="closeDialog">
            <div class="justify-center">
                <span class="wishtext">wish</span>
            </div>
            <div class="title">
                <div class="justify-center">
                    <div class="titletxt">AlongShare will choose some wishes to help </div>
                </div>
                <div class="justify-center">
                    <div class="titletxt">them come true when Christmas comes, leave your wish</div>
                </div>
            </div>
            <el-form :model="form" :rules="rules" ref="ruleUser">
                <el-form-item prop='content'>
                    <el-input style="border-radius: 10px;" type="textarea" :rows="6" v-model='form.content'/>
                </el-form-item>
            </el-form>
            <div class="justify-center">
                <!-- <el-button type="primary" @click="submitUser">Submit</el-button> -->
                <el-button type="primary" @click="submitUser">제출</el-button>
            </div>
        </el-dialog>

        <el-dialog customClass="customWidth" :visible.sync="dialogFormVisibleList">
            <div class="justify-center">
                <span class="wishtext">my wish</span>
            </div>
            <el-data-table ref="table" v-bind="tableConfig" :columns="columns">
            </el-data-table>
        </el-dialog>
    </div>
</template>

<script>
    import { insertMessage,getMessageByUserid } from "@/request/requests";
    import {MessageError,MessageSuccess,getUserInfo} from "@/util/util"
    export default {
        name: "wish",
        data(){
            const columns = [
                {prop: 'id',label: 'number',width: 100},
                // {prop: 'user.email',label: 'Email'},
                {prop: 'content',label: 'content'},
            ]
            return{
                flagwish:false,
                form:this.initForm(),
                dialogFormVisible:false,
                dialogFormVisibleList:false,
                rules: {
                    content :[
                        {required: true, message: 'the content can not be blank', trigger: 'blur'},],
                },
                columns,
                tableConfig:{
                    url: '',
                    dataPath: 'data.list',
                    totalPath: 'data.total',
                    paginationSize:10,
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
            }
        },
        methods:{
            getMessageList(){
                this.dialogFormVisibleList=true
            },
            closeDialog() {
                this.dialogFormVisible = false
                this.form = this.initForm();
                this.$refs.ruleUser.clearValidate();
                this.getMessageByUseridInfo()
            },
            initForm() {
                return {
                    content : "",
                }
            },
            clkwish(){
                this.dialogFormVisible=true
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
                let  res = await insertMessage(this.form)
                if (res.status == "200") {
                    MessageSuccess("Wish submitted successfully")
                    this.closeDialog()
                    this.flagwish=false
                } else {
                    MessageError(res.msg)
                }
                this.getMessageByUseridInfo()
            },
            async getMessageByUseridInfo() {
                let res = await getMessageByUserid(this.userinfo.id)
                if (res.status == "200") {
                    if (res.data.list.length>0){
                        this.flagwish = false
                    }else {
                        this.flagwish = true
                    }
                } else {
                    MessageError(res.msg)
                }
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
                this.tableConfig.url="message/userlist"
                this.getMessageByUseridInfo()
            }
        }
    }
</script>

<style scoped>
    .bg{
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
        width: 100%;
        background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/fluorescence.png);
        background-size: cover;
        background-repeat: no-repeat;
    }
    .topback{
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 28%;
        background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/wishtop.png);
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .middleback{
        margin-top: -5%;
        height: 50%;
    }
    .btn{
        background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#35FB96), color-stop(1%,#2FDE85), color-stop(100%,#25B56B));
        width: 200px;
        height: 40px;
        font-weight: bolder;
        border: 0px;
    }
    .middlebutton{
        z-index: 2000;
        margin-top:5%;
        padding: 0;
    }
    .bottomback{
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 22%;
        background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/wishbottom.png);
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .wishtext{
        font-weight: bolder;
        font-size: 28px;
        color: black
    }
    .title{
        padding: 20px 0 10px 0;
        display: flex;
        justify-content: center;
        flex-direction: column
    }
    .titletxt{
        font-size: 18px;
        font-family: Source Han Sans CN-Norm;
        font-weight: normal;
    }
    /deep/ .customWidth{
        width: 40%;
    }
    /deep/ .el-dialog{
        border-radius: 10px;
    }
    /deep/ .el-textarea__inner {
        background: #F2F2F2;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        border: 0px;
        border-radius: 10px;
    }
</style>
