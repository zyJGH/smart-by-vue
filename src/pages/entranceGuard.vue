<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="7">
                <el-col :span="5" class="lih34">创建时间</el-col>
                <el-date-picker v-model="dateTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-col>
            <el-col :span="7" :offset="1" v-for="item in selectD" :key="item">
                <elselect :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
            <el-col :span="7">
                <el-col :span="5" class="lih34">门牌号</el-col>
                <el-col :span="15"><el-input placeholder="请输入门牌号"></el-input></el-col>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
        </el-col>

        <el-col>
            <data-tables :data='tableData' class="pagination" :has-action-col="false">
                <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
            </data-tables>
        </el-col>

    </el-col>
</template>
<script>
import elselect from '../components/select';
export default {
  data() {
      return {
        dateTime: '',
        tableData: [],
        selectD:[{
            label: '进出类型',
            data: [
                {value: '进门', label: '进门' },
                {value: '出门', label: '出门' },
                {value: '全部', label: '全部' }
           ]
        }],
        cols: [
            {prop: 'num', label: '编号' },
            {prop: 'date', label: '创建时间' },
            {prop: 'houseNum', label: '门牌号' },
            {prop: 'class', label: '进出类型' },
            {prop: 'door', label: '出入人所属门牌' },
            {prop: 'flag', label: '是否外访' },
            {prop: 'floor', label: '楼层' }            
        ]
      }
  },
  created() {
    this.axios('/door', this.tableData).then((res)=>{
        this.tableData = res.data.door
    })
  },
  components: {
      elselect
  },
  methods: {
      getRowActionsDef() {
        let self = this;
        return [{
            name: '编辑',
            handler(row) {
                this.num = row.num;
                self.flagMsg = true;
            },
        }]
      }
  }
}
</script>
<style lang="scss">
.el-date-editor.el-input {
    width: auto;
}
</style>
 