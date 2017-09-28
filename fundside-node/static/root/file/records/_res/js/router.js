var app = angular.module('records', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.records", {
        url : "/records",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/records/_res/html/index.html",
                controller:"recordsCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/records/_res/html/menu.html",
                controller:"recordsMenuCtrl"
            }
        }
    }).state("root.file.records.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.records":{
                templateUrl : "root/file/records/list/_res/html/index.html",
                controller:'recordsListCtrl'
            }
        }
    })
});