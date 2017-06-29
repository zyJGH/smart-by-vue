<template>
    <el-col>
        <!--<el-col class="margB20">            
            <router-link to="/smart/securityMng/fire/fireState" class="floatR">
                <el-button type="warning" class="btnw">灭火装置状态</el-button>
            </router-link>
            <el-button disabled="disabled" class="btnw">灭火装置</el-button>     
        </el-col>-->

        <el-col class="margT20">
            <el-col :span="7">
                <el-col :span="5" class="lih34">检查时间</el-col>
                <el-date-picker v-model="dateTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-col>
            <el-col :span="8" :offset="1" v-for="item in selectD" :key="item">
                <elselect :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">单元号</el-col>
                <el-col :span="16"><el-input placeholder="请输入单元号"></el-input></el-col>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
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
        selectD: [
            {
                'label': '安检负责人',
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
            {prop: 'date', label: '检查时间' },
            {prop: 'safeState', label: '安全状况' },
            {prop: 'unit', label: '单元号' },
            {prop: 'name', label: '安检负责人' },
            {prop: 'phone', label: '负责人电话' },
            {prop: 'state', label: '灭火器状态' },
        ],
        tableData:[],
      }
  },
  created() {
      this.axios('/fire', this.tableData).then((res)=>{
          this.tableData = res.data.fire
      })
  },
  components: {
      elselect
  },
}
</script>
<style lang="scss">
.el-date-editor.el-input {
    width: auto;
}
</style>
 