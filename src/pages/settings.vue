<template>

    <el-col class="margT20">
        <el-col :span="7" :offset="2" class="zhNum">
            <router-link to="/smart/settings/householdStatistics" class="w100">
                <el-col :span="7">
                    <img src="../../static/assets/zhtj.png" class="margL20">
                </el-col>
                <el-col :span="16">
                    <el-col class="col333 font18">住户通知</el-col>
                    <el-col class="font12 cola7a7a7">进出门禁通知</el-col>
                </el-col>
            </router-link>
        </el-col>

        <el-col :span="7" class="zhNum">
            <router-link to="/smart/settings/advert" class="w100">
            <el-col :span="7">
                <img src="../../static/assets/gggl.png" class="margL20">
            </el-col>
            <el-col :span="16">
                <el-col class="col333 font18">广告管理</el-col>
                <el-col class="font12 cola7a7a7">所有的广告管理</el-col>
            </el-col>
            </router-link>
        </el-col>
        
    </el-col>
</template>
