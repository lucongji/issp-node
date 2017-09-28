var app = angular.module('numberPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.numberPlan", {
        url : "/numberPlan",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/numberPlan/_res/html/index.html",
                controller:"numberPlanCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/numberPlan/_res/html/menu.html",
                controller:"numberPlanMenuCtrl"
            }
        }
    }).state("root.file.numberPlan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.numberPlan":{
                templateUrl : "root/file/numberPlan/list/_res/html/index.html",
                controller:'numberPlanListCtrl'
            }
        }
    }).state("root.file.numberPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.numberPlan":{
                templateUrl : "root/file/numberPlan/add/_res/html/index.html",
                controller:'numberPlanAddCtrl'
            }
        }
    }).state("root.file.numberPlan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.numberPlan":{
                templateUrl : "root/file/numberPlan/edit/_res/html/index.html",
                controller:'numberPlanEditCtrl'
            }
        }
    })
});