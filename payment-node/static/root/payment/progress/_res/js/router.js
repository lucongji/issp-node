var app = angular.module('progress', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.progress", {
        url : "/progress",
        views : {
            "content@root.payment" : {
                templateUrl : "root/payment/progress/_res/html/index.html",
                controller:"progressCtrl"
            },"menu@root.payment" : {
                templateUrl : "root/payment/progress/_res/html/menu.html",
                controller:"progressMenuCtrl"
            }
        }
    }).state("root.payment.progress.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payment.progress":{
                templateUrl : "root/payment/progress/add/_res/html/index.html",
                controller:'progressAddCtrl'
            }
        }
    }).state("root.payment.progress.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.payment.progress":{
                templateUrl : "root/payment/progress/edit/_res/html/index.html",
                controller:'progressEditCtrl'
            }
        }
    }).state("root.payment.progress.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.payment.progress":{
                templateUrl : "root/payment/progress/list/_res/html/index.html",
                controller:'progressListCtrl'
            }
        }
    }).state("root.payment.progress.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.payment.progress":{
                templateUrl : "root/payment/progress/summary/_res/html/index.html",
                controller:'progressSummaryCtrl'
            }
        }
    })
});