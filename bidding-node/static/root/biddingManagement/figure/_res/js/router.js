var app = angular.module('figure', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.figure", {
        url : "/figure",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/figure/_res/html/index.html",
                controller:"figureCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/figure/_res/html/menu.html",
                controller:"figureMenuCtrl"
            }
        }
    }).state("root.biddingManagement.figure.summaryOperation[12]",{
        url:"/summaryOperation[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.figure":{
                templateUrl : "root/biddingManagement/figure/summaryOperation/_res/html/index.html",
                controller:'figureOperCtrl'
            }
        }
    })
});