var app = angular.module('biddingaccept', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.biddingaccept", {
        url : "/biddingaccept",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingaccept/_res/html/index.html",
                controller:"acceptCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingaccept/_res/html/menu.html",
                controller:"acceptMenuCtrl"
            }
        }
    }).state("root.biddingManagement.biddingaccept.list[12]",{
        url:"/list[12]?id=&name=&page=&competitive=",
        views:{
            "content@root.biddingManagement.biddingaccept":{
                templateUrl : "root/biddingManagement/biddingaccept/list/_res/html/index.html",
                controller:'acceptListCtrl'
            }
        }
    }).state("root.biddingManagement.biddingaccept.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.biddingaccept":{
                templateUrl : "root/biddingManagement/biddingaccept/add/_res/html/index.html",
                controller:'acceptAddCtrl'
            }
        }
    }).state("root.biddingManagement.biddingaccept.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.biddingaccept":{
                templateUrl : "root/biddingManagement/biddingaccept/edit/_res/html/index.html",
                controller:'acceptEditCtrl'
            }
        }
    }).state("root.biddingManagement.biddingaccept.notification[12]",{
        url:"/notification[12]?id=&page=",
        views:{
            "content@root.biddingManagement.biddingaccept":{
                templateUrl : "root/biddingManagement/biddingaccept/notification/_res/html/index.html",
                controller:'acceptNotificationCtrl'
            }
        }
    })
});