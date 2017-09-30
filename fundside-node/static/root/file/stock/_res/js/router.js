var app = angular.module('stock', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.stock", {
        url : "/stock",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/stock/_res/html/index.html",
                controller:"stockCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/stock/_res/html/menu.html",
                controller:"stockMenuCtrl"
            }
        }
    }).state("root.file.stock.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.stock":{
                templateUrl : "root/file/stock/list/_res/html/index.html",
                controller:'stockListCtrl'
            }
        }
    }).state("root.file.stock.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.stock":{
                templateUrl : "root/file/stock/add/_res/html/index.html",
                controller:'stockAddCtrl'
            }
        }
    }).state("root.file.stock.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.stock":{
                templateUrl : "root/file/stock/edit/_res/html/index.html",
                controller:'stockEditCtrl'
            }
        }
    }).state("root.file.stock.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.stock":{
                templateUrl : "root/file/stock/upload/_res/html/index.html",
                controller:'stockUploadCtrl'
            }
        }
    }).state("root.file.stock.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.stock":{
                templateUrl : "root/file/stock/view/_res/html/index.html",
                controller:'stockViewCtrl'
            }
        }
    })
});