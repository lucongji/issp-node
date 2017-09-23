var app = angular.module('daySummaryM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.checkin.daySummary", {
        url : "/daySummary",
        views : {
            "content@root.checkin" : {
                templateUrl : "root/checkin/daySummary/_res/html/index.html",
                controller:"daySummaryCtrl"
            },"menu@root.checkin" : {
                templateUrl : "root/checkin/daySummary/_res/html/menu.html",
                controller:"daySummaryMenuCtrl"
            }
        }
    }).state("root.checkin.daySummary.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.checkin.daySummary":{
                templateUrl : "root/checkin/daySummary/list/_res/html/index.html",
                controller:'daySummaryListCtrl'
            }
        }
    }).state("root.checkin.daySummary.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.checkin.daySummary":{
                templateUrl : "root/checkin/daySummary/add/_res/html/index.html",
                controller:'dayAddCtrl'
            }
        }
    }).state("root.checkin.daySummary.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.checkin.daySummary":{
                templateUrl : "root/checkin/daySummary/edit/_res/html/index.html",
                controller:'dayEditCtrl'
            }
        }
    }).state("root.checkin.daySummary.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.checkin.daySummary":{
                templateUrl : "root/checkin/daySummary/audit/_res/html/index.html",
                controller:'dayAuditCtrl'
            }
        }
    }).state("root.checkin.daySummary.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.checkin.daySummary":{
                templateUrl : "root/checkin/daySummary/collect/_res/html/index.html",
                controller:'collectCtrl'
            }
        }
    })
});