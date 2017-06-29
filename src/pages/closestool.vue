<template>
    <el-col>
        <el-col class="margT20">
            <el-col :span="8">
                <el-col :span="4" class="lih34">住户姓名:</el-col>
                <el-col :span="12"><el-input placeholder="请输入住户姓名"></el-input></el-col>
            </el-col>
            
            <el-col :span="8">
                <el-col :span="4" class="lih34">门牌号:</el-col>
                <el-col :span="12"><el-input placeholder="请输入门牌号"></el-input></el-col>
            </el-col>

            <el-col :span="4">
                <elselect v-for="item in selectD" :key="item.label" :selectLabel="item.label" :selectData="item.data"></elselect>
            </el-col>
        </el-col>

        <el-col class="margT20 margB20">
            <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
            <el-button class="btnw floatR" type="success" @click="openMsgBox()">增加马桶报修</el-button>
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
                            <div class="el-message-box__title">增加马桶报修</div>
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
import elselect from '../components/select';

export default {
  data() {
      return {
        flagMsg: false,
        tableData: [],
        selectD: [
            {
                label: '类型',
                data: [
                    {label: '已修', value:'已修'},
                    {label: '未修', value:'未修'},
                    {label: '全部', value:'全部'},
                ]
            }
        ],
        cols: [
            { prop: 'sort', label: '序号' },
            { prop: 'num', label: '门牌号' },
            { prop: 'cname', label: '住户姓名' },
            { prop: 'style', label: '分类' },
            { prop: 'bname', label: '报修人姓名' },
            { prop: 'bphone', label: '报修人电话' },
            { prop: 'bdate', label: '报修时间' },
            { prop: 'cdate', label: '维修成功时间' }
        ],
        inputData: [
            { prop: 'sort', label: '序号', value: '' },
            { prop: 'num', label: '门牌号', value: '' },
            { prop: 'cname', label: '住户姓名', value: '' },
            { prop: 'style', label: '分类', value: '' },
            { prop: 'bname', label: '报修人姓名', value: '' },
            { prop: 'bphone', label: '报修人电话', value: '' },
            { prop: 'bdate', label: '报修时间', value: '' },
            { prop: 'cdate', label: '维修成功时间', value: '' }
        ]
      }
  },
  created() {
    this.axios('/closestool', this.tableData).then((res)=>{
        this.tableData = res.data.closestool
    })
  },
  components: {
      elselect
  },
  methods: {
    rowActionsDef() {
        return [
            {
                name: '安排陈师傅维修',
                hander(row) {
                    this.flagMsg = !this.flagMsg;
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
    width: 700px;
}
</style>
