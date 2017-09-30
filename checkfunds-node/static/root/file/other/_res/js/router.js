var app = angular.module('other', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.other", {
        url : "/other",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/other/_res/html/index.html",
                controller:"otherCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/other/_res/html/menu.html",
                controller:"otherMenuCtrl"
            }
        }
    }).state("root.file.other.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.other":{
                templateUrl : "root/file/other/list/_res/html/index.html",
                controller:'otherListCtrl'
            }
        }
    }).state("root.file.other.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.other":{
                templateUrl : "root/file/other/add/_res/html/index.html",
                controller:'otherAddCtrl'
            }
        }
    }).state("root.file.other.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.other":{
                templateUrl : "root/file/other/edit/_res/html/index.html",
                controller:'otherEditCtrl'
            }
        }
    }).state("root.file.other.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.other":{
                templateUrl : "root/file/other/import/_res/html/index.html",
                controller:'otherImportCtrl'
            }
        }
    }).state("root.file.other.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.other":{
                templateUrl : "root/file/other/collect/_res/html/index.html",
                controller:'otherCollectCtrl'
            }
        }
    })
});