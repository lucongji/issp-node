var app = angular.module('customSum', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.customSum", {
        url : "/customSum",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/customSum/_res/html/index.html",
                controller:"customSumCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/customSum/_res/html/menu.html",
                controller:"customSumMenuCtrl"
            }
        }
    }).state("root.file.customSum.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.file.customSum":{
                templateUrl : "root/file/customSum/list/_res/html/index.html",
                controller:'customSumListCtrl'
            }
        }
    })
});