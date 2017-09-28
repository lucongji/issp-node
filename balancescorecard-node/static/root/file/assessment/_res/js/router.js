var app = angular.module('assessment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.assessment", {
        url : "/assessment",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/assessment/_res/html/index.html",
                controller:"assessmentCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/assessment/_res/html/menu.html",
                controller:"assessmentMenuCtrl"
            }
        }
    }).state("root.file.assessment.list[12]",{
        url:"/list[12]?id=&name=&page=&typeName=&person=",
        views:{
            "content@root.file.assessment":{
                templateUrl : "root/file/assessment/list/_res/html/index.html",
                controller:'assessmentListCtrl'
            }
        }
    }).state("root.file.assessment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.assessment":{
                templateUrl : "root/file/assessment/add/_res/html/index.html",
                controller:'assessmentAddCtrl'
            }
        }
    }).state("root.file.assessment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.assessment":{
                templateUrl : "root/file/assessment/edit/_res/html/index.html",
                controller:'assessmentEditCtrl'
            }
        }
    })
});