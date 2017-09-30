var app = angular.module('prepare', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.prepare", {
        url : "/prepare",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/prepare/_res/html/index.html",
                controller:"prepareCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/prepare/_res/html/menu.html",
                controller:"prepareMenuCtrl"
            }
        }
    }).state("root.file.prepare.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/list/_res/html/index.html",
                controller:'prepareListCtrl'
            }
        }
    }).state("root.file.prepare.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/add/_res/html/index.html",
                controller:'prepareAddCtrl'
            }
        }
    }).state("root.file.prepare.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/edit/_res/html/index.html",
                controller:'prepareEditCtrl'
            }
        }
    }).state("root.file.prepare.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/detail/_res/html/index.html",
                controller:'prepareDetailCtrl'
            }
        }
    }).state("root.file.prepare.weekCollect[12]",{
        url:"/weekCollect[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/weekCollect/_res/html/index.html",
                controller:'prepareweekCtrl'
            }
        }
    }).state("root.file.prepare.monthCollect[12]",{
        url:"/monthCollect[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/monthCollect/_res/html/index.html",
                controller:'preparemonthCtrl'
            }
        }
    }).state("root.file.prepare.yearCollect[12]",{
        url:"/yearCollect[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/yearCollect/_res/html/index.html",
                controller:'prepareyearCtrl'
            }
        }
    }).state("root.file.prepare.projectCollect[12]",{
        url:"/projectCollect[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/projectCollect/_res/html/index.html",
                controller:'prepareprojectCtrl'
            }
        }
    }).state("root.file.prepare.editdetail[12]",{
        url:"/editdetail[12]?id=&subId=&page=",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/editdetail/_res/html/index.html",
                controller:'preeditdetailCtrl'
            }
        }
    }).state("root.file.prepare.analysisCollect[12]",{
        url:"/analysisCollect[12]",
        views:{
            "content@root.file.prepare":{
                templateUrl : "root/file/prepare/analysisCollect/_res/html/index.html",
                controller:'prepareanalysisCtrl'
            }
        }
    })
});