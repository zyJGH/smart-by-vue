<template>
<el-row>
    <el-col :span="22" :offset="1" class="margB20">            
        <el-col :span="5"><select1/></el-col>
        <el-col :span="5"><select1/></el-col>
        <el-col :span="5"><select1/></el-col>
        <el-col :span="5"><el-input v-model="houseNum" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4" class="tx-r"><el-button type="primary">精准查找</el-button></el-col>
    </el-col>
    <el-col :span="22" :offset="1">
        <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw" type="success">增加房产</el-button>
    </el-col>

    <el-col :span="22" :offset="1" class="tx-r margB20">
        <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination> 
    </el-col>

    <el-col :span="22" :offset="1" class="margB20">
        <el-table :data="tableData" border style="width: 100%; height: 240px;">
            <el-table-column prop="houseNum" label="门牌号码"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="square" label="面积(平米)"></el-table-column>
            <el-table-column prop="floor" label="楼层" width="100"></el-table-column>
            <el-table-column prop="living" label="居住人口"></el-table-column>
            <el-table-column prop="layout" label="户型"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-col>

</el-row>
</template>
<script>
import select1 from '../components/select.vue';
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
    select1
  },
  methods: {
      
  }
}
</script>
<style lang="scss">

</style>

