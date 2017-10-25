var app = angular.module('revenue', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.revenue", {
        url : "/revenue",
        views : {
            "content@root.payment" : {
                templateUrl : "root/payment/revenue/_res/html/index.html",
                controller:"revenueCtrl"
            },"menu@root.payment" : {
                templateUrl : "root/payment/revenue/_res/html/menu.html",
                controller:"revenueMenuCtrl"
            }
        }
    }).state("root.payment.revenue.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payment.revenue":{
                templateUrl : "root/payment/revenue/add/_res/html/index.html",
                controller:'revenueAddCtrl'
            }
        }
    }).state("root.payment.revenue.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.payment.revenue":{
                templateUrl : "root/payment/revenue/edit/_res/html/index.html",
                controller:'revenueEditCtrl'
            }
        }
    }).state("root.payment.revenue.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.payment.revenue":{
                templateUrl : "root/payment/revenue/list/_res/html/index.html",
                controller:'revenueListCtrl'
            }
        }
    }).state("root.payment.revenue.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.payment.revenue":{
                templateUrl : "root/payment/revenue/summary/_res/html/index.html",
                controller:'revenueSummaryCtrl'
            }
        }
    })
});