var app = angular.module('accountBalance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.accountBalance", {
        url : "/accountBalance",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/accountBalance/_res/html/index.html",
                controller:"accountBalanceCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/accountBalance/_res/html/menu.html",
                controller:"accountBalanceMenuCtrl"
            }
        }
    }).state("root.file.accountBalance.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.accountBalance":{
                templateUrl : "root/file/accountBalance/collect/_res/html/index.html",
                controller:'accountBalanceCollectCtrl'
            }
        }
    })
});