<template>
<el-col>
    <el-col class="margB20">
        <el-button class="btnw" disabled="disabled">灭火装置状态</el-button>
        <router-link to="/smart/securityMng/fire/huo" class="floatR">
            <el-button type="warning" class="btnw">灭火装置</el-button>           
        </router-link>
    </el-col>

    <el-col>        
        <el-col :span="2" class="lih34">单元号码: </el-col>
        <el-col :span="6">
            <el-input placeholder="请输入单元号码"></el-input>
        </el-col>
        <el-col :span="4" :offset="2">
            <el-button type="info" class="btnw">搜索</el-button>
        </el-col>
        <el-col :span="10" class="tx-c">
            <el-col :span="4" :offset="16">
                <img src="../../static/assets/miehuoqi.png" class="w50" alt="">
                <el-col class="col0681c1">正常</el-col>
            </el-col>
            <el-col :span="4">
                <img src="../../static/assets/miehuoqi1.png" class="w50" alt="">
                <el-col class="colred">损坏</el-col>
            </el-col>
        </el-col>
    </el-col>  

    <el-col class="hoverf">
        <el-col v-for="item in fireData" :key="item" :span="2">
            <el-col v-if = "item.flag">
                <fireExtinguisher></fireExtinguisher>
            </el-col>
            <el-col v-else = "!item.flag">
                <fireExtinguisherN></fireExtinguisherN>
            </el-col>
            
        </el-col>
    </el-col>
    <el-col class="margT20">
        <el-col class="tx-r margB20">
            <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination> 
        </el-col>
    </el-col>
        
</el-col>  
</template>

<script>
import fireExtinguisher from '../components/fireExtinguisher';
import fireExtinguisherN from '../components/fireExtinguisher-no';
export default {
  data() {
      return {
        fireData: [
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : true,
                unit: '3栋202',
            },
            {
                flag : false,
                unit: '3栋301',
            },
            {
                flag : true,
                unit: '3栋302',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : true,
                unit: '3栋202',
            },
            {
                flag : false,
                unit: '3栋301',
            },
            {
                flag : true,
                unit: '3栋302',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : true,
                unit: '3栋202',
            },
            {
                flag : false,
                unit: '3栋301',
            },
            {
                flag : true,
                unit: '3栋302',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
            {
                flag : false,
                unit: '3栋101',
            },
            {
                flag : true,
                unit: '3栋102',
            },
            {
                flag : true,
                unit: '3栋103',
            },
            {
                flag : false,
                unit: '3栋201',
            },
        ]
      }
  },
  components: {
      fireExtinguisher,
      fireExtinguisherN,
  }
}
</script>

<style lang="scss">
.border {
    border: 1px solid #aeaeae;
    padding: 10px;
    height: 400px;
}
.w50 {
    width: 50px;
}
</style>


