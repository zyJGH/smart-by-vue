<template>
  <el-col>
    <el-col class="margB20">
        <el-col class="margB20">            
            <el-button class="btnw" disabled="disabled">车位管理</el-button>            
            <router-link to="/smart/first/carMng/emptyCar" class="floatR">
                <el-button class="btnw" type="warning" >空车位管理</el-button>
            </router-link>
        </el-col>
        <el-col>
            <el-col v-for="item in 2" key='item' :span="6">
                <select1 :select='select' />            
            </el-col>
            <el-col :span="12">
                <el-col :span="4" class="lih34">车位编号: </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入车位编码"></el-input>
                </el-col>
            </el-col>
        </el-col>
                
    </el-col>
    <el-col>
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加车位</el-button>
    </el-col>
    <table1></table1>
  </el-col>
</template>
<script>
import select1 from '../components/select';
import table1 from '../components/table';
// import mock from 'mock.js';
export default {
    data(){
        return {
            select:[
                { label:'1'},
                { label:'2'}
            ]
        }
    },
    components: {
        select1,
        table1
    },
    mounted() {
        // let mock = require('mockjs');
        // let m = Mock.mock({
        //     'name|2': '@str'
        // });
        // console.log(m);
    }
}
</script>
