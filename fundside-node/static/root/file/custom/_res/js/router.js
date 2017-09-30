var app = angular.module('custom', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.custom", {
        url : "/custom",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/custom/_res/html/index.html",
                controller:"customCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/custom/_res/html/menu.html",
                controller:"customMenuCtrl"
            }
        }
    }).state("root.file.custom.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.custom":{
                templateUrl : "root/file/custom/list/_res/html/index.html",
                controller:'customListCtrl'
            }
        }
    }).state("root.file.custom.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.custom":{
                templateUrl : "root/file/custom/add/_res/html/index.html",
                controller:'customAddCtrl'
            }
        }
    }).state("root.file.custom.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.custom":{
                templateUrl : "root/file/custom/edit/_res/html/index.html",
                controller:'customEditCtrl'
            }
        }
    })
});