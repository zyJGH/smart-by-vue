<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="6">
                <el-col :span="6" class="lih34">住户姓名</el-col>
                <el-col :span="12"><el-input placeholder="请输入住户姓名"></el-input></el-col>
            </el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">报修人姓名</el-col>
                <el-col :span="12"><el-input placeholder="请输入报修人姓名"></el-input></el-col>
            </el-col>
            <el-col :span="6" v-for="item in selectD" :key="item">
                <elselect :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success">增加绿化报修</el-button>
            <el-col class="clear"></el-col>
        </el-col>

        <el-col>
            <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()'>
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
        selectD: [
            {
                label: '分类',
                data: [
                    { label: '已修', value: '已修' },
                    { label: '未修', value: '未修' },
                    { label: '在修', value: '在修' },
                    { label: '全部', value: '全部' }
                ],
            },
            {
                label: '栏目',
                data: [
                    { label: '全部', value: '全部' },
                    { label: '植被', value: '植被' },
                    { label: '花坛', value: '花坛' }
                ],
            }
        ],
        cols: [
            { prop: 'sort', label: '序号' },
            { prop: 'num', label: '门牌号码' },
            { prop: 'tab', label: '栏目' },
            { prop: 'class', label: '分类' },
            { prop: 'bname', label: '报修人姓名' },
            { prop: 'phone', label: '报修人电话' },
            { prop: 'bdate', label: '报修时间' },
            { prop: 'cdate', label: '维修成功时间' }
        ],
        tableData: []
      }
  },
  components: {
      elselect
  },
  created() {
      this.axios.get('/green', this.tableData).then((res)=>{
          this.tableData = res.data.green
      })
  },
  methods: {
    getRowActionsDef() {
        let self = this;
        return [{
            name: '安排陈师傅维修',
            handler(row) {
                // self.$message('Edit clicked');
                this.num = row.num;
                self.flagMsg = true;
            },
        }]
    },
  }
}
</script>
