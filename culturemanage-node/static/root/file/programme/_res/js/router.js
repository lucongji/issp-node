var app = angular.module('programme', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.programme", {
        url : "/programme",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/programme/_res/html/index.html",
                controller:"programmeCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/programme/_res/html/menu.html",
                controller:"programmeMenuCtrl"
            }
        }
    }).state("root.file.programme.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.programme":{
                templateUrl : "root/file/programme/list/_res/html/index.html",
                controller:'programmeListCtrl'
            }
        }
    }).state("root.file.programme.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.programme":{
                templateUrl : "root/file/programme/add/_res/html/index.html",
                controller:'programmeAddCtrl'
            }
        }
    }).state("root.file.programme.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.programme":{
                templateUrl : "root/file/programme/edit/_res/html/index.html",
                controller:'programmeEditCtrl'
            }
        }
    })
});