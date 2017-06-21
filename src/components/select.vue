<template>
<div>
  <span>类型: </span>
  <el-dropdown trigger="click">      
    <span class="el-dropdown-link">
        请选择<i class="el-icon-caret-bottom el-icon--right flR"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in select" key='k'>{{item.label}}</el-dropdown-item>        
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>
<script>
export default {
    props:{
        'select':{
            type:Array,
            default:[
                {label:'aaa'}
            ]
        }
    }
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
