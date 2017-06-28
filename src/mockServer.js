
import Mock from 'mockjs'

export default function () {
    Mock.mock('/login', {
        'token|1000-20000': 1,
    })

    Mock.mock('/houseMng', {
        'houseMng|21-50': [{
            // 'id|+1':1,
            'num|100-400': 1,
            'class|1': ['自住', '租赁'],
            'size|60-120': 1,
            'floor|1-30': 1,
            'person|1-6': 1,
            'layout|1': ['三室一厅', '三室两厅', '两室两厅', '两室一厅']
        }]
    })

    Mock.mock('/leaseMng', {
        'leaseMng|20-60': [{
            'num|10-30': 1,
            'fname|1': '@cname',
            'fphone|1-100000000000': 1,
            'zname|1': '@cname',
            'zphone|1-100000000000': 1,
            'year|1-10': 1,
            'start|1': '@date',
            'end|1': '@date',
        }]
    })

    Mock.mock('/householdMng', {
        'householdMng|20-60': [{
            'num|10-30': 1,
            'name|1': '@cname',
            'phone|1-10000000000': 1,
            'person|1-10': 1,
            'floor|1-30': 1,
            'size|80-120': 1
        }]
    })

    Mock.mock('/lampMng', {
        'lampMng|20-60': [{
            'sort|10-30': 1,
            'num|100-400': 1,
            'zname|1': '@cname',
            'class|1': ['已修', '待修', '在修'],
            'bname|1': '@cname',
            'phone|1000000-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date'
        }]
    })

    Mock.mock('/water', {
        'water|20-60': [{
            'sort|10-30': 1,
            'num|100-400': 1,
            'tab|1': ['水龙头', '水管', '地漏'],
            'class|1': ['已修', '待修', '在修'],
            'bname|1': '@cname',
            'phone|1000000-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date'
        }]
    })

    Mock.mock('/green', {
        'green|20-60': [{
            'sort|10-30': 1,
            'num|100-400': 1,
            'tab|1': ['植被', '花坛' ],
            'class|1': ['已修', '待修', '在修'],
            'bname|1': '@cname',
            'phone|1000000-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date'
        }]
    })

    Mock.mock('/road', {
        'road|20-60': [{
            'sort|10-30': 1,
            'num|100-400': 1,
            'tab|1': ['马路', '车位' ],
            'class|1': ['已修', '待修', '在修'],
            'bname|1': '@cname',
            'phone|1000000-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date'
        }]
    })
// {prop: 'num', label: '编号' },
//             {prop: 'ctime', label: '创建时间' },
//             {prop: 'class', label: '进出类型' },
//             {prop: 'door', label: '出入人所属门牌' },
//             {prop: 'flag', label: '是否外访' },
//             {prop: 'floor', label: '楼层' },
//             {prop: 'date', label: '创建时间' },
     Mock.mock('/door', {
        'door|20-60': [{
            'num|100-400': 1,
            'class|1': ['进门', '出门' ],
            'ctime|1': '@date',
            'door|100-1000': 1,
            'flag|1': ['是', '否'],
            'floor|1-30': 1,
            'date|1': '@date'
        }]
    })

}