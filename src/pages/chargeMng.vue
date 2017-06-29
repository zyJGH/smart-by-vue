<template>
    <el-row>
        <el-col class="margB20">
            <!--<el-col class="margB20">
                <router-link to="/smart/first/chargeMng/chargesta">
                    <el-button type="warning" class="btnw">收费统计</el-button>
                </router-link>
                <el-button class="btnw floatR" disabled="disabled">入费账单</el-button>
                <el-col class="clear"></el-col>
            </el-col>-->
            
            <el-col class="margT20">
                <el-col :span="6">
                    <el-col :span="6" class="lih34">住户姓名</el-col>
                    <el-col :span="14">
                        <el-input placeholder="请输入住户姓名"></el-input>
                    </el-col>
                </el-col>
                <el-col :span="6">
                    <el-col :span="5" class="lih34">门牌号</el-col>
                    <el-col :span="15">
                        <el-input placeholder="请输入门牌号"></el-input>
                    </el-col>
                </el-col>
                <el-col v-for="item in selectD" :key='item' :span="6">
                    <select1 :selectLabel="item.label" :selectData="item.data"></select1>
                </el-col>
            </el-col>
            
        </el-col>
        <el-col class="margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success" @click="openMsgBox()">增加收费记录</el-button>
            <el-col class="clear"></el-col>
        </el-col>

        <el-col>
            <data-tables :data='tableData' class="pagination" :has-action-col="false">
                <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label" :width="item.width"></el-table-column>
            </data-tables>
        </el-col>

        <el-col v-if="flagMsg">
            <transition name="el-fade-in-linear">
                <div tabindex="-1" class="el-message-box__wrapper">
                    <div class="el-message-box">
                        <div class="el-message-box__header">
                            <div class="el-message-box__title">增加收费记录</div>
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
import select1 from '../components/select';

export default {
  data() {
    return {
        flagMsg: false,
        tableData: [],
        selectD:[
            {
                label: '分类',
                data: [
                   {label: '物业费', value: '物业费'},
                   {label: '水费', value: '水费'},
                   {label: '电费', value: '电费'},
                   {label: '停车费', value: '停车费'},
                   {label: '燃气费', value: '燃气费'},
                   {label: '全部', value: '全部'},
                ],
            },
            {
                label: '缴费方式',
                data: [
                    {label: '支付宝', value: '支付宝'},
                    {label: '微信', value: '微信'},
                    {label: '现金', value: '现金'},
                    {label: '银联', value: '银联'},
                    {label: '全部', value: '全部'},
                ],
            }
        ],
        cols: [
            { prop: 'sort', label: '序号' },
            { prop: 'num', label: '门牌号' },
            { prop: 'class', label: '分类' },
            { prop: 'size', label: '缴费金额' },
            { prop: 'style', label: '缴费方式' },
            { prop: 'name', label: '缴费人姓名' },
            { prop: 'phone', label: '缴费人电话' },
            { prop: 'date', label: '缴费时间' }
        ],
        inputData:[
            { label: '序号', value: '', prop: 'sort' },
            { label: '门牌号', value: '', prop: 'num' },
            { label: '分类', value: '', prop: 'class' },
            { label: '缴费金额', value: '', prop: 'size' },
            { label: '缴费方式', value: '', prop: 'style' },
            { label: '缴费人姓名', value: '', prop: 'name' },
            { label: '缴费人电话', value: '', prop: 'phone' },
            { label: '缴费时间', value: '', prop: 'date' },
        ]
    }
  },
  mounted() {
    let Mock = require('mockjs');
    let obj;
    for (var i = 0; i < 34; i++) {
        obj = Mock.mock({
            'sort|1-100': 1,
            'num|1-100': 1,
            'class|1': ['物业费', '停车费'],
            'size|60-1000': 1,
            'style|1': ['支付宝', '现金', '微信', '银联'],
            'name|1': ['@cname'],
            'phone|1-1000000000': 1,
            'date|1': '@date', 
        })
        this.tableData.push(obj);       
    }
  },
  components: {
    select1,
  },
  methods: {
    openMsgBox() {
        this.flagMsg = !this.flagMsg;
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
.width {
    width: 22%;
}
.el-message-box__wrapper {
    z-index: 2007;
    background: rgba(0,0,0,.4);
}
.el-message-box {
    width: 600px;
}
</style>
