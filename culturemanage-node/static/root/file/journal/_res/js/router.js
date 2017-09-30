var app = angular.module('journal', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.journal", {
        url : "/journal",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/journal/_res/html/index.html",
                controller:"journalCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/journal/_res/html/menu.html",
                controller:"journalMenuCtrl"
            }
        }
    }).state("root.file.journal.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.journal":{
                templateUrl : "root/file/journal/list/_res/html/index.html",
                controller:'journalListCtrl'
            }
        }
    }).state("root.file.journal.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.journal":{
                templateUrl : "root/file/journal/add/_res/html/index.html",
                controller:'journalAddCtrl'
            }
        }
    }).state("root.file.journal.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.journal":{
                templateUrl : "root/file/journal/edit/_res/html/index.html",
                controller:'journalEditCtrl'
            }
        }
    })
});