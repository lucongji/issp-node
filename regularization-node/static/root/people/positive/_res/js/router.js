var app = angular.module('positive', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.positive", {
        url : "/positive",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/positive/_res/html/index.html",
                controller:"positCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/positive/_res/html/menu.html",
                controller:"positMenuCtrl"
            }
        }
    }).state("root.people.positive.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/list/_res/html/index.html",
                controller:'positListCtrl'
            }
        }
    }).state("root.people.positive.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/add/_res/html/index.html",
                controller:'positAddCtrl'
            }
        }
    }).state("root.people.positive.follow[12]",{
        url:"/follow[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/follow/_res/html/index.html",
                controller:'positFollowCtrl'
            }
        }
        //-------------------------------------------------
    }).state("root.people.positive.welfare[12]",{
        url:"/welfare[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/welfare/_res/html/index.html",
                controller:'positWelfareCtrl'
            }
        }
    }).state("root.people.positive.planning[12]",{
        url:"/planning[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/planning/_res/html/index.html",
                controller:'positPlanningCtrl'
            }
        }
    }).state("root.people.positive.budget[12]",{
        url:"/budget[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/budget/_res/html/index.html",
                controller:'positBudgetCtrl'
            }
        }
    }).state("root.people.positive.module[12]",{
        url:"/module[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/module/_res/html/index.html",
                controller:'positModuleCtrl'
            }
        }
    }).state("root.people.positive.projects[12]",{
        url:"/projects[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/projects/_res/html/index.html",
                controller:'positProjectsCtrl'
            }
        }
    }).state("root.people.positive.manager[12]",{
        url:"/manager[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/manager/_res/html/index.html",
                controller:'positManagerCtrl'
            }
        }
    }).state("root.people.positive.interview[12]",{
        url:"/interview[12]?id=&page=",
        views:{
            "content@root.people.positive":{
                templateUrl : "root/people/positive/interview/_res/html/index.html",
                controller:'positInterviewCtrl'
            }
        }
    })
});