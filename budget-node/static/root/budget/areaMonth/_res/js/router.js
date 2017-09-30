var app = angular.module('areaMonth', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.areaMonth", {
        url : "/areaMonth",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/areaMonth/_res/html/index.html",
                controller:"areaMonthCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/areaMonth/_res/html/menu.html",
                controller:"areaMonthMenuCtrl"
            }
        }
    }).state("root.budget.areaMonth.collect2[12]",{
        url:"/collect2[12]",
        views:{
            "content@root.budget.areaMonth":{
                templateUrl : "root/budget/areaMonth/collect2/_res/html/index.html",
                controller:'collect2AreCtrl'
            }
        }
    }).state("root.budget.areaMonth.theMonth[12]",{
        url:"/theMonth[12]?id=",
        views:{
            "content@root.budget.areaMonth":{
                templateUrl : "root/budget/areaMonth/theMonth/_res/html/index.html",
                controller:'collectTheMonthCtrl'
            }
        }
    }).state("root.budget.areaMonth.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.budget.areaMonth":{
                templateUrl : "root/budget/areaMonth/list/_res/html/index.html",
                controller:'areaMonthListCtrl'
            }
        }
    })
});