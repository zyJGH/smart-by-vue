<template>
  <el-col>
    <el-col class="tx-r margB20">
        <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination> 
    </el-col>

    <el-col class="margB20">
        <el-table :data="tableData" border class="tx-c">
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
  </el-col>
</template>

<script>
export default {
  data() {
      return {
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
        }]
      }
  }
}
</script>
<style lang="scss">

</style>
