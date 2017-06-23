<template>
  <el-col class="margT20" style="height: 293px; overflow: hidden;">
    <el-col class="tx-r margB20">
        <el-pagination :page-size="6" layout="total, prev, pager, next, jumper" :total="tableData.length" :current-change="changePaginat()"></el-pagination> 
    </el-col>

    <el-col class="margB20">
        <el-table :data="tableData" border>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :width="item.width" :key="item.value"></el-table-column>
            <el-table-column prop="opra" label="操作" >
                <template scope="scope" v-if="item.render">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
  methods: {
    changePaginat: function() {
        // alert('换页')
    },
    handleEdit: function() {
        alert('编辑')
    }
    
  }
}
</script>
