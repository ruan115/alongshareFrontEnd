<template>
    <div style="margin-top: 70px;">
        <div class="justify-center mgtop">
            <img src="https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/alongshare.png" width="260px;">
        </div>
        <div class="justify-center mgtop">
            <!-- <span class="wellogin">Contact us for quick response</span> -->
<!--            <span class="wellogin">상담</span>-->
            <span class="wellogin">{{$t('aftersales.contactus')}}</span>
        </div>
        <div style="background-color: white;margin-top: 20px;border-radius: 7px;width: 96%;margin-left: 2%;height: 500px;margin-bottom: 40px;">
            <div style="padding: 10px 0 0 30px;font-size: 20px;font-weight: bolder">
                <!-- Work order list -->
<!--                질문 목록-->
                {{$t('aftersales.workorder')}}
            </div>
            <el-data-table ref="table" v-bind="tableConfig" :columns="columns" style="margin-left: 30px;margin-top: 10px;width: 95%">
            </el-data-table>

            <el-dialog customClass="customWidth" :visible.sync="dialogFormVisible" :close-on-press-escape="false" :close-on-click-modal="false" :before-close="closeDialog">
                <div class="justify-center">
                    <!-- <span class="wishtext">Create a job</span> -->
<!--                    <span class="wishtext">질문 만들기</span>-->
                    <span class="wishtext">{{$t('aftersales.createjob')}}</span>
                </div>
                <div class="title">
                    <div class="justify-center">
                        <!-- <div class="titletxt">When submitting a work order, please include as much detailed information as possible, such as error screenshots, account information, etc., which are very important for us to deal with problems quickly.</div> -->
<!--                        <div class="titletxt">작업 지시서를 제출할 때는 오류 스크린샷, 계정 정보 등 가능한 한 상세한 정보를 포함해주시기 바랍니다. 이러한 정보는 문제를 신속하게 처리하는 데 매우 중요합니다.</div>-->
                        <div class="titletxt">{{$t('aftersales.submittinworkorder')}}</div>
                    </div>
                </div>
                <el-form :model="form" :rules="rules" ref="ruleUser" inline>
                    <el-form-item prop='ticketid' style="width: 50%;margin-left: 3%">
                        <el-select v-model="form.ticketid" :placeholder="$t('aftersales.subscriptionaccount')">
                            <el-option
                                    v-for="item in ticketList"
                                    :key="item.id"
                                    :label="item.loginemail"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop='typeid'>
                        <el-select v-model="form.typeid" :placeholder="$t('aftersales.problemtype')">
                            <el-option
                                    v-for="item in workType"
                                    :key="item.id"
                                    :label="item.typename"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop='content'>
                        <editor :init="editorInit" v-model="form.content" />
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <!-- <el-button type="primary" @click="submitUser">Submit</el-button> -->
                    <el-button type="primary" @click="submitUser">{{$t('login.submit')}}</el-button>
                </div>
            </el-dialog>


            <el-dialog customClass="customWidth" :visible.sync="dialogFormVisibleContent" :close-on-press-escape="false" :close-on-click-modal="false" :before-close="closeDialogContent">
                <div class="justify-center">
                    <!-- <span class="wishtext">Work order Content</span> -->
<!--                    <span class="wishtext">제출된 질문 목록</span>-->
                    <span class="wishtext">{{$t('aftersales.workordercontent')}}</span>
                </div>
                <div class="justify-center" v-html="content" style="margin-top: 20px;">

                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script defer src="<%= BASE_URL %>static/tinymce/tinymce.min.js"></script>
