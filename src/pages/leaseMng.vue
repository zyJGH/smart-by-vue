<template>
  <el-col>
    <el-col class="margB20">
        <el-col class="margB20"></el-col>
        <el-col>
            <el-col v-for="item in selectD" :key='item.label' :span="7">
                <select1 :selectLabel="item.label" :selectData="item.data"></select1>            
            </el-col>
            <el-col :span="10">
                <el-col :span="4" class="lih34">门牌号码: </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入门牌号码"></el-input>
                </el-col>
            </el-col>
        </el-col>                
    </el-col>
    <el-col class="margB20">
        <el-button class="btnw floatL" type="info">搜&nbsp;&nbsp;索</el-button>
        <el-button class="btnw floatR" type="success" @click="openMsgBox()">增加租赁记录</el-button>
        <el-col class="clear"></el-col>
    </el-col>
    
    <el-col>
        <data-tables :data='tableData' class="pagination" :row-action-def='getRowActionsDef()'>
            <el-table-column v-for="item in cols" :prop="item.prop" :label="item.label" :key="item.label"></el-table-column>            
        </data-tables>
    </el-col>
    
    <router-view></router-view>

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
  </el-col>
</template>
<script>
import select1 from '../components/select';
export default {
  data() {
    return {
        tableData: [],
        selectD:[
            {
                label: '租期',
                data: [
                    {label: '1年', value: '1年'},
                    {label: '2年', value: '2年'},
                    {label: '3年', value: '3年'},
                    {label: '4年', value: '4年'},
                    {label: '5年', value: '5年'}
                ],
            },
            {
                label: '楼层',
                data: [
                    {label: '1楼', value: '1楼'},
                    {label: '2楼', value: '2楼'},
                    {label: '3楼', value: '3楼'},
                    {label: '4楼', value: '4楼'},
                    {label: '5楼', value: '5楼'},
                    {label: '6楼', value: '6楼'},
                    {label: '7楼', value: '7楼'},
                    {label: '8楼', value: '8楼'}
                ],
            }
        ],
        cols: [
            { prop: 'num', label: '门牌号码' },
            { prop: 'fname', label: '房东姓名' },
            { prop: 'fphone', label: '房东电话' },
            { prop: 'zname', label: '租户姓名' },
            { prop: 'zphone', label: '租户电话' },
            { prop: 'year', label: '租期（年）' },
            { prop: 'start', label: '租赁开始时间' },
            { prop: 'end', label: '租赁结束时间' },
        ],
        inputData:[
            { label: '门牌号码', value: '', prop: 'num' },
            { label: '房东姓名', value: '', prop: 'fname' },
            { label: '房东电话', value: '', prop: 'fphone' },
            { label: '租户姓名', value: '', prop: 'zname' },
            { label: '租户电话', value: '', prop: 'zphone' },
            { label: '租期（年）', value: '', prop: 'year' },
            { label: '租赁开始时间', value: '', prop: 'start' },
            { label: '租赁结束时间', value: '', prop: 'end' },
        ],
        flagMsg: false,
    }
  },
  mounted() {
    this.axios.get('/leaseMng').then((res) => {
        this.tableData = res.data.leaseMng;
    }).catch((error) => {
        console.log(error);
    })
  },
  components: {
    select1,
  },
  methods: {
    getRowActionsDef(){
      let self=this;
      return [{
        handler(row) {
            self.flagMsg = !self.flagMsg; 
            self.num = row.num;        
        },
        name: '修改'
      },{
        handler(row) {
          self.$message('查看 clicked')
        },
        name: '查看'
      }]
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
