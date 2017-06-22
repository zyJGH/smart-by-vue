<template>
<el-col>
  <el-col :span='3' class="lih34">{{selectLabel}}: </el-col>
  <el-col :span="16">
    <el-select v-model="selectVal" filterable placeholder="请选择">
        <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value" >
        </el-option>
    </el-select>
  </el-col>
    
</el-col>
</template>
<script>
export default {
    data() {
        return {
            selectVal: ''
        }
    },
    props:{
        selectLabel:String,
        selectData:{
            type: Array,
            default: function () {
                return [
                    {
                        label:'aaa',
                        value: 'v3'
                    }
                ]
            }
        }
    },
}
</script>

<style lang="scss">
.el-dropdown {
    width: 60%;
    line-height: 34px;
    border-radius: 5px;
    border: 1px solid #bfcbd9;
}
.flR {
    position: absolute;
    top: 12px;
    right: 2px;
}
</style>
