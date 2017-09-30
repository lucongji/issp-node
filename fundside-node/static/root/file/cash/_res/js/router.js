var app = angular.module('cash', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.cash", {
        url : "/cash",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/cash/_res/html/index.html",
                controller:"cashCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/cash/_res/html/menu.html",
                controller:"cashMenuCtrl"
            }
        }
    }).state("root.file.cash.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.cash":{
                templateUrl : "root/file/cash/list/_res/html/index.html",
                controller:'cashListCtrl'
            }
        }
    }).state("root.file.cash.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.cash":{
                templateUrl : "root/file/cash/add/_res/html/index.html",
                controller:'cashAddCtrl'
            }
        }
    }).state("root.file.cash.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.cash":{
                templateUrl : "root/file/cash/edit/_res/html/index.html",
                controller:'cashEditCtrl'
            }
        }
    }).state("root.file.cash.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.cash":{
                templateUrl : "root/file/cash/upload/_res/html/index.html",
                controller:'cashUploadCtrl'
            }
        }
    }).state("root.file.cash.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.cash":{
                templateUrl : "root/file/cash/view/_res/html/index.html",
                controller:'cashViewCtrl'
            }
        }
    })
});