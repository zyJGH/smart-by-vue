<template>
  <el-col>
    <el-col class="margB20 margT20">
        <!--<el-col class="margB20">
            <router-link to="/smart/first/carMng/cars">
                <el-button type="warning" class="btnw">车位管理</el-button>
            </router-link>
            <el-button class="btnw floatR" disabled="disabled">空车位管理</el-button>
            <el-col class="clear"></el-col>
        </el-col>-->
        <el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">住户姓名: </el-col>
                <el-col :span="14">
                    <el-input placeholder="请输入住户姓名"></el-input>
                </el-col>
            </el-col>
            <el-col :span="6">
                <el-col :span="6" class="lih34">车位编号: </el-col>
                <el-col :span="14">
                    <el-input placeholder="请输入车位编号"></el-input>
                </el-col>
            </el-col>
            <el-col v-for="item in selectD" :key='item' :span="6">
                <select1 :selectLabel="item.label" :selectData="item.data"></select1>            
            </el-col>
            
        </el-col>
    </el-col>
    <el-col class="margB20">
        <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw floatR" type="success">增加车位</el-button>
        <el-col class="clear"></el-col>
    </el-col>
        
    <el-col class="tx-r">
        <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination> 
    </el-col>

    <el-col class="hoverf">
        <el-col v-for="item in 50" :key="item" :span="2">
            <car></car>
        </el-col>
    </el-col>
    
  </el-col>
</template>
<script>
import select1 from '../components/select';
import car from '../components/car';

export default {
    data() {
        return {
            selectD: [
                {
                    label: '类型',
                    data: [
                        {label: '固定车位', value: '固定车位' },
                        {label: '临时车位', value: '临时车位' },
                    ]
                }
            ],
        }
    },
  components: {
    select1,
    car
  }
}
</script>
