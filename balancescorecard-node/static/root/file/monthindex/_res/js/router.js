var app = angular.module('monthindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.monthindex", {
        url : "/monthindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/monthindex/_res/html/index.html",
                controller:"monthindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/monthindex/_res/html/menu.html",
                controller:"monthindexMenuCtrl"
            }
        }
    }).state("root.file.monthindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&department=&year=&month=",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/list/_res/html/index.html",
                controller:'monthindexListCtrl'
            }
        }
    }).state("root.file.monthindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/add/_res/html/index.html",
                controller:'monthindexAddCtrl'
            }
        }
    }).state("root.file.monthindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/edit/_res/html/index.html",
                controller:'monthindexEditCtrl'
            }
        }
    }).state("root.file.monthindex.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/import/_res/html/index.html",
                controller:'monthindexImportCtrl'
            }
        }
    }).state("root.file.monthindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/export/_res/html/index.html",
                controller:'monthindexExportCtrl'
            }
        }
    }).state("root.file.monthindex.jobs[12]",{
        url:"/jobs[12]?id=&page=",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/jobs/_res/html/index.html",
                controller:'monthindexJobsCtrl'
            }
        }
    }).state("root.file.monthindex.theMonth[12]",{
        url:"/theMonth[12]?page=",
        views:{
            "content@root.file.monthindex":{
                templateUrl : "root/file/monthindex/theMonth/_res/html/index.html",
                controller:'monthindexThisMonthCtrl'
            }
        }
    })
});