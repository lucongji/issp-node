var app = angular.module('collect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.collect", {
        url : "/collect",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/collect/_res/html/index.html",
                controller:"collectCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/collect/_res/html/menu.html",
                controller:"collectMenuCtrl"
            }
        }
    }).state("root.people.collect.summaryOperation[12]",{
        url:"/summaryOperation[12]?id=&name=&page=",
        views:{
            "content@root.people.collect":{
                templateUrl : "root/people/collect/summaryOperation/_res/html/index.html",
                controller:'collectOperCtrl'
            }
        }
    }).state("root.people.collect.summaryDay[12]",{
        url:"/summaryDay[12]?id=&name=&page=",
        views:{
            "content@root.people.collect":{
                templateUrl : "root/people/collect/summaryDay/_res/html/index.html",
                controller:'collectDayCtrl'
            }
        }
    }).state("root.people.collect.summaryWeek[12]",{
        url:"/summaryWeek[12]?id=&name=&page=",
        views:{
            "content@root.people.collect":{
                templateUrl : "root/people/collect/summaryWeek/_res/html/index.html",
                controller:'collectWeekCtrl'
            }
        }
    }).state("root.people.collect.summaryMonth[12]",{
        url:"/summaryMonth[12]?id=&name=&page=",
        views:{
            "content@root.people.collect":{
                templateUrl : "root/people/collect/summaryMonth/_res/html/index.html",
                controller:'collectMonthCtrl'
            }
        }
    }).state("root.people.collect.summaryTotal[12]",{
        url:"/summaryTotal[12]?id=&name=&page=",
        views:{
            "content@root.people.collect":{
                templateUrl : "root/people/collect/summaryTotal/_res/html/index.html",
                controller:'collectTotalCtrl'
            }
        }
    })
});