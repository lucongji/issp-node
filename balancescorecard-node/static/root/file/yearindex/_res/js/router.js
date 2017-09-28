var app = angular.module('yearindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.yearindex", {
        url : "/yearindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/yearindex/_res/html/index.html",
                controller:"yearindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/yearindex/_res/html/menu.html",
                controller:"yearindexMenuCtrl"
            }
        }
    }).state("root.file.yearindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&year=",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/list/_res/html/index.html",
                controller:'yearindexListCtrl'
            }
        }
    }).state("root.file.yearindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/add/_res/html/index.html",
                controller:'yearindexAddCtrl'
            }
        }
    }).state("root.file.yearindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/edit/_res/html/index.html",
                controller:'yearindexEditCtrl'
            }
        }
    }).state("root.file.yearindex.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/import/_res/html/index.html",
                controller:'yearindexImportCtrl'
            }
        }
    }).state("root.file.yearindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/export/_res/html/index.html",
                controller:'yearindexExportCtrl'
            }
        }
    }).state("root.file.yearindex.department[12]",{
        url:"/department[12]?id=&page=",
        views:{
            "content@root.file.yearindex":{
                templateUrl : "root/file/yearindex/department/_res/html/index.html",
                controller:'yearindexDepartCtrl'
            }
        }
    })
});