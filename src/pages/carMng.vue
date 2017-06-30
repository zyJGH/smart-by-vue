<template>
    <el-col>
        <el-col class="margB20 margT20">
            <!--<el-col class="margB20">            
                <el-button class="btnw" disabled="disabled">车位管理</el-button>            
                <router-link to="/smart/first/carMng/emptyCar" class="floatR">
                    <el-button class="btnw" type="warning" >空车位管理</el-button>
                </router-link>
            </el-col>-->
            <el-col>
                <el-col :span="8">
                    <el-col :span="4" class="lih34">住户姓名</el-col>
                    <el-col :span="10">
                        <el-input placeholder="请输入住户姓名"></el-input>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="4" class="lih34">车位编号</el-col>
                    <el-col :span="10">
                        <el-input placeholder="请输入车位编码"></el-input>
                    </el-col>
                </el-col>
                <el-col v-for="item in selectD" :key='item' :span="6">
                    <select1 :selectLabel='item.label' :selectData="item.data"></select1>
                </el-col>
            </el-col>
    
        </el-col>
        <el-col class="margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success" @click="openMsgBox()">增加车位</el-button>
            <el-col class="clear"></el-col>
        </el-col>
    
        <el-col>
            <data-tables :data='tableData' class="pagination" :row-action-def='rowActionsDef()'>
                <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>
            </data-tables>
        </el-col>
    
        <el-col v-if="flagMsg">
            <transition name="el-fade-in-linear">
                <div tabindex="-1" class="el-message-box__wrapper">
                    <div class="el-message-box">
                        <div class="el-message-box__header">
                            <div class="el-message-box__title">增加车位</div>
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
    
    </el-col>
</template>
<script>
import select1 from '../components/select';

export default {
    data() {
        return {
            flagMsg: false,
            selectD: [
                {
                    label: '类型',
                    data: [
                        { label: '固定车位', value: 'a1' },
                        { label: '临时车位', value: 'a2' }
                    ]
                }
            ],
            tableData: [],
            cols: [
                { prop: 'num', label: '车位编号' },
                { prop: 'class', label: '类型' },
                { prop: 'numberPlates', label: '车牌号' },
                { prop: 'flag', label: '是否已缴费' },
                { prop: 'money', label: '缴费金额' },
                { prop: 'start', label: '起始时间' },
                { prop: 'end', label: '终止时间' },
            ],
            inputData: [
                { prop: 'num', label: '车位编号', value: '' },
                { prop: 'class', label: '类型', value: '' },
                { prop: 'numberPlates', label: '车牌号', value: '' },
                { prop: 'flag', label: '是否已缴费', value: '' },
                { prop: 'money', label: '缴费金额', value: '' },
                { prop: 'start', label: '起始时间', value: '' },
                { prop: 'end', label: '终止时间', value: '' },
            ]
        }
    },
    components: {
        select1
    },
    created() {
        this.axios('/car', this.tableData).then((res) => {
            this.tableData = res.data.car
        })
    },
    methods: {
        rowActionsDef() {
            let self = this;
            return [
                {
                    name: '修改',
                    handler(row) {
                        self.flagMsg = !self.flagMsg;
                        
                        self.inputData.forEach(function(val) {
                            for (var key in row) {
                                if (val.prop == key) {
                                   let ind = self.inputData.indexOf(val);
                                   self.inputData[ind].value = row[key];
                                } 
                            }
                            
                        }, this);
                    }
                },
                {
                    name: '提醒缴费',
                    handler(row) {
                        self.$message('已提醒');
                    }
                }
            ]
        },
        openMsgBox() {
            this.flagMsg = !this.flagMsg;
        },
        cancel() {
            this.flagMsg = !this.flagMsg;
        },
        promise() {
            this.flagMsg = !this.flagMsg;
            let obj = {};
            this.inputData.forEach(function (val) {
                obj[val.prop] = val.value;
                val.value = '';
            })
            this.tableData.unshift(obj)
        },
    }
}
</script>
<style lang="scss">
.pagination {
    top: 0
}

.el-message-box__wrapper {
    z-index: 2007;
    background: rgba(0, 0, 0, .4);
}

.el-message-box {
    width: 700px;
}
</style>
