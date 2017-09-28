var app = angular.module('departindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.departindex", {
        url : "/departindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/departindex/_res/html/index.html",
                controller:"departindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/departindex/_res/html/menu.html",
                controller:"departindexMenuCtrl"
            }
        }
    }).state("root.file.departindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&department=&year=",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/list/_res/html/index.html",
                controller:'departindexListCtrl'
            }
        }
    }).state("root.file.departindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/add/_res/html/index.html",
                controller:'departindexAddCtrl'
            }
        }
    }).state("root.file.departindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/edit/_res/html/index.html",
                controller:'departindexEditCtrl'
            }
        }
    }).state("root.file.departindex.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/import/_res/html/index.html",
                controller:'departindexImportCtrl'
            }
        }
    }).state("root.file.departindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/export/_res/html/index.html",
                controller:'departindexExportCtrl'
            }
        }
    }).state("root.file.departindex.month[12]",{
        url:"/month[12]?id=&page=",
        views:{
            "content@root.file.departindex":{
                templateUrl : "root/file/departindex/month/_res/html/index.html",
                controller:'monthEditCtrl'
            }
        }
    })
});