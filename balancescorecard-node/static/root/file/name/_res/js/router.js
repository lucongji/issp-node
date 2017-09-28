var app = angular.module('name', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.name", {
        url : "/name",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/name/_res/html/index.html",
                controller:"nameCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/name/_res/html/menu.html",
                controller:"nameMenuCtrl"
            }
        }
    }).state("root.file.name.list[12]",{
        url:"/list[12]?id=&name=&page=&typeName=&person=",
        views:{
            "content@root.file.name":{
                templateUrl : "root/file/name/list/_res/html/index.html",
                controller:'nameListCtrl'
            }
        }
    }).state("root.file.name.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.name":{
                templateUrl : "root/file/name/add/_res/html/index.html",
                controller:'nameAddCtrl'
            }
        }
    }).state("root.file.name.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.name":{
                templateUrl : "root/file/name/edit/_res/html/index.html",
                controller:'nameEditCtrl'
            }
        }
    })
});