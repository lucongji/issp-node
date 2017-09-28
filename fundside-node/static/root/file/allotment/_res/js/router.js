var app = angular.module('allotment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.allotment", {
        url : "/allotment",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/allotment/_res/html/index.html",
                controller:"allotmentCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/allotment/_res/html/menu.html",
                controller:"allotmentMenuCtrl"
            }
        }
    }).state("root.file.allotment.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.allotment":{
                templateUrl : "root/file/allotment/list/_res/html/index.html",
                controller:'allotmentListCtrl'
            }
        }
    }).state("root.file.allotment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.allotment":{
                templateUrl : "root/file/allotment/add/_res/html/index.html",
                controller:'allotmentAddCtrl'
            }
        }
    }).state("root.file.allotment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.allotment":{
                templateUrl : "root/file/allotment/edit/_res/html/index.html",
                controller:'allotmentEditCtrl'
            }
        }
    })
});