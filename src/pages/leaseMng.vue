<template>
  <el-col>
    <el-col class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col v-for="item in selectD" :key='item.label' :span="7">
                <select1 :selectLabel="item.label" :selectData="item.data"></select1>            
            </el-col>
            <el-col :span="10">
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
    
    <el-col>
        <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()'>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label" :width="item.width"></el-table-column>            
        </data-tables>
    </el-col>
    
    <router-view></router-view>
  </el-col>
</template>
<script>
import select1 from '../components/select';
// import table1 from '../components/table';
export default {
  data() {
    return {
        tableData: [],
        selectD:[
            {
                label: '租期',
                data: [
                    {label: '1年', value: '1年'},
                    {label: '2年', value: '2年'},
                    {label: '3年', value: '3年'},
                    {label: '4年', value: '4年'},
                    {label: '5年', value: '5年'}
                ],
            },
            {
                label: '楼层',
                data: [
                    {label: '1楼', value: '1楼'},
                    {label: '2楼', value: '2楼'},
                    {label: '3楼', value: '3楼'},
                    {label: '4楼', value: '4楼'},
                    {label: '5楼', value: '5楼'},
                    {label: '6楼', value: '6楼'},
                    {label: '7楼', value: '7楼'},
                    {label: '8楼', value: '8楼'}
                ],
            }
        ],
        cols: [
            { prop: 'num', label: '门牌号码' },
            { prop: 'fname', label: '房东姓名' },
            { prop: 'fphone', label: '房东电话' },
            { prop: 'zname', label: '租户姓名' },
            { prop: 'zphone', label: '租户电话' },
            { prop: 'year', label: '租期（年）' },
            { prop: 'start', label: '租赁开始时间' },
            { prop: 'end', label: '租赁结束时间' },
        ],
    }
  },
  mounted() {
    let Mock = require('mockjs');
    let obj;
    for (var i = 0; i < 34; i++) {
        obj = Mock.mock({
            'num|10-30': 1,
            'fname|1': '@cname',
            'fphone|1-100000000000': 1,
            'zname|1': '@cname',
            'zphone|1-100000000000': 1,
            'year|1-10': 1,
            'start|1': '@date',
            'end|1': '@date',
        })
        this.tableData.push(obj);       
    }
  },
  components: {
    select1,
    // table1
  },
  methods: {
    getRowActionsDef(){
      let self=this;
      return [{
        handler(row) {
          self.$message('修改 clicked')
          console.log('修改 in row clicked', row)
        },
        name: '修改'
      },{
        handler(row) {
          self.$message('查看 clicked')
          console.log('查看 in row clicked', row)
        },
        name: '查看'
      }]
    }
  }
}
</script>
