<template>
    <div>
        <div class="justify-center" style="margin-top: 50px;">
            <p style="font-size: 36px;font-weight: bolder;color: white">help center</p>
        </div>
        <div class="cardall">
            <el-card class="box-card" v-for="(item,index) in typeList" :key="index">
                <div style="margin-bottom: 10px;">
                    <span style="font-size: 22px;">{{item.name}}</span>
                </div>
                <div v-for="(it,idx) in item.helpdetails" :key="idx" class="text item">
                    <i class="el-icon-arrow-right" style="margin-right: 7px;"></i>
                    <span @click="todetail(it.id)">{{it.title}}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import { getHelptypeAll} from "@/request/requests";
    import { MessageError} from "@/util/util"
    export default {
        name: "help",
        data(){
            return{
                userinfo:"",
                typeList:[]
            }
        },
        methods:{
            todetail(val){
                this.$router.push({path:'helpdetail',query: {id:val}})
            },
            async getHelptypeAllInfo() {
                let res = await getHelptypeAll()
                if (res.status == "200") {
                    this.typeList=res.data
                } else {
                    MessageError(res.msg)
                }
            }
        },
        created() {
            this.getHelptypeAllInfo()
        }
    }
</script>

<style scoped>
    .cardall{
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        margin-left: 2%;
        /*justify-content: center;*/
    }
    /*.cardall:after {*/
    /*    content: "";*/
    /*    width: 30%;*/
    /*    margin: 1%;*/
    /*}*/
    .text {
        font-size: 14px;
    }

    .item {
        padding: 6px 0;
        cursor:pointer;
    }

    .box-card {
        width: 30%;
        color: #CBCCCD;
        background-color: #30373D;
        margin: 1%;
        border: 0px;
        border-radius: 7px;
    }
    /deep/ .el-card__body{
        height: 280px;
    }
</style>
