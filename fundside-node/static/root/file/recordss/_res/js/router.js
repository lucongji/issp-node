var app = angular.module('recordss', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.recordss", {
        url : "/recordss",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/recordss/_res/html/index.html",
                controller:"recordssCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/recordss/_res/html/menu.html",
                controller:"recordssMenuCtrl"
            }
        }
    }).state("root.file.recordss.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.recordss":{
                templateUrl : "root/file/recordss/list/_res/html/index.html",
                controller:'recordssListCtrl'
            }
        }
    })
});