var app = angular.module('libraryindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.libraryindex", {
        url : "/libraryindex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/libraryindex/_res/html/index.html",
                controller:"libraryindexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/libraryindex/_res/html/menu.html",
                controller:"libraryindexMenuCtrl"
            }
        }
    }).state("root.file.libraryindex.list[12]",{
        url:"/list[12]?id=&name=&page=&indexName=&department=&year=",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/list/_res/html/index.html",
                controller:'libraryindexListCtrl'
            }
        }
    }).state("root.file.libraryindex.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/export/_res/html/index.html",
                controller:'libraryindexExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departExport[12]",{
        url:"/departExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departExport/_res/html/index.html",
                controller:'libraryDepartExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departMonExport[12]",{
        url:"/departMonExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departMonExport/_res/html/index.html",
                controller:'libraryMonthExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departPosExport[12]",{
        url:"/departPosExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departPosExport/_res/html/index.html",
                controller:'libraryPosExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departPerExport[12]",{
        url:"/departPerExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departPerExport/_res/html/index.html",
                controller:'libraryPerExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departDimExport[12]",{
        url:"/departDimExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departDimExport/_res/html/index.html",
                controller:'libraryDimExportCtrl'
            }
        }
    }).state("root.file.libraryindex.departTypeExport[12]",{
        url:"/departTypeExport[12]",
        views:{
            "content@root.file.libraryindex":{
                templateUrl : "root/file/libraryindex/departTypeExport/_res/html/index.html",
                controller:'libraryTypeExportCtrl'
            }
        }
    })
});