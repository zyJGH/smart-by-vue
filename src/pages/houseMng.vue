<template>
<el-row>
    <el-col :span="22" :offset="1" class="margB20">            
        <el-col v-for="item in 3" key='item' :span="5">
            <select1/>
        </el-col>
        <el-col :span="5"><el-input v-model="houseNum" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4" class="tx-r"><el-button type="primary">精准查找</el-button></el-col>
    </el-col>
    <el-col :span="22" :offset="1">
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加房产</el-button>
    </el-col>
        
    <table1></table1>

</el-row>
</template>
<script>
import select1 from '../components/select.vue';
import table1 from '../components/table'

export default {
  data() {
      return {
          houseNum: '',
          tableData: [{
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',
            }, {
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',
            }, {
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',
            }, {
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',
            }, {
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',  
            }, {
            houseNum: '16-05-02',
            type: '自住',
            square: '58',
            floor: '2',
            living: '2',
            layout: '2室2厅',          
        }]
      }
  },
  components: {
    select1,
    table1
  },
  methods: {
      
  }
}
</script>
<style lang="scss">

</style>

