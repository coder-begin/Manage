const express = require('express')
const UsersData = require('./users-mock')

const Router = express.Router();
var allData=[UsersData];
Router.use(function(res,req,next){
      for(var i = 0 ; i < allData.length; i++){
        Router.get()
      }  

    next();
})


module.exports=Router
