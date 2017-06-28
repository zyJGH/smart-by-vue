<template>
<transition name="el-fade-in-linear" v-if="show">
  <div tabindex="-1" class="el-message-box__wrapper">
      <div class="el-message-box">
          <div class="el-message-box__header">
              <div class="el-message-box__title">提示</div>
              <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="close()">
                  <i class="el-message-box__close el-icon-close"></i>
              </button>
            </div>
            <div class="el-message-box__content">
                <div class="el-message-box__status"></div>

                <el-col :span="12" class="margB20" v-for="item in 4" :key="item">
                    <el-col :span="6" class="lih34">牌号:</el-col>
                    <el-col :span="18">
                        <el-input v-model="id"></el-input>
                    </el-col>
                </el-col>
               
            </div>
            <div class="el-message-box__btns">
                <button type="button" class="el-button el-button--default" @click="close()">
                    <span>取消</span>
                </button>
                <button type="button" class="el-button el-button--default el-button--primary" @click="close()">
                    <span>确定</span>
                </button>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
  data() {
    return {
        id:1
    }
  },
  mounted(){
    console.log(1);
  },
  methods: {      
      close() {
        console.log(this.show);
        this.show = false;
        console.log(this.show);
      }
  },
  props: ['show','formData','confirm'],
}
</script>

<style lang="scss">
.el-message-box__wrapper {
    z-index: 2007;
    background: rgba(0,0,0,.4);
}
.el-message-box {
    width: 500px;
}
</style>