var app = angular.module('numberActua', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.numberActua", {
        url : "/numberActua",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/numberActua/_res/html/index.html",
                controller:"numberActuaCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/numberActua/_res/html/menu.html",
                controller:"numberActuaMenuCtrl"
            }
        }
    }).state("root.file.numberActua.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.numberActua":{
                templateUrl : "root/file/numberActua/list/_res/html/index.html",
                controller:'numberActuaListCtrl'
            }
        }
    }).state("root.file.numberActua.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.numberActua":{
                templateUrl : "root/file/numberActua/add/_res/html/index.html",
                controller:'numberActuaAddCtrl'
            }
        }
    }).state("root.file.numberActua.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.numberActua":{
                templateUrl : "root/file/numberActua/edit/_res/html/index.html",
                controller:'numberActuaEditCtrl'
            }
        }
    })
});