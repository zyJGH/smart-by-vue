<template>
<el-col>
    <!--<el-col class="margB20">
        <el-button class="btnw" disabled="disabled">收费统计</el-button>
        <router-link to="/smart/first/chargeMng/charge" class="floatR">
            <el-button type="warning" class="btnw">入费账单</el-button>           
        </router-link>
    </el-col>-->

    <el-col class="margT20">
        <el-col :span="11" class="border totalCharge margT20"></el-col>
        <el-col :span="12" :offset="1" class="border receCharge margT20"></el-col>
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
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series : [
            {
                name:'收费',
                type:'bar',
                barWidth: '50%',
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: "{c}"
                    }
                },
                data:[10, 52, 200, 334, 220]
            }
        ]
      };
      let receOption = {
            color: ['#4f81bd', '#d14a61'],
            title: {
                text: '本小区各类费用已收与待收对比统计图',
                subtext: '单位: 万'
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
            yAxis: [{
                type: 'value',
                boundaryGap: [0, 0.01],
                
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            xAxis: {
                type: 'category',
                data: ["物业费","停车费","水费","电费","煤气费"]
            },
            series: [
                {
                    name: '2016年',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: "{c}"
                        }
                    },
                    data: [18203, 23489, 29034, 14970, 31744]
                },
                {
                    name: '2017年',
                    type: 'bar',
                    label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: "{c}"
                    }
                },
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
    height: 600px;
}
</style>


