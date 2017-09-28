var app = angular.module('payother', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.payother", {
        url : "/payother",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/payother/_res/html/index.html",
                controller:"payotherCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/payother/_res/html/menu.html",
                controller:"payotherMenuCtrl"
            }
        }
    }).state("root.file.payother.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.payother":{
                templateUrl : "root/file/payother/list/_res/html/index.html",
                controller:'payotherListCtrl'
            }
        }
    }).state("root.file.payother.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.payother":{
                templateUrl : "root/file/payother/add/_res/html/index.html",
                controller:'payotherAddCtrl'
            }
        }
    }).state("root.file.payother.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.payother":{
                templateUrl : "root/file/payother/edit/_res/html/index.html",
                controller:'payotherEditCtrl'
            }
        }
    }).state("root.file.payother.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.payother":{
                templateUrl : "root/file/payother/import/_res/html/index.html",
                controller:'payotherImportCtrl'
            }
        }
    }).state("root.file.payother.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.payother":{
                templateUrl : "root/file/payother/collect/_res/html/index.html",
                controller:'payotherCollectCtrl'
            }
        }
    })
});