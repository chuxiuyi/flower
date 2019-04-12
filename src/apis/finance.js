import request from '@/apis/allRequest.js'
var expendfeeUrl = "apis/finance/expense?"
var changeExpendfeeUrl = "apis/finance/expense"
var echartsUrl = "apis/finance/expense/stat?"
//://api.netallin.com/apis/finance/expense/stat?
//http://api.netallin.com/apis/finance/expense
//http://api.netallin.com/apis/student/searchStudents
//添加学生的方法
//http://api.netallin.com/apis/finance/expense?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzc4ODcsImV4cCI6NzIwMDAwMH0%3D.Hlja3wCDVMzCZgmWteu5E%2BUJA7FMdtyXrz6tK5bKN2M%3D

//获取expend数据的方法
function getExpend(params) {
    return request.request({
        url: expendfeeUrl,
        method: 'get',
        params: params
    })
}

//上传修改expend支出信息

function putExpend(params) {
    return request.request({
        url: changeExpendfeeUrl,
        method: 'put',
        params: params
    })
}

//上传删除expend支出信息
function deleteExpend(params) {
    return request.request({
        url: changeExpendfeeUrl,
        method: 'delete',
        params: params
    })
}
//创建修改expend支出信息
function postExpend(params) {
    return request.request({
        url: changeExpendfeeUrl,
        method: 'post',
        params: params
    })
}
// 获取echarts数据echartsUrl
function echartsUrlExpend(params) {
    return request.request({
        url: echartsUrl,
        method: 'get',
        params: params
    })
}


export default {
    getExpend,putExpend,deleteExpend,postExpend,echartsUrlExpend,
}