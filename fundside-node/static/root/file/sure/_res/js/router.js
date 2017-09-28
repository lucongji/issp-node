var app = angular.module('sure', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.sure", {
        url : "/sure",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/sure/_res/html/index.html",
                controller:"sureCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/sure/_res/html/menu.html",
                controller:"sureMenuCtrl"
            }
        }
    }).state("root.file.sure.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.sure":{
                templateUrl : "root/file/sure/list/_res/html/index.html",
                controller:'sureListCtrl'
            }
        }
    })
});