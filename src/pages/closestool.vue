<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="8">
                <el-col :span="4" class="lih34">住户姓名:</el-col>
                <el-col :span="12"><el-input placeholder="请输入住户姓名"></el-input></el-col>
            </el-col>
            
            <el-col :span="8">
                <el-col :span="4" class="lih34">门牌号码:</el-col>
                <el-col :span="12"><el-input placeholder="请输入门牌号码"></el-input></el-col>
            </el-col>

            <el-col :span="4">
                <elselect v-for="item in selectD" :key="item.label" :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
        </el-col>

        <el-col class="margT20">
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw" type="success">增加马桶报修</el-button>
        </el-col>

        <el-col>
            <data-tables :data='tableData' class="pagination" :row-action-def='rowActionsDef()'>
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
        tableData: [],
        selectD: [
            {
                label: '类型',
                data: [
                    {label: '已修', value:'已修'},
                    {label: '未修', value:'未修'},
                    {label: '全部', value:'全部'},
                ]
            }
        ],
        cols: [
            { prop: 'sort', label: '序号' },
            { prop: 'num', label: '门牌号码' },
            { prop: 'cname', label: '住户姓名' },
            { prop: 'style', label: '分类' },
            { prop: 'bname', label: '报修人姓名' },
            { prop: 'bphone', label: '报修人电话' },
            { prop: 'bdate', label: '报修时间' },
            { prop: 'cdate', label: '维修成功时间' }
        ]
      }
  },
  mounted() {
    let Mock = require('mockjs');
    let obj;
    for (var i = 0; i < 34; i++) {
        obj = Mock.mock({
            'sort|1-100': 1,
            'num|1-100': 1,
            'cname|1': '@cname',
            'style|1': ['已修', '未修'],
            'bname|1': '@cname',
            'bphone|1-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date',
        })
        this.tableData.push(obj); 
    }
  },
  components: {
      elselect
  },
  methods: {
      rowActionsDef() {
        return [
            {
                name: '安排陈师傅维修',
                hander() {
                    
                }
            }
        ]
      }
  }
}
</script>
