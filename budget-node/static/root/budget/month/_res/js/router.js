var app = angular.module('month', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.month", {
        url : "/month",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/month/_res/html/index.html",
                controller:"monthCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/month/_res/html/menu.html",
                controller:"monthMenuCtrl"
            }
        }
    }).state("root.budget.month.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.budget.month":{
                templateUrl : "root/budget/month/add/_res/html/index.html",
                controller:'monthCtrl'
            }
        }
    }).state("root.budget.month.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.budget.month":{
                templateUrl : "root/budget/month/edit/_res/html/index.html",
                controller:'monthEditCtrl'
            }
        }
    }).state("root.budget.month.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.budget.month":{
                templateUrl : "root/budget/month/collect/_res/html/index.html",
                controller:'collectSummaryCtrl'
            }
        }
    }).state("root.budget.month.theMonth2[12]",{
            url:"/theMonth2[12]?id=",
            views:{
                "content@root.budget.month":{
                    templateUrl : "root/budget/month/theMonth2/_res/html/index.html",
                    controller:'collectAllMonCtrl'
                }
            }
        }).state("root.budget.month.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.budget.month":{
                templateUrl : "root/budget/month/list/_res/html/index.html",
                controller:'monthListCtrl'
            }
        }
    })
});