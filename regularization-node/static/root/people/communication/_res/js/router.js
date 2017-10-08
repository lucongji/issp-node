var app = angular.module('communees', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.communication", {
        url : "/communication",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/communication/_res/html/index.html",
                controller:"communCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/communication/_res/html/menu.html",
                controller:"communMenuCtrl"
            }
        }
    }).state("root.people.communication.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.communication":{
                templateUrl : "root/people/communication/list/_res/html/index.html",
                controller:'communListCtrl'
            }
        }
    }).state("root.people.communication.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.communication":{
                templateUrl : "root/people/communication/add/_res/html/index.html",
                controller:'communAddCtrl'
            }
        }
    }).state("root.people.communication.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.communication":{
                templateUrl : "root/people/communication/edit/_res/html/index.html",
                controller:'communEditCtrl'
            }
        }
    })
});