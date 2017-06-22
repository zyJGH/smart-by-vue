<template>
  <el-col class="margT20">
    <el-col class="tx-r margB20">
        <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination> 
    </el-col>

    <el-col class="margB20">
        <el-table :data="tableData" border>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :width="item.width" key="" v-html="item.html">
                <!--<template scope="scope" v-if="item.render">
                    <div v-html="item.html"></div>
                </template>-->
            </el-table-column>
        </el-table>
    </el-col>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  props: {
    tableData: {
        type: Array,
        default:function() {
            return []
        }
    },
    cols: {
        type:Array,
        default:function() {
            return []
        }
    }
  },
}
</script>
