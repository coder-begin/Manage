const Mock = require('mockjs')
const UserData=Mock.Mock([{
    'id|+1':1
}])   

module.exports={
    path:'/api/users',
    data:UserData
};