<template>
<div class="wh">
   <div class="header font14 colfff">
       <div class="smart-title floatL">
           <img src="../../static/assets/smart-title.png" alt="">
       </div>
       
       <div class="header-right floatR">
            <div class="biaozhun tx-c bgf39500 floatL">
                <img src="../../static/assets/biaozhun.png" alt="">标准版
            </div>
            <div class="biaozhun tx-c floatL">
                <img src="../../static/assets/3D.png" alt="">3D版
            </div>

            <div class="floatL tx-c bkfirst">
                <img src="../../static/assets/shouye1.png" alt="">
                <div>返回首页</div>
            </div>

            <div class="floatL tx-c bkfirst">
                <img src="../../static/assets/mimaxiugai.png" alt="">
                <div>密码修改</div>
            </div>

            <div class="floatL tx-c bkfirst">
                <img src="../../static/assets/tuichuxitong.png" alt="">
                <div>退出系统</div>
            </div>

       </div>
   </div>

   <div class="today colfff">
       <span class="date-b">
           <img src="../../static/assets/1.png" alt="">
           今天是：<span class="date">2015.07.10</span><span class="">星期五</span>
       </span>
       <span class="date-b">
           <img src="../../static/assets/2.png" alt="">
           您现在的位置：物业管理 > 空车位查看
       </span>        
   </div>
   <div class="wrap">
        <div class="floatL wrapL">
            <div class="welcome">
                <img src="../../static/assets/head.png" class="floatL" alt="">
                <div class="floatL admin">
                    <div class="col0681c1">Admin</div>
                    <div class="col0681c1">您好: <span class="colf39500">欢迎登入</span></div>
                </div>
            </div>
            <div class="propertyList">
                <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
            </div>
        </div>
        <div class="floatR wrapR">
            sdfdsf
        </div>
   </div>


</div>
</template>

<style lang="scss">
// .wh {width: 100%; height: 100vh;}
.tx-r {text-align: right;}
.tx-l {text-align: left;}
.tx-c {text-align: center;}
img {vertical-align: middle;margin-top: -3px;}
.bgf39500 {background: #f39500;}
.floatL {float: left;}
.floatR {float: right;}
.font12 {font-size: 12px;}
.font14 {font-size: 14px;}
.colfff {color: #fff;}
.colf39500 {color: #f39500;}
.col0681c1 {color: #0681c1;}
.header {
    padding: 24px 66px 12px 36px;
    overflow: hidden;
    .smart-title {
        img {
             width: 270px;
        }        
    }
    .header-right {        
        overflow: hidden;
        .biaozhun {
            margin-top: 10px;
            width: 74px;
            line-height: 26px;            
            border: 1px solid #fff;
            border-radius: 5px;
            margin-right: 6px;
            img {
                width: 20px;
                margin-right: 5px;
                
            }
        }
        .bkfirst {
            width: 96px;
            img {
                width: 32px;
            }
        }
    }
}

.today {
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: url(../../static/assets/bar.png) no-repeat;
    padding-left: 36px;
   
    .date-b {
        .date {
            margin-right: 20px;
        }
        margin-right: 50px;
    }
}

.wrap {
    padding: 30px 42px 52px 40px;
    .wrapL {
        width: 16%;
        height: 100%;
        margin-right: 2%;
        .welcome {
            width: 100%;
            height: 60px;
            background: #fff;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            img {
                width: 64px;
                margin: -16px 0 0 16px;
            }
            .admin {
                padding: 10px 0 0 8px;
            }

        }
        .propertyList {
            height: 200px;
            background: #0061a6;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            padding: 12px 8px;
        }
    }
    .wrapR {
        width: 82%;
        height: 100%;
        background: green;
        
    }
}

</style>
