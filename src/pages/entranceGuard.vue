<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="10">
                <el-col :span="4" class="lih34">创建时间</el-col>
                <el-col :span="9">
                    <el-date-picker v-model="date" type="date" placeholder="请选择日期" :picker-options="pickerOptions0"></el-date-picker>
                </el-col>
                <el-col :span="9" :offset="1">
                    <el-time-picker v-model="time" :picker-options="{selectableRange: '18:30:00 -  20:30:00'}" placeholder="请选择间点"> </el-time-picker>
                </el-col>
            </el-col>
            <el-col :span="6" :offset="1" v-for="item in selectD" :key="item">
                <elselect :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">门牌号码</el-col>
                <el-col :span="12"><el-input placeholder="请输入门牌号码"></el-input></el-col>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success">增加马路报修</el-button>
            <el-col class="clear"></el-col>
        </el-col>

        <el-col>
            <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()' :has-action-col="false">
                <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
            </data-tables>
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
        tableData: [],
        selectD:[{
            label: '进出类型',
            data: [
                {prop: '进门', label: '进门' },
                {prop: '出门', label: '出门' },
                {prop: '全部', label: '全部' }
           ]
         }],
         cols: [
            {prop: 'num', label: '编号' },
            {prop: 'ctime', label: '创建时间' },
            {prop: 'class', label: '进出类型' },
            {prop: 'door', label: '出入人所属门牌' },
            {prop: 'flag', label: '是否外访' },
            {prop: 'floor', label: '楼层' },
            {prop: 'date', label: '创建时间' },
        ]
      }
  },
  created() {
    this.axios('/door', this.tableData).then((res)=>{
        this.tableData = res.data.door
    })
  },
  components: {
      eltable,
      elselect
  },
  methods: {
      getRowActionsDef() {

      }
  }
}
</script>
<style lang="scss">
.el-date-editor.el-input {
    width: auto;
}
</style>
 