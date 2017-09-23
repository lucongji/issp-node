var app = angular.module('departureRequestM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.checkin.departureRequest", {
        url : "/departureRequest",
        views : {
            "content@root.checkin" : {
                templateUrl : "root/checkin/departureRequest/_res/html/index.html",
                controller:"departureCtrl"
            },"menu@root.checkin" : {
                templateUrl : "root/checkin/departureRequest/_res/html/menu.html",
                controller:"departureMenuCtrl"
            }
        }
    }).state("root.checkin.departureRequest.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.checkin.departureRequest":{
                templateUrl : "root/checkin/departureRequest/list/_res/html/index.html",
                controller:'departureListCtrl'
            }
        }
    }).state("root.checkin.departureRequest.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.checkin.departureRequest":{
                templateUrl : "root/checkin/departureRequest/add/_res/html/index.html",
                controller:'departureAddCtrl'
            }
        }
    }).state("root.checkin.departureRequest.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.checkin.departureRequest":{
                templateUrl : "root/checkin/departureRequest/edit/_res/html/index.html",
                controller:'departureEditCtrl'
            }
        }
    }).state("root.checkin.departureRequest.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.checkin.departureRequest":{
                templateUrl : "root/checkin/departureRequest/audit/_res/html/index.html",
                controller:'departureAuditCtrl'
            }
        }
    })
});