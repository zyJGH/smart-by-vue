<template>
<el-col>
    <el-col :span="8" :offset="8" class="border totalCharge"></el-col>
    <el-col class="tx-c margT20">
        <el-col :span="12">
            <el-col :span="14" :offset="10" class="border genderClass"></el-col>
        </el-col>    
        <el-col :span="12" style="padding-left: 20px;">
            <el-col :span="14" class="border leaseOrHome">

            </el-col>
        </el-col>    
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
      let echarts = require('echarts');
      let totalCharge = echarts.init(document.querySelector('.totalCharge'));
      let genderClass = echarts.init(document.querySelector('.genderClass'));      
      let leaseOrHome = echarts.init(document.querySelector('.leaseOrHome'));
      let totalOption = {
        title: {
            text: '本小区各类收费统计表',
            // subtext: '单位: 万',
            x: 'center'
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
                data : ["1~18","19~25","25~55","56~70","70以上"],
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
                name:'',
                type:'bar',
                barWidth: '40%',
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
      let genderOption = {
        title : {
            text: '本小区住户男女统计表',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '男女比例',
                type: 'pie',
                radius : '70%',
                center: ['50%', '55%'],
                label: {
                    normal: {
                        show: true,
                        position: 'inner',
                        formatter: "{b}: \n {d}%"
                    }
                },
                data:[
                    {value:335, name:'男'},
                    {value:310, name:'女'},
                
                ],
                
            }
        ]
      };
      let leaseOption = {

        title : {
            text: '本小区住户出租与自主比例统计表',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '出租与自主比例',
                radius : '70%',
                center: ['50%', '55%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                        position: 'inner',
                        formatter: "{b}:\n{d}%"
                    }
                },
                data:[
                    {value:335, name:'自住'},
                    {value:310, name:'租户'},
                
                ],                
            }
        ]
      };
      totalCharge.setOption(totalOption);
      genderClass.setOption(genderOption);
      leaseOrHome.setOption(leaseOption);
  }

}
</script>

<style lang="scss">
.border {
    border: 1px solid #aeaeae;
    padding-top: 10px;
    height: 230px;
}
</style>


