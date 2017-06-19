<template>
  <el-col id="carbox">
    <el-col v-for="item in 36" key="item" :span="2">
      <el-col class="car">
        <img src="../../static/assets/car.png" alt="">
        <el-col>空车位</el-col>
        <el-col>0035</el-col>
      </el-col>      
    </el-col>       
  </el-col>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
#carbox {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  .car {
     border: 1px solid #349ee2;text-align: center; margin-bottom: 20px; background: #fff; box-sizing: border-box; color: #349ee2; display: flex; display: -webkit-flex; flex-direction: column; justify-content: center; width: 70%; height: 80px;  box-shadow: 0 0 6px #349ee2;  
    img {
      width: 50%;
      margin: 0 auto;
    }
  }
}

</style>
