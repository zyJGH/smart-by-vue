<template>
    <div class="wh">
        <el-row class="header font14 colfff">
            <el-col :span="8" class="smart-title">
                <img src="../../static/assets/smart-title.png" alt="">
            </el-col>
    
            <el-col :span="9" :offset="7" class="header-right">
                <el-col :span="4" class="biaozhun tx-c bgf39500 curs">
                    <img src="../../static/assets/biaozhun.png" alt="">标准版
                </el-col>
                <el-col :span="4" class="biaozhun tx-c curs">
                    <img src="../../static/assets/3D.png" alt="">3D版
                </el-col>
    
                <el-col :span="5" class="tx-c curs">
                    <img src="../../static/assets/shouye1.png" alt="">
                    <div>返回首页</div>
                </el-col>
    
                <el-col :span="5" class="tx-c curs">
                    <img src="../../static/assets/mimaxiugai.png" alt="">
                    <div>密码修改</div>
                </el-col>
    
                <el-col :span="5" class="tx-c curs">
                    <img src="../../static/assets/tuichuxitong.png" alt="">
                    <div>退出系统</div>
                </el-col>
    
            </el-col>
        </el-row>
    
        <el-row class="today colfff">
            <el-col :span="5">
                <img src="../../static/assets/1.png" alt=""> 今天是：
                <span class="date">2015.07.10</span>星期五
            </el-col>
            <el-col :span="5">
                <img src="../../static/assets/2.png" alt=""> 您现在的位置：{{pathName[1]?pathName[1]:''}}{{pathName[2]?'>'+pathName[2]:''}}
            </el-col>
        </el-row>
    
        <el-row class="wrap">
            <el-col :span="4" class="wrapL">
                <el-col class="welcome">
                    <el-col :span="10">
                        <img src="../../static/assets/head.png" class="floatL" alt="">
                    </el-col>
                    <el-col :span="14" class="admin">
                        <div class="col0681c1">Admin</div>
                        <div class="col0681c1">您好:
                            <span class="colf39500">欢迎登入</span>
                        </div>
                    </el-col>
                </el-col>
                <el-col class="propertyList">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-submenu index="1">
                            <template slot="title" class="bg49b0f1">
                                <router-link to='/smart/first' class="colfff w100" >
                                    <img src="../../static/assets/wuye1.png" alt="">物业管理
                                </router-link>
                            </template>
                            <router-link to='/smart/first/houseMng' class="w100">
                                <el-menu-item index="1-1">
                                    <i class="el-icon-message"></i>房产管理
                                </el-menu-item>
                            </router-link>
                            <el-submenu index='1-2'>
                                <template slot="title">
                                    <i class="el-icon-message"></i>租赁管理 
                                </template>
                                <router-link to="/smart/first/leaseMng/lease" class="w100">
                                    <el-menu-item index="1-2-1">
                                        <i class="el-icon-message"></i>租赁信息
                                    </el-menu-item>
                                </router-link>  
                                <router-link to="/smart/first/leaseMng/leaseContract" class="w100">
                                    <el-menu-item index="1-2-2">
                                        <i class="el-icon-message"></i>查看租赁合同
                                    </el-menu-item>
                                </router-link>                                   
                            </el-submenu>
                            <router-link to='/smart/first/householdMng' class="w100">
                                <el-menu-item index="1-3">
                                    <i class="el-icon-message"></i>住户管理
                                </el-menu-item>
                            </router-link>    
                                                     
                            <el-submenu index="1-4">
                                <template slot="title">
                                    <i class="el-icon-message"></i>收费管理
                                </template>
                                <router-link to='/smart/first/chargeMng/charge' class="w100">
                                    <el-menu-item index="1-4-2">
                                        <i class="el-icon-message"></i>入费账单
                                    </el-menu-item>
                                </router-link>
                                <router-link to='/smart/first/chargeMng/chargesta' class="w100">
                                    <el-menu-item index="1-4-1">
                                        <i class="el-icon-message"></i>收费统计
                                    </el-menu-item>
                                </router-link>                                
                            </el-submenu>

                            <el-submenu index="1-5">                                
                                <template slot="title">
                                    <i class="el-icon-message"></i>车位管理
                                </template>
                                <router-link to='/smart/first/carMng/cars' class="w100"> 
                                    <el-menu-item index="1-5-1">
                                        <i class="el-icon-message"></i>车位信息
                                    </el-menu-item>
                                </router-link>
                                <router-link to='/smart/first/carMng/emptyCar' class="w100">      
                                    <el-menu-item index="1-5-2">
                                        <i class="el-icon-message"></i>空车位查询
                                    </el-menu-item>
                                </router-link>
                            </el-submenu>
                            
                        </el-submenu>
    
                        <el-submenu index="2">
                            <template slot="title">   
                                <router-link to='/smart/serviceMng' class="colfff w100">
                                    <img src="../../static/assets/weixiu1.png" alt="">维修管理
                                </router-link>
                            </template>
                            <router-link to="/smart/serviceMng/closestool" class="w100">
                                <el-menu-item index="2-1">
                                    <i class="el-icon-message"></i>马桶报修
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/serviceMng/lamp" class="w100">
                                <el-menu-item index="2-2">
                                    <i class="el-icon-message"></i>灯管报修
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/serviceMng/waterway" class="w100">
                                <el-menu-item index="2-3">
                                    <i class="el-icon-message"></i>水道报修
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/serviceMng/green" class="w100">
                                <el-menu-item index="2-4">
                                    <i class="el-icon-message"></i>绿化报修
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/serviceMng/road" class="w100">
                                <el-menu-item index="2-5">
                                    <i class="el-icon-message"></i>马路地面报修
                                </el-menu-item>
                            </router-link>
                        </el-submenu>
    
                        <el-submenu index="3">
                            <template slot="title">
                                <router-link to="/smart/securityMng/security" class="colfff w100">
                                    <img src="../../static/assets/anfang1.png" alt="">安防管理
                                </router-link>
                            </template>
                            
                            <router-link to="/smart/securityMng/entranceGuard" class="colfff w100">
                                <el-menu-item index="3-1">
                                    <i class="el-icon-message"></i>进出门禁
                                </el-menu-item>
                            </router-link>

                            <router-link to="/smart/securityMng/lift" class="colfff w100">
                                <el-menu-item index="3-2">
                                    <i class="el-icon-message"></i>电梯管理
                                </el-menu-item>
                            </router-link>

                            <el-submenu index='3-3'>
                                <template slot="title">
                                    <i class="el-icon-message"></i>灭火装置管理
                                </template>
                                <router-link to="/smart/securityMng/fire/huo" class="colfff w100">
                                    <el-menu-item index="3-3-1">
                                        <i class="el-icon-message"></i>灭火装置
                                    </el-menu-item>
                                </router-link>
                                <router-link to="/smart/securityMng/fire/fireState" class="colfff w100">
                                    <el-menu-item index="3-3-2">
                                        <i class="el-icon-message"></i>灭火装置状态
                                    </el-menu-item>
                                </router-link>
                            </el-submenu>
                        </el-submenu>
    
                        <el-submenu index='4'>
                            <template slot="title">
                                <router-link to="/smart/healthMng/health" class="colfff w100">
                                    <img src="../../static/assets/weisheng1.png" alt="">卫生管理
                                </router-link>
                            </template>
                            <router-link to="/smart/healthMng/corridor" class="w100">
                                <el-menu-item index="4-1">                                    
                                    <i class="el-icon-message"></i>楼道卫生管理
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/healthMng/park" class="w100">
                                <el-menu-item index="4-2">
                                    <i class="el-icon-message"></i>公园马路卫生
                                </el-menu-item>
                            </router-link>
                        </el-submenu>
    
                        <el-submenu index="5">
                            <template slot="title">
                                <router-link to="/smart/settings/setting" class="w100 colfff">
                                    <img src="../../static/assets/shezhi1.png" alt="">系统设置
                                </router-link>
                            </template>

                            <router-link to="/smart/settings/householdStatistics" class="w100">
                                <el-menu-item index="5-1">
                                    <i class="el-icon-message"></i>住户统计
                                </el-menu-item>
                            </router-link>
                            <router-link to="/smart/settings/advert" class="w100">
                                <el-menu-item index="5-2">
                                    <i class="el-icon-message"></i>广告管理
                                </el-menu-item>
                            </router-link>
                        </el-submenu>    
                    </el-menu>
                </el-col>
            </el-col> 
            <el-col :span="20" class="padL20">
                <el-col class="wrapR">
                    <el-col class="wrapRbar"></el-col>
                    <el-col :span="22" :offset="1">
                        <router-view class="h470"></router-view>
                    </el-col>
                    
                </el-col>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            pathName:[]
        }
    },
    created(){
        // getSdsd('sdsdsdsdsd').then((res)=>{this.hs=res.data})
    },
    methods:{
        route(){
            this.pathName=[
                this.$route.matched[0].name,
                this.$route.matched[1].name,
                this.$route.matched[2].name
            ]
            // console.log(this.$route.matched);
        }
    },    
    watch:{
        '$route': 'route'
    }
}
</script>

