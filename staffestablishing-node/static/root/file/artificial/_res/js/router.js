var app = angular.module('artificial', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.artificial", {
        url : "/artificial",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/artificial/_res/html/index.html",
                controller:"artificialCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/artificial/_res/html/menu.html",
                controller:"artificialMenuCtrl"
            }
        }
    }).state("root.file.artificial.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.artificial":{
                templateUrl : "root/file/artificial/list/_res/html/index.html",
                controller:'artificialListCtrl'
            }
        }
    }).state("root.file.artificial.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.artificial":{
                templateUrl : "root/file/artificial/add/_res/html/index.html",
                controller:'artificialAddCtrl'
            }
        }
    }).state("root.file.artificial.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.artificial":{
                templateUrl : "root/file/artificial/edit/_res/html/index.html",
                controller:'artificialEditCtrl'
            }
        }
    })
});