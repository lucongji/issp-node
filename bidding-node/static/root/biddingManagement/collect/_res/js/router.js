var app = angular.module('collect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.collect", {
        url : "/collect",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/collect/_res/html/index.html",
                controller:"collectCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/collect/_res/html/menu.html",
                controller:"collectMenuCtrl"
            }
        }
    }).state("root.biddingManagement.collect.summaryOperation[12]",{
        url:"/summaryOperation[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.collect":{
                templateUrl : "root/biddingManagement/collect/summaryOperation/_res/html/index.html",
                controller:'collectOperCtrl'
            }
        }
    }).state("root.biddingManagement.collect.summaryDay[12]",{
        url:"/summaryDay[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.collect":{
                templateUrl : "root/biddingManagement/collect/summaryDay/_res/html/index.html",
                controller:'collectDayCtrl'
            }
        }
    }).state("root.biddingManagement.collect.summaryWeek[12]",{
        url:"/summaryWeek[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.collect":{
                templateUrl : "root/biddingManagement/collect/summaryWeek/_res/html/index.html",
                controller:'collectWeekCtrl'
            }
        }
    }).state("root.biddingManagement.collect.summaryMonth[12]",{
        url:"/summaryMonth[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.collect":{
                templateUrl : "root/biddingManagement/collect/summaryMonth/_res/html/index.html",
                controller:'collectMonthCtrl'
            }
        }
    }).state("root.biddingManagement.collect.summaryTotal[12]",{
        url:"/summaryTotal[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.collect":{
                templateUrl : "root/biddingManagement/collect/summaryTotal/_res/html/index.html",
                controller:'collectTotalCtrl'
            }
        }
    })
});