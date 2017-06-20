<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="6">
                <el-col :span="6" class="lih34">住户姓名:</el-col>
                <el-col :span="12"><el-input placeholder="请输入住户姓名"></el-input></el-col>
            </el-col>
            <el-col :span="6"><elselect></elselect></el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">门牌号码:</el-col>
                <el-col :span="12"><el-input placeholder="请输入门牌号码"></el-input></el-col>
            </el-col>
            <el-col :span="6"><elselect></elselect></el-col>
        </el-col>

        <el-col class="margT20">
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw" type="success">增加灯管报修</el-button>
        </el-col>

        <el-col>
            <eltable></eltable>
        </el-col>

    </el-col>
</template>
<script>
import eltable from '../components/table';
import elselect from '../components/select';
export default {
  data() {
      return {

      }
  },
  components: {
      eltable,
      elselect
  }
}
</script>
