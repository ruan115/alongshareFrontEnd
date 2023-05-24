<template>
    <div class="justify-center" style="width: 100%">
        <div  style="line-height:1.8;background-color: #2B3137;width: 90%;margin-top: 50px;border-radius: 7px;">
            <el-container  class="app-item-contain">
                <el-header class="align-center1" style="margin-top: 20px;">
                    <h1 style="font-size: 30px;font-weight: bolder;color: white">{{form.title}}</h1>
                </el-header>
                <div class="justify-center" style="color: white">
                    <div style="margin-left: 30px;font-size: 12px;line-height: 30px;">{{form.createTime}}</div>
                </div>
                <el-main style="display: flex;justify-content: center">
                    <el-card style="width: 100%;">
                        <div v-html="form.detail"></div>
                    </el-card>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    import { getHelpdetailByid } from "@/request/requests";
    import { MessageError } from "@/util/util"
    export default {
        data(){
            return {
                form: {},
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            async getHelpdetailByidInfo() {
                let res = await getHelpdetailByid(this.$route.query.id)
                if (res.status == "200") {
                    this.form = res.data.list[0]
                } else {
                    MessageError(res.msg)
                }
            }
        },
        watch:{
            $route(){
                this.getHelpdetailByidInfo()
            }
        },
        created() {
            this.getHelpdetailByidInfo()
        }
    }
</script>

<style scoped>
    .align-center1 {
        text-align: center
    }
    @media only screen and (max-width: 768px) {
        .app-item-contain {
            padding: 30px 0px 0px 0px;
        }

        .app-contain {
            padding: 30px 0px 0px 0px;
        }
    }
</style>
