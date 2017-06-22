<template>
  <el-col>
    <el-col :span="22" :offset="1" class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col :span="8">
                <el-col :span="4" class="lih34">住户姓名: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入住户姓名"></el-input>
                </el-col>
            </el-col>
            <el-col :span="8">
                <select1 :selectData="selectData" :selectLabel="selectLabel"/>
            </el-col>
            <el-col :span="8">
                <el-col :span="4" class="lih34">门牌号码: </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>                
    </el-col>
    <el-col :span="22" :offset="1">
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加住户</el-button>
    </el-col>
    <table1 :tableData="tableData" :cols="cols"></table1>
  </el-col>
</template>
<script>
import select1 from '../components/select';
import table1 from '../components/table';
export default {
  data() {
    return {
        selectLabel: '楼层',
        selectData: [
            {label: '一层', value: 'v0'},
            {label: '二层', value: 'v1'},
            {label: '三层', value: 'v2'},
            {label: '四层', value: 'v3'},
            {label: '五层', value: 'v4'},
            {label: '六层', value: 'v5'},
            {label: '七层', value: 'v6'},
        ],
        tableData: [
            {
                num: '12',
                name: '王小虎',
                phone: '15182345332',
                person: '4',
                floor: '4',
                size: '100',
                operation: '修改'
            }
        ],
        cols: [
            {
                prop: 'num',
                label: '门牌号码',
                // render: false,
                // html: '<a>修改</a>'
            },
            {
                prop: 'name',
                label: '住户姓名',
                // render: true,
                // html: '<a>修改</a>'
            },
            {
                prop: 'phone',
                label: '住户电话',
                // render: true,
                // html: '<a>修改</a>'
            },
            {
                prop: 'person',
                label: '居住人口',
                // render: true,
                // html: '<a>修改</a>'
            },
            {
                prop: 'floor',
                label: '楼层',
                // render: true,
                // html: '<a>修改</a>'
            },
            {
                prop: 'size',
                label: '面积(平米)',
                // render: true,
                // html: '<a>修改</a>'
            },
            {
                prop: 'operation',
                label: '操作',
                render: true,
                html: '<a>修改</a>'
            },
        ]
    }
  },
  mounted() {
    let Mock = require('mockjs');    
    var arr = [];    
    for (var i = 0; i < 20; i++) {
        var rand = parseInt(Math.random() * 100);
        arr.push(rand);
    }
    
    console.log(arr);
    let name = Mock.mock({
        'num|4': ['@title'],
        'name|4': ['@name'],   
    })
    console.log(name);



  },
  components: {
    select1,
    table1
  },
  
}
</script>
