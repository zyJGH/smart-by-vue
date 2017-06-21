<template>
  <el-col>
    <el-col :span="22" :offset="1" class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col :span="9">
                <el-col :span="4" class="lih34">住户姓名: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入住户姓名"></el-input>
                </el-col>
            </el-col>
            <el-col :span="6">
                <select1/>            
            </el-col>
            <el-col :span="9">
                <el-col :span="4" class="lih34">门牌号码: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>
                
    </el-col>
    <el-col :span="22" :offset="1">
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加住户</el-button>
    </el-col>
    <table1></table1>
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
