var app = angular.module('wages', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.wages", {
        url : "/wages",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/wages/_res/html/index.html",
                controller:"wagesCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/wages/_res/html/menu.html",
                controller:"wagesMenuCtrl"
            }
        }
    }).state("root.file.wages.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.wages":{
                templateUrl : "root/file/wages/list/_res/html/index.html",
                controller:'wagesListCtrl'
            }
        }
    }).state("root.file.wages.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.wages":{
                templateUrl : "root/file/wages/add/_res/html/index.html",
                controller:'wagesAddCtrl'
            }
        }
    }).state("root.file.wages.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.wages":{
                templateUrl : "root/file/wages/edit/_res/html/index.html",
                controller:'wagesEditCtrl'
            }
        }
    })
});