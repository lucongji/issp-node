var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.information", {
        url : "/information",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/information/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/information/_res/html/menu.html",
                controller:"informationMenuCtrl"
            }
        }
    }).state("root.file.information.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/list/_res/html/index.html",
                controller:'informationListCtrl'
            }
        }
    }).state("root.file.information.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/add/_res/html/index.html",
                controller:'informationAddCtrl'
            }
        }
    }).state("root.file.information.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/edit/_res/html/index.html",
                controller:'informationEditCtrl'
            }
        }
    }).state("root.file.information.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/import/_res/html/index.html",
                controller:'informationImportCtrl'
            }
        }
    }).state("root.file.information.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/export/_res/html/index.html",
                controller:'informationExportCtrl'
            }
        }
    }).state("root.file.information.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/upload/_res/html/index.html",
                controller:'informationUploadCtrl'
            }
        }
    }).state("root.file.information.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.information":{
                templateUrl : "root/file/information/view/_res/html/index.html",
                controller:'informationViewCtrl'
            }
        }
    })
});