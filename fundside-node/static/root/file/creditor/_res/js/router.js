var app = angular.module('creditor', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.creditor", {
        url : "/creditor",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/creditor/_res/html/index.html",
                controller:"creditorCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/creditor/_res/html/menu.html",
                controller:"creditorMenuCtrl"
            }
        }
    }).state("root.file.creditor.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.creditor":{
                templateUrl : "root/file/creditor/list/_res/html/index.html",
                controller:'creditorListCtrl'
            }
        }
    }).state("root.file.creditor.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.creditor":{
                templateUrl : "root/file/creditor/add/_res/html/index.html",
                controller:'creditorAddCtrl'
            }
        }
    }).state("root.file.creditor.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.creditor":{
                templateUrl : "root/file/creditor/edit/_res/html/index.html",
                controller:'creditorEditCtrl'
            }
        }
    }).state("root.file.creditor.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.creditor":{
                templateUrl : "root/file/creditor/upload/_res/html/index.html",
                controller:'creditorUploadCtrl'
            }
        }
    }).state("root.file.creditor.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.creditor":{
                templateUrl : "root/file/creditor/view/_res/html/index.html",
                controller:'creditorViewCtrl'
            }
        }
    })
});