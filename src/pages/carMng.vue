<template>
  <el-col>
    <el-col class="margB20 margT20">
        <!--<el-col class="margB20">            
            <el-button class="btnw" disabled="disabled">车位管理</el-button>            
            <router-link to="/smart/first/carMng/emptyCar" class="floatR">
                <el-button class="btnw" type="warning" >空车位管理</el-button>
            </router-link>
        </el-col>-->
        <el-col>
            <el-col :span="8">
                <el-col :span="4" class="lih34">住户姓名: </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入住户姓名"></el-input>
                </el-col>
            </el-col>
            <el-col :span="8">
                <el-col :span="4" class="lih34">车位编号: </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入车位编码"></el-input>
                </el-col>
            </el-col>
            <el-col v-for="item in selectD" :key='item' :span="6">
                <select1 :selectLabel='item.label' :selectData="item.data"></select1>            
            </el-col>
        </el-col>
                
    </el-col>
    <el-col class="margB20">
        <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw floatR" type="success">增加车位</el-button>
        <el-col class="clear"></el-col>
    </el-col>
    
    <el-col>
        <data-tables :data='tableData' class="pagination" :row-action-def='rowActionsDef()'>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
        </data-tables>
    </el-col>

  </el-col>
</template>
<script>
import select1 from '../components/select';

export default {
    data(){
        return {
            selectD:[
                { 
                    label:'类型',
                    data: [
                        {label: '固定车位', value: 'a1'},
                        {label: '临时车位', value: 'a2'}
                    ]
                }
            ],
            tableData: [],
            cols: [
                {prop: 'num', label: '车位编号'},
                {prop: 'class', label: '类型'},
                {prop: 'numberPlates', label: '车牌号'},
                {prop: 'flag', label: '是否已缴费'},
                {prop: 'money', label: '缴费金额'},
                {prop: 'start', label: '起始时间'},
                {prop: 'end', label: '终止时间'},
            ]
        }
    },
    components: {
        select1
    },
    mounted() {        
        let Mock = require('mockjs');
        let obj;
        for (var i = 0; i < 44; i++) {
            obj = Mock.mock({
                'num|0001-1000': 1,
                'class|1': ['固定车位', '临时车位'],
                'numberPlates|1': '浙A' + Math.random().toString(36).substr(2).slice(0,4).toUpperCase(),
                'flag|1': ['是', '否'],
                'money|0-1000': 1,
                'start|1': '@date',
                'end|1': '@date',
            })
            this.tableData.push(obj);
        }     
    },
    methods: {
        rowActionsDef() {
            let self = this;
            return [
                {
                    name: '修改',
                    handler(row) {
                        self.$message('修改 clicked');
                        console.log(row)
                    }
                },
                {
                    name: '提醒缴费',
                    handler(row) {
                        self.$message('提醒缴费 clicked');
                        console.log(row)
                    }
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.pagination {
    top: 0
}
</style>
