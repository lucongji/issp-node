var app = angular.module('dimension', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.dimension", {
        url : "/dimension",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/dimension/_res/html/index.html",
                controller:"dimensionCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/dimension/_res/html/menu.html",
                controller:"dimensionMenuCtrl"
            }
        }
    }).state("root.file.dimension.list[12]",{
        url:"/list[12]?id=&name=&page=&typeName=&person=",
        views:{
            "content@root.file.dimension":{
                templateUrl : "root/file/dimension/list/_res/html/index.html",
                controller:'dimensionListCtrl'
            }
        }
    }).state("root.file.dimension.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.dimension":{
                templateUrl : "root/file/dimension/add/_res/html/index.html",
                controller:'dimensionAddCtrl'
            }
        }
    }).state("root.file.dimension.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.dimension":{
                templateUrl : "root/file/dimension/edit/_res/html/index.html",
                controller:'dimensionEditCtrl'
            }
        }
    })
});