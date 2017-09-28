var app = angular.module('investForm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.investForm", {
        url : "/investForm",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/investForm/_res/html/index.html",
                controller:"investFormCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/investForm/_res/html/menu.html",
                controller:"investFormMenuCtrl"
            }
        }
    }).state("root.file.investForm.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.investForm":{
                templateUrl : "root/file/investForm/list/_res/html/index.html",
                controller:'investFormListCtrl'
            }
        }
    }).state("root.file.investForm.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.investForm":{
                templateUrl : "root/file/investForm/add/_res/html/index.html",
                controller:'investFormAddCtrl'
            }
        }
    }).state("root.file.investForm.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.investForm":{
                templateUrl : "root/file/investForm/edit/_res/html/index.html",
                controller:'investFormEditCtrl'
            }
        }
    })
});