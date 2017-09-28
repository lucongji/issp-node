var app = angular.module('mineindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.mineindex", {
        url : "/mineindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/mineindex/_res/html/index.html",
                controller:"mineindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/mineindex/_res/html/menu.html",
                controller:"mineindexMenuCtrl"
            }
        }
    }).state("root.file.mineindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&year=&month=",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/list/_res/html/index.html",
                controller:'mineindexListCtrl'
            }
        }
    }).state("root.file.mineindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/add/_res/html/index.html",
                controller:'mineindexAddCtrl'
            }
        }
    }).state("root.file.mineindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/edit/_res/html/index.html",
                controller:'mineindexEditCtrl'
            }
        }
    }).state("root.file.mineindex.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/import/_res/html/index.html",
                controller:'mineindexImportCtrl'
            }
        }
    }).state("root.file.mineindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/export/_res/html/index.html",
                controller:'mineindexExportCtrl'
            }
        }
    }).state("root.file.mineindex.month[12]",{
        url:"/month[12]?id=&page=",
        views:{
            "content@root.file.mineindex":{
                templateUrl : "root/file/mineindex/month/_res/html/index.html",
                controller:'monthEditCtrl'
            }
        }
    })
});