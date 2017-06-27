<template>
  <el-col>
    <el-col :span="22" class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col :span="7">
                <el-col :span="6" class="lih34">住户姓名: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入住户姓名"></el-input>
                </el-col>
            </el-col>
            <el-col :span="8" :offset="1" class="tx-c">
                <select1 :selectData="selectData" :selectLabel="selectLabel"></select1>
            </el-col>
            <el-col :span="7" :offset="1">
                <el-col :span="6" class="lih34">门牌号码: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>        
    </el-col>
    <el-col>
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加住户</el-button>
    </el-col>
    <el-col>
        <data-tables :data='tableData' class="pagination" :row-action-def="rowActionsDef()">
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label" :width="item.width"></el-table-column>            
        </data-tables>
    </el-col>
    
  </el-col>
</template>
<script>
import select1 from '../components/select';
import table1 from '../components/table';
import DataTables from 'vue-data-tables';

export default {
  data() {
    return {
        selectLabel: '楼层',
        selectData: [
            {label: '1楼', value: '1楼'},
            {label: '2楼', value: '2楼'},
            {label: '3楼', value: '3楼'},
            {label: '4楼', value: '4楼'},
            {label: '5楼', value: '5楼'},
            {label: '6楼', value: '6楼'},
            {label: '7楼', value: '7楼'},
            {label: '8楼', value: '8楼'}
        ],
        tableData: [],
        cols: [
            {
                prop: 'num',
                label: '门牌号码',
            },
            {
                prop: 'name',
                label: '住户姓名',
            },
            {
                prop: 'phone',
                label: '住户电话',
                width: '160px'
            },
            {
                prop: 'person',
                label: '居住人口',
            },
            {
                prop: 'floor',
                label: '楼层',
            },
            {
                prop: 'size',
                label: '面积(平米)',
            }
        ],
    }
  },
  mounted() {
    let Mock = require('mockjs');
    let name;
    for (var i = 0; i < 20; i++) {
        name = Mock.mock({
            'num|10-30': 1,
            'name|1': '@cname',
            'phone|1-10000000000': 1,
            'person|1-10': 1,
            'floor|1-30': 1,
            'size|80-120': 1,
        })
        this.tableData.push(name);        
    }
  },
  components: {
    select1,
    table1,
    DataTables
  },
  methods: {
    rowActionsDef() {
      let self=this;
      return [{
        handler(row) {
          self.$message('Edit clicked')
          console.log('Edit in row clicked', row)
        },
        name: '编辑'
      }]
    },
  }
}
</script>
