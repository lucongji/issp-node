var app = angular.module('sign', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.sign", {
        url : "/sign",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/sign/_res/html/index.html",
                controller:"signCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/sign/_res/html/menu.html",
                controller:"signMenuCtrl"
            }
        }
    }).state("root.file.sign.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.sign":{
                templateUrl : "root/file/sign/list/_res/html/index.html",
                controller:'signListCtrl'
            }
        }
    }).state("root.file.sign.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.sign":{
                templateUrl : "root/file/sign/add/_res/html/index.html",
                controller:'signAddCtrl'
            }
        }
    }).state("root.file.sign.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.sign":{
                templateUrl : "root/file/sign/edit/_res/html/index.html",
                controller:'signEditCtrl'
            }
        }
    }).state("root.file.sign.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.file.sign":{
                templateUrl : "root/file/sign/audit/_res/html/index.html",
                controller:'signAuditCtrl'
            }
        }
    })
});