<template>
    <el-col>
        <el-col>
            <el-col :span="8">
                <el-col :span="4" class="lih34">检查时间:</el-col>
                <el-col :span="8">
                    <el-date-picker v-model="date" type="date" placeholder="请选择日期" :picker-options="pickerOptions0"></el-date-picker>
                </el-col>
                <el-col :span="8" :offset="1">
                    <el-time-picker v-model="time" :picker-options="{selectableRange: '18:30:00 -  20:30:00'}" placeholder="请选择间点"> </el-time-picker>
                </el-col>
            </el-col>
            <el-col :span="5">
                <elselect ></elselect>
            </el-col>
            <el-col :span="5">
                <el-col :span="4" class="lih34">名称:</el-col>
                <el-col :span="12"><el-input placeholder="请输入名称"></el-input></el-col>
            </el-col>
            <el-col :span="5">
                <elselect></elselect>
            </el-col>
        </el-col>

        <el-col class="margT20">
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>           
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
        date: '',
        time: new Date(2016, 9, 10, 18, 40),
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      }
  },
  components: {
      eltable,
      elselect
  }
}
</script>
<style lang="scss">
.el-date-editor.el-input {
    width: auto;
}
</style>
 