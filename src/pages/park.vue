<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="8">
                <el-col :span="4" class="lih34">检查时间</el-col>
                <el-date-picker v-model="dateTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-col>
            <el-col :span="8">
                <el-col :span="3" class="lih34">名称</el-col>
                <el-col :span="16"><el-input placeholder="请输入名称"></el-input></el-col>
            </el-col>
            <el-col :span="8" v-for="item in selectD" :key="item">
                <elselect :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>           
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
        datas: [],
        dateTime: '',
        selectD: [
            {
                label: '卫生负责人', 
                data: [
                    {'label': '李玉刚', value: '李玉刚'},
                    {'label': '周杰伦', value: '周杰伦'},
                    {'label': '贾乃亮', value: '贾乃亮'},
                    {'label': '陆毅', value: '陆毅'},
                    {'label': '肖骁', value: '肖骁'},
                ]
            }
        ],
        cols: [
            {prop: 'sort', label: '编号' },
            {prop: 'date', label: '打扫时间' },
            {prop: 'safeState', label: '卫生状况' },
            {prop: 'unit', label: '单元号' },
            {prop: 'name', label: '负责人姓名' },
            {prop: 'phone', label: '负责人电话' }
        ],
        tableData:[],
      }
  },
  created() {
    this.axios('/park', this.tableData).then((res)=>{
        this.tableData = res.data.park    
    })
  },
  components: {
      elselect
  },
  methods: {
      getRowActionsDef(){
        let self = this;
        return [{
            name: '通知打扫',
            handler(row) {
                this.num = row.num;
                self.flagMsg = true;

            },
        }]
      },
      
  }
}
</script>
<style lang="scss">
.el-date-editor.el-input {
    width: auto;
}
</style>
 