var app = angular.module('postindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.postindex", {
        url : "/postindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/postindex/_res/html/index.html",
                controller:"postindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/postindex/_res/html/menu.html",
                controller:"postindexMenuCtrl"
            }
        }
    }).state("root.file.postindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&positioner=&year=&month=",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/list/_res/html/index.html",
                controller:'postindexListCtrl'
            }
        }
    }).state("root.file.postindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/add/_res/html/index.html",
                controller:'postindexAddCtrl'
            }
        }
    }).state("root.file.postindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/edit/_res/html/index.html",
                controller:'postindexEditCtrl'
            }
        }
    }).state("root.file.postindex.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/import/_res/html/index.html",
                controller:'postindexImportCtrl'
            }
        }
    }).state("root.file.postindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/export/_res/html/index.html",
                controller:'postindexExportCtrl'
            }
        }
    }).state("root.file.postindex.theMonth[12]",{
        url:"/theMonth[12]?page=",
        views:{
            "content@root.file.postindex":{
                templateUrl : "root/file/postindex/theMonth/_res/html/index.html",
                controller:'postindexThisMonthCtrl'
            }
        }
    })
});