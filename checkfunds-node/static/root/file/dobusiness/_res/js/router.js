var app = angular.module('dobusiness', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.dobusiness", {
        url : "/dobusiness",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/dobusiness/_res/html/index.html",
                controller:"dobusinessCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/dobusiness/_res/html/menu.html",
                controller:"dobusinessMenuCtrl"
            }
        }
    }).state("root.file.dobusiness.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.dobusiness":{
                templateUrl : "root/file/dobusiness/list/_res/html/index.html",
                controller:'dobusinessListCtrl'
            }
        }
    }).state("root.file.dobusiness.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.dobusiness":{
                templateUrl : "root/file/dobusiness/add/_res/html/index.html",
                controller:'dobusinessAddCtrl'
            }
        }
    }).state("root.file.dobusiness.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.dobusiness":{
                templateUrl : "root/file/dobusiness/edit/_res/html/index.html",
                controller:'dobusinessEditCtrl'
            }
        }
    }).state("root.file.dobusiness.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.dobusiness":{
                templateUrl : "root/file/dobusiness/import/_res/html/index.html",
                controller:'dobusinessImportCtrl'
            }
        }
    }).state("root.file.dobusiness.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.dobusiness":{
                templateUrl : "root/file/dobusiness/collect/_res/html/index.html",
                controller:'doCollectCtrl'
            }
        }
    })
});