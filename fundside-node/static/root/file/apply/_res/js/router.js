var app = angular.module('apply', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.apply", {
        url : "/apply",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/apply/_res/html/index.html",
                controller:"applyCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/apply/_res/html/menu.html",
                controller:"applyMenuCtrl"
            }
        }
    }).state("root.file.apply.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/list/_res/html/index.html",
                controller:'applyListCtrl'
            }
        }
    }).state("root.file.apply.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/add/_res/html/index.html",
                controller:'applyAddCtrl'
            }
        }
    }).state("root.file.apply.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/edit/_res/html/index.html",
                controller:'applyEditCtrl'
            }
        }
    }).state("root.file.apply.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/audit/_res/html/index.html",
                controller:'applyAuditCtrl'
            }
        }
    }).state("root.file.apply.applySummary[12]",{
        url:"/applySummary[12]",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/applySummary/_res/html/index.html",
                controller:'applyCollectCtrl'
            }
        }
    }).state("root.file.apply.capital[12]",{
        url:"/capital[12]",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/capital/_res/html/index.html",
                controller:'applyCapitalCtrl'
            }
        }
    }).state("root.file.apply.time[12]",{
        url:"/time[12]",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/time/_res/html/index.html",
                controller:'applyTimeCtrl'
            }
        }
    }).state("root.file.apply.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/upload/_res/html/index.html",
                controller:'fileUploadCtrl'
            }
        }
    }).state("root.file.apply.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.apply":{
                templateUrl : "root/file/apply/view/_res/html/index.html",
                controller:'fileViewCtrl'
            }
        }
    })
});