import request from '@/apis/allRequest.js'
var studentUrl = "apis/student"
var feeUrl = "apis/student/fee"
var searchStuUrl = "apis/student/searchStudents"
//http://api.netallin.com/apis/student/searchStudents
//添加学生的方法

function addUser(params) {
    return request.request({
        url: studentUrl,
        method: 'post',
        params: params
    })
}
//添加学生的方法
function getStudents(params) {
    return request.request({
        url: studentUrl,
        method: 'get',
        params: params
    })
}
//添加学生的方法
function getFee(obj) {
    console.log('getFee', obj)
    return request.request({
        url: feeUrl,
        method: 'get',
        params: obj
    })
}
//搜索学生的方法

function getsearchStu(params) {
    return request.request({
        url: searchStuUrl,
        method: 'post',
        params: params
    })
}

export default {
    addUser, getStudents, getFee,getsearchStu
}