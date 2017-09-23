var app = angular.module('stayApplyM', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.checkin.stayApply", {
        url : "/stayApply",
        views : {
            "content@root.checkin" : {
                templateUrl : "root/checkin/stayApply/_res/html/index.html",
                controller:"stayApplyCtrl"
            },"menu@root.checkin" : {
                templateUrl : "root/checkin/stayApply/_res/html/menu.html",
                controller:"stayApplyMenuCtrl"
            }
        }
    }).state("root.checkin.stayApply.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.checkin.stayApply":{
                templateUrl : "root/checkin/stayApply/list/_res/html/index.html",
                controller:'applyListCtrl'
            }
        }
    }).state("root.checkin.stayApply.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.checkin.stayApply":{
                templateUrl : "root/checkin/stayApply/add/_res/html/index.html",
                controller:'applyAddCtrl'
            }
        }
    }).state("root.checkin.stayApply.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.checkin.stayApply":{
                templateUrl : "root/checkin/stayApply/edit/_res/html/index.html",
                controller:'applyEditCtrl'
            }
        }
    }).state("root.checkin.stayApply.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.checkin.stayApply":{
                templateUrl : "root/checkin/stayApply/audit/_res/html/index.html",
                controller:'applyAuditCtrl'
            }
        }
    })
});