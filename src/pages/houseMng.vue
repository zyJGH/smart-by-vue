<template>
    <el-row>
        <el-col class="margB20 margT20">
            <el-col v-for="item in selectD" :key='item' :span="7">
                <select1 :selectLabel="item.label" :selectData="item.data" @changeVal="ftmethod"></select1>
            </el-col>
            <el-col :span="7">
                <el-col :span="5" class="lih34">门牌号码</el-col>
                <el-col :span="14">
                    <el-input v-model="doorNum" placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>
    
        <el-col class="margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success" @click="openMsgBox()">增加房产</el-button>
            <el-col class="clear"></el-col>
        </el-col>
    
        <el-col>
            <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()'>
                <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
            </data-tables>
        </el-col>
        
        <el-col v-if="flagMsg">
            <transition name="el-fade-in-linear">
                <div tabindex="-1" class="el-message-box__wrapper">
                    <div class="el-message-box">
                        <div class="el-message-box__header">
                            <div class="el-message-box__title">增加房产</div>
                            <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="flagMsg = !flagMsg">
                                <i class="el-message-box__close el-icon-close"></i>
                            </button>
                        </div>
                        
                        <div class="el-message-box__content">
                            <div class="el-message-box__status"></div>
                            <el-col :span="12" class="margB20" v-for="item in inputData" :key="item">
                                <el-col :span="8" class="lih34 tx-r" :prop="item.prop">{{item.label}} :&nbsp;</el-col>
                                <el-col :span="16">
                                    <el-input v-model="item.value"></el-input>
                                </el-col>
                            </el-col>                        
                        </div>
                        <div class="el-message-box__btns">
                            <button type="button" class="el-button el-button--default" @click="cancel()">
                                <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--default el-button--primary" @click="promise()">
                                <span>确定</span>
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </el-col>

    </el-row>
</template>
<script>
import select1 from '../components/select.vue';

export default {
    data() {
        return {
            flagMsg: false,
            doorNum: '',
            houseNum: '',
            tableData: [],
            selectD: [
                {
                    label: '类型',
                    data: [
                        { label: '自住', value: '自住' },
                        { label: '租赁', value: '租赁' }
                    ],
                },
                {
                    label: '楼层',
                    data: [
                        { label: '1楼', value: '1楼' },
                        { label: '2楼', value: '2楼' },
                        { label: '3楼', value: '3楼' },
                        { label: '4楼', value: '4楼' },
                        { label: '5楼', value: '5楼' },
                        { label: '6楼', value: '6楼' },
                        { label: '7楼', value: '7楼' },
                        { label: '8楼', value: '8楼' }
                    ],
                }
            ],
            cols: [
                { prop: 'num', label: '门牌号码' },
                { prop: 'class', label: '类型' },
                { prop: 'size', label: '面积（平米）' },
                { prop: 'floor', label: '楼层' },
                { prop: 'person', label: '居住人口' },
                { prop: 'layout', label: '户型' },
            ],
            inputData:[
                { label: '门牌号码', value: '', prop: 'num' },
                { label: '类型', value: '', prop: 'class' },
                { label: '面积(平米)', value: '', prop: 'size' },
                { label: '楼层', value: '', prop: 'floor' },
                { label: '居住人口', value: '', prop: 'person' },
                { label: '户型', value: '', prop: 'layout' },
            ]
        }
    },
    components: {
        select1,
        // msgBox
    },
    mounted() {
        this.axios.get('/houseMng').then((res) => {
            // console.log(res.data);
            this.tableData = res.data.houseMng;

        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        ftmethod(item) {
            // console.log(item);
        },
        getRowActionsDef() {
            let self = this;
            return [{
                name: '编辑',
                handler(row) {
                    // self.$message('Edit clicked');
                    this.num = row.num;
                    self.flagMsg = true;
                },
            }]
        },
        openMsgBox() {
            this.flagMsg = !this.flagMsg;
            // var promise = new Promise(function(resolve, reject) {

            // })
            
        },
        cancel() {
            this.flagMsg = !this.flagMsg;
        },
        promise() {
            this.flagMsg = !this.flagMsg;
            let obj = {};
            this.inputData.forEach(function(val){
                obj[val.prop] = val.value;
                val.value = '';
            })
            this.tableData.unshift(obj)
        },
    }
}
</script>
<style lang="scss">
.el-message-box__wrapper {
    z-index: 2007;
    background: rgba(0,0,0,.4);
}
.el-message-box {
    width: 500px;
}
</style>

