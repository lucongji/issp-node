var app = angular.module('profit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.profit", {
        url : "/profit",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/profit/_res/html/index.html",
                controller:"profitCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/profit/_res/html/menu.html",
                controller:"profitMenuCtrl"
            }
        }
    }).state("root.file.profit.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.profit":{
                templateUrl : "root/file/profit/list/_res/html/index.html",
                controller:'profitListCtrl'
            }
        }
    }).state("root.file.profit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.profit":{
                templateUrl : "root/file/profit/add/_res/html/index.html",
                controller:'profitAddCtrl'
            }
        }
    }).state("root.file.profit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.profit":{
                templateUrl : "root/file/profit/edit/_res/html/index.html",
                controller:'profitEditCtrl'
            }
        }
    })
});