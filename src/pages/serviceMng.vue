<template>
    <el-col>
        <el-col>
            <el-col :span="7" :offset="2" class="zhNum">
                <router-link to="/smart/housemng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/matong.png" class="w48 margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">马桶维修</el-col>
                    <el-col class="font12 cola7a7a7">所有的马桶报修</el-col>
                </el-col>
                </router-link>
            </el-col>

            <el-col :span="7" class="zhNum">
                <router-link to="/smart/leaseMng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/deng.png" class="w48 margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">灯管报修</el-col>
                    <el-col class="font12 cola7a7a7">所有的灯管报修</el-col>
                </el-col>
                </router-link>
            </el-col>

            <el-col :span="7" class="zhNum">
                <router-link to="/smart/householdMng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/baoxiu.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">水道报修</el-col>
                    <el-col class="font12 cola7a7a7">下水道、水龙头、水管报修管理</el-col>
                </el-col>
                </router-link>
            </el-col>

            <el-col :span="7" :offset="2" class="zhNum">
                <router-link to="/smart/chargemng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/lvhua.png" class="margL20 w48">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">绿化报修</el-col>
                    <el-col class="font12 cola7a7a7">所有绿化报修管理</el-col>
                </el-col>
                </router-link>
            </el-col>
            
            <el-col :span="7" class="zhNum">
                <router-link to="/smart/carMng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/malu.png" class="margL20 w48">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">马路地面报修</el-col>
                    <el-col class="font12 cola7a7a7">马路地面报修管理</el-col>
                </el-col>
                </router-link>
            </el-col>
           
        </el-col>

       <el-col :offset="2" class="statistics">

       </el-col>
    </el-col>
</template>
<script>
export default {
  data() {
      return {

      }
  },
  mounted () {
      var echarts = require('echarts');
      let statistics = echarts.init(document.querySelector('.statistics'));
      let totalOption = {
        title: {
            text: '报修统计管理',
            subtext: '单位: 次',
            left: 'center'
        },
        color: ['#4f81bd'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis : [
            {
                type : 'category',
                data : ["马桶报修","灯管报修","水道报修","绿化报修","马路地面报修"],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'报修',
                type:'bar',
                barWidth: '50%',
                data:[120, 52, 200, 134, 220]
            }
        ]
      };
      statistics.setOption(totalOption);
  }
}
</script>
<style lang="scss">
.statistics {
    width: 60%;
    height: 340px;
}
</style>

