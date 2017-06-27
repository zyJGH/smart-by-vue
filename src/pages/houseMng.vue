<template>
<el-row>
    <el-col class="margB20 margT20">            
        <el-col v-for="item in selectD" :key='item' :span="7">
            <select1 :selectLabel="item.label" :selectData="item.data" @changeVal="ftmethod"></select1>
        </el-col>
        <el-col :span="7">
                <el-col :span="5" class="lih34">门牌号码: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        <!--<el-col :span="3" class="tx-r"><el-button type="primary">精准查找</el-button></el-col>-->
    </el-col>
    <el-col>
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加房产</el-button>
    </el-col>
        
    <el-col>
        <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()'>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
        </data-tables>
    </el-col>

</el-row>
</template>
<script>
import select1 from '../components/select.vue';

export default {
  data() {
      return {
        houseNum: '',
        tableData: [],
        selectD:[
            {
                label: '类型',
                data: [
                    {label: '自住', value: '自住'},
                    {label: '租赁', value: '租赁'}
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
            { prop: 'class', label: '类型' },
            { prop: 'size', label: '面积（平米）' },
            { prop: 'floor', label: '楼层' },
            { prop: 'person', label: '居住人口' },
            { prop: 'layout', label: '户型' },
        ],
      }
  },
  components: {
    select1,
    // table1
  },
  mounted() {
    let Mock = require('mockjs');
    let obj;
    for (var i = 0; i < 34; i++) {
        obj = Mock.mock({
            'num|1-30': 1,
            'class|1': ['自住', '租赁'],
            'size|60-120': 1,
            'floor|1-30': 1,
            'person|1-6': 1,
            'layout|1': ['三室一厅', '三室两厅', '两室两厅']
        })
        this.tableData.push(obj);       
    }
  },
  methods: {    
    ftmethod(item) {
        console.log(item);
        
    },
    getRowActionsDef(){
      let self=this;
      return [{
        handler(row) {
          self.$message('Edit clicked')
          console.log('Edit in row clicked', row)
        },
        name: '编辑'
      }]
    }
  }
}
</script>

