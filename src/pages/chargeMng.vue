<template>
    <el-row>
        <el-col class="margB20">
            <el-col class="margB20">
                <router-link to="/smart/first/chargeMng/chargesta">
                    <el-button type="warning" class="btnw">收费统计</el-button>
                </router-link>
                <el-button class="btnw floatR" disabled="disabled">入费账单</el-button>
                <el-col class="clear"></el-col>
            </el-col>

            <el-col v-for="item in 4" key='item' :span="6">
                <select1/>
            </el-col>
        </el-col>
        <el-col>
            <el-button class="btnw" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw" type="success">增加缴费记录</el-button>
        </el-col>
        <table1></table1>

    </el-row>
</template>
<script>
import select1 from '../components/select';
import table1 from '../components/table'

export default {
  components: {
    select1,
    table1
  }
}
</script>
