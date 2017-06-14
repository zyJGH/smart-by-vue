<template>
  <div class="resgist-box wh">
    <div class="resgist-bg">
      <el-row class="tx-c">
        <img src="../../static/assets/register-title.png">
      </el-row>
      <el-form class="from1">
        <el-form-item class="posi-rel">
          <el-input placeholder="用户名"></el-input>
          <img src="../../static/assets/user.png">
        </el-form-item>
        <el-form-item class="posi-rel">
          <el-input placeholder="密 码"></el-input>
          <img src="../../static/assets/pswd.png">
        </el-form-item>
        <router-link to="/smart">
          <el-button class="el-input__inner tx-c" type="warning">立即登录</el-button>
        </router-link>        
      </el-form>
    </div>
  </div>
  <!--<router-view></router-view>-->
</template> 

<style lang="scss">
.wh {
  width: 100%;
  height: 100vh;
}

.tx-c {
  text-align: center;
}

input[type="text"] {
  text-indent: 25px;
}

.posi-rel {
  position: relative;
}

.resgist-box {
  position: relative;
  background: url(../../static/assets/regist-bg.png) center 0 no-repeat;
  background-size: cover;
  .resgist-bg {
    position: absolute;
    top: 22%;
    left: 50%;
    margin-top: 40px;
    margin-left: -180px;
    .from1 {
      width: 360px;
      border-radius: 5px;
      padding: 20px;
      background: #0558b3;
      margin-top: 40px;
      img {
        width: 20px;
        position: absolute;
        top: 7px;
        left: 8px;
      }
    }
  }
}
</style>

