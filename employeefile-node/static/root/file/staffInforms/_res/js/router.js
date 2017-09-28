var app = angular.module('staffInforms', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.staffInforms", {
        url : "/staffInforms",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/staffInforms/_res/html/index.html",
                controller:"staffInformsCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/staffInforms/_res/html/menu.html",
                controller:"staffInformsMenuCtrl"
            }
        }
    }).state("root.file.staffInforms.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.file.staffInforms":{
                templateUrl : "root/file/staffInforms/list/_res/html/index.html",
                controller:'staffInformsListCtrl'
            }
        }
    }).state("root.file.staffInforms.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.staffInforms":{
                templateUrl : "root/file/staffInforms/import/_res/html/index.html",
                controller:'staffInformsImportCtrl'
            }
        }
    })
});