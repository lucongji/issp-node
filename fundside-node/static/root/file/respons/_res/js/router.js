var app = angular.module('respons', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.respons", {
        url : "/respons",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/respons/_res/html/index.html",
                controller:"responsCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/respons/_res/html/menu.html",
                controller:"responsMenuCtrl"
            }
        }
    }).state("root.file.respons.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.respons":{
                templateUrl : "root/file/respons/list/_res/html/index.html",
                controller:'responsListCtrl'
            }
        }
    }).state("root.file.respons.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.respons":{
                templateUrl : "root/file/respons/add/_res/html/index.html",
                controller:'responsAddCtrl'
            }
        }
    }).state("root.file.respons.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.respons":{
                templateUrl : "root/file/respons/edit/_res/html/index.html",
                controller:'responsEditCtrl'
            }
        }
    })
});