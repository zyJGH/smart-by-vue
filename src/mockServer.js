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

    Mock.mock('/car', {
        'car|30-60': [{
            'num|0001-1000': 1,
            'class|1': ['固定车位', '临时车位'],
            'numberPlates|1': '浙A' + Math.random().toString(36).substr(2).slice(0,4).toUpperCase(),
            'flag|1': ['是', '否'],
            'money|0-1000': 1,
            'start|1': '@date',
            'end|1': '@date',
        }]
    })

    Mock.mock('/closestool',{
        'closestool|30-60': [{
            'sort|1-100': 1,
            'num|1-100': 1,
            'cname|1': '@cname',
            'style|1': ['已修', '未修'],
            'bname|1': '@cname',
            'bphone|1-1000000000': 1,
            'bdate|1': '@date',
            'cdate|1': '@date',
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

    Mock.mock('/door', {
        'door|20-60': [{
            'num|100-400': 1,
            'class|1': ['进门', '出门' ],
            'houseNum|100-1000': 1,
            'door|100-1000': 1,
            'flag|1': ['是', '否'],
            'floor|1-30': 1,
            'date|1': '@date'
        }]
    })

    Mock.mock('/lift', {
        'lift|20-60': [{
            'sort|+1': 1,
            'date|1': '@date',
            'safeState|1': ['安全', '不安全'],
            'unit|10-50': 1,
            'name|1': '@cname',
            'phone|100000000-1000000000': 1,
            'health|1': ['良好', '一般', '优秀', '差'],
            
        }]
    })

    Mock.mock('/fire', {
        'fire|20-60': [{
            'sort|+1': 1,
            'date|1': '@date',
            'safeState|1': ['安全', '不安全'],
            'unit|10-50': 1,
            'name|1': '@cname',
            'phone|100000000-1000000000': 1,
            'state|1': ['良好', '一般', '优秀', '差'],
            
        }]
    })

    Mock.mock('/corridor', {
        'corridor|20-60': [{
            'sort|+1': 1,
            'date|1': '@date',
            'safeState|1': ['安全', '不安全'],
            'unit|10-50': 1,
            'name|1': '@cname',
            'phone|100000000-1000000000': 1
            
        }]
    })

    Mock.mock('/park', {
        'park|20-60': [{
            'sort|+1': 1,
            'date|1': '@date',
            'safeState|1': ['安全', '不安全'],
            'unit|10-50': 1,
            'name|1': '@cname',
            'phone|100000000-1000000000': 1
            
        }]
    })

}