<template>
<el-col>
    <el-col class="margB20">
        <el-button class="btnw" disabled="disabled">收费统计</el-button>
        <router-link to="/smart/chargeMng" class="floatR">
            <el-button type="warning" class="btnw">入费账单</el-button>           
        </router-link>
         <el-col class="clear"></el-col>
        <el-col class="clear"></el-col>
    </el-col>

    <el-col>
        <el-col :span="11" class="border totalCharge"></el-col>
        <el-col :span="12" :offset="1" class="border receCharge"></el-col>
    </el-col>    
</el-col>  
</template>

<script>
export default {
  data() {
      return {

      }
  },
  mounted() {
      var echarts = require('echarts');
      let totalCharge = echarts.init(document.querySelector('.totalCharge'));
      let receCharge = echarts.init(document.querySelector('.receCharge'));
      let totalOption = {
        title: {
            text: '本小区各类收费统计表',
            subtext: '单位: 万',
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
                data : ["物业费","停车费","水费","电费","煤气费"],
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
                name:'收费',
                type:'bar',
                barWidth: '50%',
                data:[10, 52, 200, 334, 220]
            }
        ]
      };
      let receOption = {
            color: ['#4f81bd', '#d14a61'],
            title: {
                text: '本小区各类费用已收与待收对比统计图',
                // left: 'center',
                subtext: '单位: 万'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2016年', '2017年'],
                right: '10px'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: ["物业费","停车费","水费","电费","煤气费"]
            },
            series: [
                {
                    name: '2016年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 14970, 31744]
                },
                {
                    name: '2017年',
                    type: 'bar',
                    data: [29325, 23438, 31000, 34141, 21807]
                }
            ]
      };

      totalCharge.setOption(totalOption);
      receCharge.setOption(receOption);
  }

}
</script>

<style lang="scss">
.border {
    border: 1px solid #aeaeae;
    padding: 10px;
    height: 400px;
}
</style>


