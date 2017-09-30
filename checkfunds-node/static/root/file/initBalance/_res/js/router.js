var app = angular.module('initBalance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.initBalance", {
        url : "/initBalance",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/initBalance/_res/html/index.html",
                controller:"initBalanceCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/initBalance/_res/html/menu.html",
                controller:"initBalanceMenuCtrl"
            }
        }
    }).state("root.file.initBalance.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.initBalance":{
                templateUrl : "root/file/initBalance/list/_res/html/index.html",
                controller:'initBalanceListCtrl'
            }
        }
    }).state("root.file.initBalance.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.initBalance":{
                templateUrl : "root/file/initBalance/add/_res/html/index.html",
                controller:'initBalanceAddCtrl'
            }
        }
    }).state("root.file.initBalance.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.initBalance":{
                templateUrl : "root/file/initBalance/edit/_res/html/index.html",
                controller:'initBalanceEditCtrl'
            }
        }
    })
});