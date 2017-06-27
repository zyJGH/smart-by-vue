
import Mock from 'mockjs'

export default function () {
    Mock.mock('/login', {
        'token|1000-20000': 1,
    })

    Mock.mock('/houseMng', {
        'houseMng|21-50': [{
            'num|1-30': 1,
            'class|1': ['自住', '租赁'],
            'size|60-120': 1,
            'floor|1-30': 1,
            'person|1-6': 1,
            'layout|1': ['三室一厅', '三室两厅', '两室两厅', '两室一厅']
        }]
    })
}
