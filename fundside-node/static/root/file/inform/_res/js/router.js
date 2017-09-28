var app = angular.module('inform', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.inform", {
        url : "/inform",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/inform/_res/html/index.html",
                controller:"informCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/inform/_res/html/menu.html",
                controller:"informMenuCtrl"
            }
        }
    }).state("root.file.inform.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.inform":{
                templateUrl : "root/file/inform/list/_res/html/index.html",
                controller:'informListCtrl'
            }
        }
    }).state("root.file.inform.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.inform":{
                templateUrl : "root/file/inform/add/_res/html/index.html",
                controller:'informAddCtrl'
            }
        }
    }).state("root.file.inform.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.inform":{
                templateUrl : "root/file/inform/edit/_res/html/index.html",
                controller:'informEditCtrl'
            }
        }
    }).state("root.file.inform.investment[12]",{
        url:"/investment[12]?id=&page=",
        views:{
            "content@root.file.inform":{
                templateUrl : "root/file/inform/investment/_res/html/index.html",
                controller:'informInCtrl'
            }
        }
    })
});