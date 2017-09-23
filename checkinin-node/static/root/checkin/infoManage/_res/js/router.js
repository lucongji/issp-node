var app = angular.module('infoManageM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.checkin.infoManage", {
        url : "/infoManage",
        views : {
            "content@root.checkin" : {
                templateUrl : "root/checkin/infoManage/_res/html/index.html",
                controller:"infoCtrl"
            },"menu@root.checkin" : {
                templateUrl : "root/checkin/infoManage/_res/html/menu.html",
                controller:"infoMenuCtrl"
            }
        }
    }).state("root.checkin.infoManage.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.checkin.infoManage":{
                templateUrl : "root/checkin/infoManage/list/_res/html/index.html",
                controller:'infoListCtrl'
            }
        }
    }).state("root.checkin.infoManage.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.checkin.infoManage":{
                templateUrl : "root/checkin/infoManage/add/_res/html/index.html",
                controller:'infoAddCtrl'
            }
        }
    }).state("root.checkin.infoManage.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.checkin.infoManage":{
                templateUrl : "root/checkin/infoManage/edit/_res/html/index.html",
                controller:'infoEditCtrl'
            }
        }
    }).state("root.checkin.infoManage.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.checkin.infoManage":{
                templateUrl : "root/checkin/infoManage/audit/_res/html/index.html",
                controller:'applyAuditCtrl'
            }
        }
    })
});