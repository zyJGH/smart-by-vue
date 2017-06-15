<template>
<div>
  <span for="">类型: </span>
  <el-dropdown>      
    <span class="el-dropdown-link">
        类型<i class="el-icon-caret-bottom el-icon--right flR"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>
<style lang="scss">
.el-dropdown {
    width: 100px;
    line-height: 34px;
    border: 1px solid #ccc;
}
.flR {
    position: absolute;
    top: 12px;
    right: 2px;
}
</style>
