var app = angular.module('shareholder', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.shareholder", {
        url : "/shareholder",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/shareholder/_res/html/index.html",
                controller:"shareholderCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/shareholder/_res/html/menu.html",
                controller:"shareholderMenuCtrl"
            }
        }
    }).state("root.file.shareholder.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.shareholder":{
                templateUrl : "root/file/shareholder/list/_res/html/index.html",
                controller:'shareholderListCtrl'
            }
        }
    }).state("root.file.shareholder.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.shareholder":{
                templateUrl : "root/file/shareholder/add/_res/html/index.html",
                controller:'shareholderAddCtrl'
            }
        }
    }).state("root.file.shareholder.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.shareholder":{
                templateUrl : "root/file/shareholder/edit/_res/html/index.html",
                controller:'shareholderEditCtrl'
            }
        }
    }).state("root.file.shareholder.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.shareholder":{
                templateUrl : "root/file/shareholder/import/_res/html/index.html",
                controller:'shareholderImportCtrl'
            }
        }
    }).state("root.file.shareholder.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.shareholder":{
                templateUrl : "root/file/shareholder/collect/_res/html/index.html",
                controller:'shareCollectCtrl'
            }
        }
    })
});