var app = angular.module('proportion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.proportion", {
        url : "/proportion",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/proportion/_res/html/index.html",
                controller:"proportionCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/proportion/_res/html/menu.html",
                controller:"proportionMenuCtrl"
            }
        }
    }).state("root.file.proportion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.proportion":{
                templateUrl : "root/file/proportion/list/_res/html/index.html",
                controller:'proportionListCtrl'
            }
        }
    }).state("root.file.proportion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.proportion":{
                templateUrl : "root/file/proportion/add/_res/html/index.html",
                controller:'proportionAddCtrl'
            }
        }
    }).state("root.file.proportion.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.proportion":{
                templateUrl : "root/file/proportion/edit/_res/html/index.html",
                controller:'proportionEditCtrl'
            }
        }
    })
});