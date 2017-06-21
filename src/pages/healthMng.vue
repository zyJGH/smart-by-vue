<template>
    <el-col>
        <el-col :span="7" :offset="2" class="zhNum">
            <router-link to="/smart/serviceMng/closestool" class="w100">
                <el-col :span="7">
                    <img src="../../static/assets/loft.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">楼道卫生管理</el-col>
                    <el-col class="font12 cola7a7a7">楼道卫生管理</el-col>
                </el-col>
            </router-link>
        </el-col>

        <el-col :span="7" class="zhNum">
            <router-link to="/smart/serviceMng/" class="w100">
            <el-col :span="7">
                <img src="../../static/assets/park.png" class="margL20">
            </el-col>
            <el-col :span="16">
                <el-col class="col333 font18">公园马路卫生管理</el-col>
                <el-col class="font12 cola7a7a7">公园马路卫生管理</el-col>
            </el-col>
            </router-link>
        </el-col>
        
    </el-col>
</template>
