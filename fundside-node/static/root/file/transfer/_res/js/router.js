var app = angular.module('transfer', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.transfer", {
        url : "/transfer",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/transfer/_res/html/index.html",
                controller:"transferCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/transfer/_res/html/menu.html",
                controller:"transferMenuCtrl"
            }
        }
    }).state("root.file.transfer.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.transfer":{
                templateUrl : "root/file/transfer/list/_res/html/index.html",
                controller:'transferListCtrl'
            }
        }
    }).state("root.file.transfer.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.transfer":{
                templateUrl : "root/file/transfer/add/_res/html/index.html",
                controller:'transferAddCtrl'
            }
        }
    }).state("root.file.transfer.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.transfer":{
                templateUrl : "root/file/transfer/edit/_res/html/index.html",
                controller:'transferEditCtrl'
            }
        }
    }).state("root.file.transfer.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.transfer":{
                templateUrl : "root/file/transfer/upload/_res/html/index.html",
                controller:'transferUploadCtrl'
            }
        }
    }).state("root.file.transfer.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.transfer":{
                templateUrl : "root/file/transfer/view/_res/html/index.html",
                controller:'transferViewCtrl'
            }
        }
    })
});