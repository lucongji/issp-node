var app = angular.module('detailCollect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.detail.collect",{
        url:"/collect",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/collect/_res/html/index.html",
                controller:'detailCollectCtrl'
            }
        }
    }).state("root.payment.detail.collect.collectMore[12]",{
        url:"/collectMore[12]?suId=",
        views:{
            "modal@root.payment.detail.collect":{
                templateUrl : "root/payment/detail/collect/collectMore/_res/html/index.html",
                controller:'detailCollectMoreCtrl'
            }
        }
    })
});
