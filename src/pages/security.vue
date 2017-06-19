<template>
  <el-col>
      <el-col>
            <el-col :span="7" :offset="2" class="zhNum">
                <router-link to="/smart/housemng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/fcgl2.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">进出门禁</el-col>
                    <el-col class="font12 cola7a7a7">进出门禁管理</el-col>
                </el-col>
                </router-link>
            </el-col>

            <el-col :span="7" class="zhNum">
                <router-link to="/smart/leaseMng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/zlgl2.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">电梯管理</el-col>
                    <el-col class="font12 cola7a7a7">所有的电梯管理</el-col>
                </el-col>
                </router-link>
            </el-col>

            <el-col :span="7" class="zhNum">
                <router-link to="/smart/householdMng" class="colf39500 w100">
                <el-col :span="7">
                    <img src="../../static/assets/miehuoqi.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">灭火器装置管理</el-col>
                    <el-col class="font12 cola7a7a7">灭火器装置管理</el-col>
                </el-col>
                </router-link>
            </el-col>
           
        </el-col>
  </el-col>
</template>
