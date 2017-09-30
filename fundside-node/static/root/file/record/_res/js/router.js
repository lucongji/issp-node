var app = angular.module('record', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.record", {
        url : "/record",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/record/_res/html/index.html",
                controller:"recordCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.file.record.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.record":{
                templateUrl : "root/file/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    })
});