<style lang="scss" >
.el-submenu .el-menu-item,
.el-menu-item,
.el-submenu__title {
    height: 26px;
    line-height: 26px;
}
.header {
    padding: 24px 66px 12px 36px;
    overflow: hidden;
    .smart-title {
        img {
            width: 270px;
        }
    }
    .header-right {
        white-space: nowrap;
        .biaozhun {
            margin-top: 10px;
            line-height: 26px;
            border: 1px solid #fff;
            border-radius: 5px;
            margin-right: 6px;
            img {
                width: 20px;
                margin-right: 5px;
            }
        }
    }
}

.today {
    height: 44px;
    line-height: 44px;
    background: url(../../static/assets/bar.png) no-repeat;
    padding-left: 36px;
    .date {
        margin-right: 20px;
    }
    .el-col-6 {
        white-space: nowrap;
        img {
            margin-right: 4px;
        }
    }
}

.wrap {
    padding: 20px 42px 32px 40px;    
    .wrapL {
        .welcome {
            width: 100%;
            height: 60px;
            background: #fff;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            img {
                width: 64px;
                margin: -16px 0 0 10px;
            }
            .admin {
                padding-top: 10px;
            }
        }
        .propertyList {
            background: #0061a6;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            padding: 12px 8px;
            img {
                width: 26px;
                margin-right: 6px;
            }
        }
    }
    
.wrapR {
    background: #fff;
    border-radius: 5px;
    padding-bottom: 70px;
    .wrapRbar {
        width: 100%;
        height: 40px;
        background: url(../../static/assets/bar.png) no-repeat;
        margin-bottom: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .zhNum {
        padding: 15px 0;
        border-radius: 5px;
        .count1 {
            padding-top: 2px;
        }
        img {
            width: 54px;
            margin-right: 6px;
        }
        .font18 {
            padding-top: 2px;
        }
    }
    .h470 {
        height: 500px;
    }
}
}
.hoverf {
    height: 310px; 
    overflow: hidden;
}
#carbox {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  .car {
     border: 1px solid #349ee2; text-align: center; margin-top: 20px; background: #fff; box-sizing: border-box; color: #349ee2; display: flex; display: -webkit-flex; flex-direction: column; justify-content: center; width: 70%; height: 80px;  box-shadow: 0 0 6px #349ee2;  
     img {
         width: 50px;
         margin: 0 auto;
     }
  }
}
tr td.cell {
    white-space: nowrap;
}
.tool-bar.el-row {
    display: none
}
</style>
