var app = angular.module('payholder', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.payholder", {
        url : "/payholder",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/payholder/_res/html/index.html",
                controller:"payholderCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/payholder/_res/html/menu.html",
                controller:"payholderMenuCtrl"
            }
        }
    }).state("root.file.payholder.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.payholder":{
                templateUrl : "root/file/payholder/list/_res/html/index.html",
                controller:'payholderListCtrl'
            }
        }
    }).state("root.file.payholder.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.payholder":{
                templateUrl : "root/file/payholder/add/_res/html/index.html",
                controller:'payholderAddCtrl'
            }
        }
    }).state("root.file.payholder.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.payholder":{
                templateUrl : "root/file/payholder/edit/_res/html/index.html",
                controller:'payholderEditCtrl'
            }
        }
    }).state("root.file.payholder.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.payholder":{
                templateUrl : "root/file/payholder/import/_res/html/index.html",
                controller:'payholderImportCtrl'
            }
        }
    }).state("root.file.payholder.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.payholder":{
                templateUrl : "root/file/payholder/collect/_res/html/index.html",
                controller:'payholderCollectCtrl'
            }
        }
    })
});