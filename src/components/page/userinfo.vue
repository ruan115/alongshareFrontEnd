<template>
    <div>
        <div style="float: right;margin-top: -14%;margin-right: 2%">
            <!-- <el-button type="text" @click="lognout">Sign out</el-button> -->
<!--            <el-button type="text" @click="lognout">로그아웃</el-button>-->
            <el-button type="text" @click="lognout">{{$t('userinfo.signout')}}</el-button>
        </div>
        <div class="userinfo">
            <div class="justify-center">
                <el-row class="demo-avatar demo-basic" style="margin-top: 5%">
                    <el-col :span="24">
                        <div class="demo-basic--circle">
                            <div class="block" @click="editUser">
                                <el-avatar :size="80" :src="form.avatar"></el-avatar>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="width: 100%;margin-top:10px;font-weight: bolder">
                <el-row>
                    <!-- <el-col :span="8" :offset="1">Nickname</el-col> -->
<!--                    <el-col :span="8" :offset="1">닉네임</el-col>-->
                    <el-col :span="8" :offset="1">{{$t('userinfo.nickname')}}</el-col>
                    <el-col :span="13">{{ form.name }}</el-col>
                    <el-col :span="1"><el-button type="text" icon="el-icon-arrow-right" style="color: black"
                            @click="editUser"></el-button></el-col>
                </el-row>
            </div>
            <div style="width: 100%;font-weight: bolder">
                <el-row>
                    <el-col :span="8" :offset="1">Email</el-col>
                    <el-col :span="13">{{ form.email }}</el-col>
                    <el-col :span="1"><el-button type="text" icon="el-icon-arrow-right" style="color: black"
                            @click="editUser"></el-button></el-col>
                </el-row>
            </div>

            <el-dialog customClass="customWidth" title="Modify" :visible.sync="dialogFormVisible"
                :close-on-press-escape="false" :close-on-click-modal="false" :before-close="closeDialog">
                <el-form :model="form" :rules="rules" ref="ruleUser">
                    <!-- <el-form-item label='Avatar' :label-width="formLabelWidth"> -->
                    <el-form-item :label="$t('userinfo.avatar')" :label-width="formLabelWidth">
                        <el-upload class="avatar-uploader" action="/api/file/upload" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="form.avatar" :src="form.avatar" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <!-- <el-form-item label='Nickname' prop='name' :label-width="formLabelWidth"> -->
                        <el-form-item :label="$t('userinfo.nickname')" prop='name' :label-width="formLabelWidth">
                            <!-- <el-input placeholder='Nickname' clearable autocomplete="off" v-model='form.name' style="width:300px;" /> -->
                            <el-input :placeholder="$t('userinfo.nickname')" clearable autocomplete="off" v-model='form.name'
                                style="width:300px;" />
                        </el-form-item>
                        <el-form-item label='Email' prop='email' :label-width="formLabelWidth">
                            <el-input placeholder='Email' clearable autocomplete="off" v-model='form.email'
                                style="width:300px;" />
                        </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <!-- <el-button @click="closeDialog()">Cancel</el-button>
                    <el-button type="primary" @click="submitUser">Submit</el-button> -->
                    <el-button @click="closeDialog()">{{$t('friends.cancel')}}</el-button>
                    <el-button type="primary" @click="submitUser">{{$t('friends.submit')}}</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { updateUserById, getUserByid, logoutToken } from "@/request/requests";
import { MessageError, MessageSuccess, getUserInfo } from "@/util/util"
export default {
    name: "userinfo",
    data() {
        return {
            userinfo: "",
            form: this.initForm(),
            dialogFormVisible: false,
            formLabelWidth: "100px",
            rules: {
                name: [
                    // { required: true, message: 'Please enter Nickname', trigger: 'blur' },],
                    // { required: true, message: '닉네임을 입력하세요', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('userinfo.nickname'), trigger: 'blur' },],
                email: [
                    // { required: true, message: 'Please enter Email', trigger: 'blur' },],
                    { required: true, message: this.$t('home.pleaseenter')+' '+this.$t('home.emailaddress'), trigger: 'blur' },],
                avatar: [
                    // { required: true, message: 'Please upload your avatar', trigger: 'blur' },],
                    { required: true, message: this.$t('userinfo.uploadavatar'), trigger: 'blur' },],

            },
        }
    },
    methods: {
        lognout() {
            // this.$confirmel('Are you sure you want to log out?', 'Tips', {
            this.$confirmel('로그아웃하시겠습니까??', '팁', {
                // confirmButtonText: 'comfirm',
                confirmButtonText: '확인',
                // cancelButtonText: 'cancel',
                cancelButtonText: '취소',
                type: 'warning'
            }).then(() => {
                this.logout()
            }).catch(() => {
            });
        },
        async logout() {
            sessionStorage.removeItem("userInfo");
            sessionStorage.removeItem("deadline");
            await logoutToken();
            sessionStorage.removeItem("token");
            this.$router.push({ path: "login" })
        },
        initForm() {
            return {
                name: "", //姓名
                email: "", //邮箱
                avatar: "", //头像
            }
        },
        editUser() {
            this.dialogFormVisible = true
        },
        closeDialog() {
            this.dialogFormVisible = false
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
            let res = await updateUserById(this.form)
            if (res.status == "200") {
                this.getUserByidInfo()
                MessageSuccess(res.msg)
                this.closeDialog()
            } else {
                MessageError(res.msg)
            }
        },
        handleAvatarSuccess(res, file) {
            if (res.status == "200") {
                this.form.avatar = res.data
            } else {
                MessageError(res.msg)
            }
            console.log(file)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 5;

            if (!isJPG) {
                // this.$message.error('Uploaded pictures can only be in JPG | png format');
                this.$message.error('업로드된 사진은 JPG | png 형식만 가능합니다.');

            }
            if (!isLt2M) {
                // this.$message.error('The size of the uploaded image cannot exceed 5MB!');
                this.$message.error('업로드된 이미지의 크기는 5MB를 초과할 수 없습니다!!');
            }
            return isJPG && isLt2M;
        },
        async getUserByidInfo() {
            let res = await getUserByid(this.userinfo.id)
            if (res.status == "200") {
                this.form = res.data
                if (this.form.avatar == "") {
                    this.form.avatar = ""
                }
            } else {
                MessageError(res.msg)
            }
        }
    },
    created() {
        let userInfo = getUserInfo()
        if (userInfo) {
            this.userinfo = JSON.parse(userInfo)
            this.getUserByidInfo()
        }
    }
}
</script>

<style scoped>
.userinfo {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 40%;
    width: 40%;
    margin-left: 30%;
    margin-top: 15%;
    background-image: url(https://alongshare.oss-eu-west-1.aliyuncs.com/frontend/userback.png);
    background-size: 100%;
    background-repeat: no-repeat;
}

.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple {
    background: #d3dce6;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

/deep/ .customWidth {
    width: 40%;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 180px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    border: 1px dashed black;
}

.avatar {
    width: 180px;
    height: 180px;
    display: block;
}</style>
