var app = angular.module('team', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.team", {
        url : "/team",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/team/_res/html/index.html",
                controller:"teamCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/team/_res/html/menu.html",
                controller:"teamMenuCtrl"
            }
        }
    }).state("root.file.team.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.team":{
                templateUrl : "root/file/team/list/_res/html/index.html",
                controller:'teamListCtrl'
            }
        }
    }).state("root.file.team.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.team":{
                templateUrl : "root/file/team/add/_res/html/index.html",
                controller:'teamAddCtrl'
            }
        }
    }).state("root.file.team.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.team":{
                templateUrl : "root/file/team/edit/_res/html/index.html",
                controller:'teamEditCtrl'
            }
        }
    })
});