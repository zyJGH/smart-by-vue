<template>
  <el-col>
    <el-col class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col v-for="item in 2" key='item' :span="6">
                <select1/>            
            </el-col>
            <el-col :span="12">
                <el-col :span="4" class="lih34">门牌号码: </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>                
    </el-col>
    <el-col>
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加租赁记录</el-button>
    </el-col>
    <table1></table1>
    <router-view></router-view>
  </el-col>
</template>
<script>
import select1 from '../components/select';
import table1 from '../components/table';
export default {
  components: {
    select1,
    table1
  }
}
</script>
<style lang="scss">

</style>
