var app = angular.module('help', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.versionInfo.help", {
        url : "/help",
        views : {  
            "content@root.biddingManagement.versionInfo" : {
                templateUrl : "root/biddingManagement/versionInfo/help/_res/html/index.html",
                controller:"helpCtrl"
            },"menu@root.biddingManagement.versionInfo" : {
                templateUrl : "root/biddingManagement/versionInfo/help/_res/html/menu.html",
                controller:"helpMenuCtrl"
            }
        }
    }).state("root.biddingManagement.versionInfo.help.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.biddingManagement.versionInfo.help":{
                templateUrl : "root/biddingManagement/versionInfo/help/list/_res/html/index.html",
                controller:'helpListCtrl'
            }
        }
    }).state("root.biddingManagement.versionInfo.help.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.biddingManagement.versionInfo.help":{
                templateUrl : "root/biddingManagement/versionInfo/help/detail/_res/html/index.html",
                controller:'helpDetailCtrl'
            }
        }
    }).state("root.biddingManagement.versionInfo.help.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.versionInfo.help":{
                templateUrl : "root/biddingManagement/versionInfo/help/edit/_res/html/index.html",
                controller:'helpEditCtrl'
            }
        }
    }).state("root.biddingManagement.versionInfo.help.answer[12]",{
        url:"/answer[12]?id=&page=",
        views:{
            "content@root.biddingManagement.versionInfo.help":{
                templateUrl : "root/biddingManagement/versionInfo/help/answer/_res/html/index.html",
                controller:'answerCtrl'
            }
        }
    })
});