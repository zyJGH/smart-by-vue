<template>
  <div class="resgist-box wh">
    <div class="resgist-bg">
      <el-row class="tx-c">
        <img src="../../static/assets/register-title.png">
      </el-row>
      <el-form class="from1" :model="ruleForm" :rules="rules" ref="user">
        <el-form-item class="posi-rel" prop="name">
          <el-input placeholder="用户名" v-model="ruleForm.name"></el-input>
          <img src="../../static/assets/user.png">
        </el-form-item>
        <el-form-item class="posi-rel" prop="pswd">
          <el-input placeholder="密 码" v-model="ruleForm.pswd"></el-input>
          <img src="../../static/assets/pswd.png">
        </el-form-item>
        <el-button class="el-input__inner tx-c" @click='login' type="warning">立即登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        pswd: ''
      },
      rules: {
        'name': [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        'pswd': [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      // console.log(this.$refs['user']);
      this.$refs['user'].validate((valid) => {
        if (valid) {
          this.axios.post('/login', this.ruleForm).then((res) => {
            // console.log(res.data.token);
            // this.$cookie.set('token',res.data.token)
            this.$router.push('/smart/first');

          }).catch((error) => {
            console.log('error');
          })
        } else {
          return false;
        }
      })
    }
  }
}
</script>


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
        top: 12px;
        left: 8px;
      }
    }
  }
}
</style>