<script>
    import { uploadFile,insertWorkorder,getWordertypeAll,getTicketListByUserId,updateWorkorder } from "@/request/requests";
    import {MessageError,MessageSuccess,getUserInfo} from "@/util/util"
    import Editor from '@tinymce/tinymce-vue'
    export default {
        components: {
            Editor
        },
        name: "aftersales",
        data() {
            const statusOptions=[
                {
                    value:"1",
                    // label:"To be processed"
                    // label:"처리 예정"
                    label:this.$t('aftersales.tobeprocessed'),
                },
                {
                    value:"2",
                    // label:"processed"
                    // label:"해결"
                    label:this.$t('aftersales.processed'),
                },
                {
                    value:"3",
                    // label:"Revoked"
                    // label:"취소됨"
                    label:this.$t('aftersales.revoked'),
                },
            ]
            const columns = [
                // {prop: 'workorderno', label: 'Work order No'},
                // {prop: 'workorderno', label: '작업 주문 번호'},
                {prop: 'workorderno', label: this.$t('aftersales.workorderno')},
                // {prop: 'ticket.carname', label: 'Product'},
                // {prop: 'ticket.carname', label: '제품'},
                {prop: 'ticket.carname', label: this.$t('aftersales.product')},
                // {prop: 'status', label: 'status',formatter: row => this.statusState(row)},
                // {prop: 'status', label: '상태',formatter: row => this.statusState(row)},
                {prop: 'status', label: this.$t('aftersales.status'),formatter: row => this.statusState(row)},
                // {prop: 'typeid', label: 'type',formatter: row => this.typeState(row)},
                // {prop: 'typeid', label: '유형',formatter: row => this.typeState(row)},
                {prop: 'typeid', label: this.$t('aftersales.type'),formatter: row => this.typeState(row)},
                // {prop: 'ticket.loginemail', label: 'ticket'},
                // {prop: 'ticket.loginemail', label: '티켓'},
                {prop: 'ticket.loginemail', label: this.$t('aftersales.ticket')},
                // {prop: 'createTime', label: 'createTime'},
                // {prop: 'createTime', label: '생성시간'},
                {prop: 'createTime', label: this.$t('aftersales.createtime')},
            ]
            return {
                userinfo:"",
                workType:[],
                ticketList:[],
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
                            text: 'Revoke',
                            icon: 'el-icon-error',
                            disabled: (row)=>{
                                if (row.status=='1'){
                                    return false
                                }else {
                                    return true
                                }
                            },
                            atClick: async row => {
                                this.handleCal(row)
                                return false
                            },
                        },
                        {
                            type: 'primary',
                            text: 'Content',
                            icon: 'el-icon-document',
                            atClick: async row => {
                                this.handleContent(row)
                                return false
                            },
                        },
                    ],
                    headerButtons: [
                        {
                            type: 'primary',
                            // text: 'Create',
                            text: this.$t('aftersales.create'),
                            atClick: async row => {
                                this.createWorkOrder(row)
                                return false
                            },
                        },
                    ],
                    hasDelete: false,
                    hasEdit: false,
                    hasOperation: true,
                    hasNew: false,
                    operationAttrs: {
                        width: '100px',
                        fixed: 'right',
                    },
                },
                form:this.initForm(),
                dialogFormVisible:false,
                dialogFormVisibleContent:false,
                content:"",
                rules: {
                    ticketid :[
                        { required: true, message: this.$t('home.pleasechoose')+' '+this.$t('aftersales.subscriptionaccount'), trigger: 'blur' },],
                        // {required: true, message: '구독 계정을 선택하세요.', trigger: 'blur'},],
                    typeid :[
                        { required: true, message: this.$t('home.pleasechoose')+' '+this.$t('aftersales.type'), trigger: 'blur' },],
                        // {required: true, message: '질문 유형을 선택하세요.', trigger: 'blur'},],
                    content :[
                        // {required: true, message: 'Please enter the work order content.', trigger: 'blur'},],
                        // {required: true, message: '작업 주문 내용을 입력하십시오.', trigger: 'blur'},],
                        { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('aftersales.workordercontent'), trigger: 'blur' },],

                },
                editorInit: {
                    // language: 'zh_CN',
                    language: 'ko-KR',
                    convert_urls: false,
                    height: 300,
                    plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount kityformula-editor'],
                    toolbar: ['bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample',
                        'hr numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen',
                        'fontselect formatselect fontsizeselect kityformula-editor'],
                    images_upload_handler: function(blobInfo, success, failure) {
                        const formData = new FormData()
                        formData.append('file', blobInfo.blob())
                        uploadFile(formData).then(res => {
                            success(res.data)
                        }).catch(() => {
                            failure('Upload failed, please upload again')
                        })
                    }
                }
            }
        },
        methods:{
            closeDialogContent(){
              this.dialogFormVisibleContent=false
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
            typeState(row){
                let data
                this.workType.forEach(r=>{
                    if (r.id==row.typeid){
                        data=r.typename
                    }
                })
                return data
            },
            initForm() {
                return {
                    id : "", // 序号
                    userid : "", // 用户id
                    workorderno : "", // 工单号
                    ticketid : "", // 车票id
                    typeid : "", // 类型id
                    content : "", // 工单内容
                    status : "", // 状态
                    reply : "", // 处理回复
                    createTime : "", // 创建时间
                    updateTime : "", // 更新时间
                    ext1 : "", // 扩展字段
                    ext2 : "", // 扩展字段
                    ext3 : "", // 扩展字段
                    ext4 : "", // 扩展字段
                }
            },
            createWorkOrder(){
                this.dialogFormVisible=true
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
                let  res = await insertWorkorder(this.form)
                if (res.status == "200") {
                    MessageSuccess(res.msg)
                    this.closeDialog()
                } else {
                    MessageError(res.msg)
                }
                this.$refs.table.getList()
            },
            handleContent(row){
                this.content=row.content
                this.dialogFormVisibleContent=true
            },
            async handleCal(row) {
                this.form = row
                this.form.status = '3'
                let res = await updateWorkorder(this.form)
                if (res.status == "200") {
                    MessageSuccess(res.msg)
                    this.closeDialog()
                } else {
                    MessageError(res.msg)
                }
            },
            async getWordertypeAllInfo() {
                let res = await getWordertypeAll()
                if (res.status == "200") {
                    this.workType=res.data
                } else {
                    MessageError(res.msg)
                }
            },
            async getTicketListByUserIdInfo() {
                let res = await getTicketListByUserId()
                if (res.status == "200") {
                    this.ticketList = res.data
                } else {
                    MessageError(res.msg)
                }
            }
        },
        created() {
            let userInfo=getUserInfo()
            if (userInfo){
                this.userinfo=JSON.parse(userInfo)
                this.getWordertypeAllInfo()
                this.getTicketListByUserIdInfo()
                this.tableConfig.url="workorder/list?userid="+this.userinfo.id
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
    .mgtop{
        margin-top: 10px;
    }
    .wellogin{
        height: 48px;
        font-size: 35px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
    }

    .wishtext{
        font-weight: bolder;
        font-size: 22px;
        color: black
    }
    .title{
        padding: 20px 0 10px 0;
        display: flex;
        justify-content: center;
        flex-direction: column
    }
    .titletxt{
        width: 90%;
        font-size: 14px;
        font-family: Source Han Sans CN-Norm;
        font-weight: normal;
        display: flex;
        flex-wrap: wrap;
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
