var app = angular.module('biddingType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.biddingType", {
        url : "/biddingType",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingType/_res/html/index.html",
                controller:"typeCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/biddingType/_res/html/menu.html",
                controller:"typeMenuCtrl"
            }
        }
    }).state("root.biddingManagement.biddingType.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.biddingType":{
                templateUrl : "root/biddingManagement/biddingType/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.biddingManagement.biddingType.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.biddingType":{
                templateUrl : "root/biddingManagement/biddingType/add/_res/html/index.html",
                controller:'typeAddCtrl'
            }
        }
    }).state("root.biddingManagement.biddingType.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.biddingType":{
                templateUrl : "root/biddingManagement/biddingType/edit/_res/html/index.html",
                controller:'typeEditCtrl'
            }
        }
    })
});