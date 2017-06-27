
import Mock from 'mockjs'


export default function () {
    Mock.mock('/sdsd', {
        'num|1-30': 1,
        'class|1': ['自住', '租赁'],
        'size|60-120': 1,
        'floor|1-30': 1,
        'person|1-6': 1,
        'layout|1': ['三室一厅', '三室两厅', '两室两厅']
    })
    console.log(Mock);
}
