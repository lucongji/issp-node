var app = angular.module('finance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.finance", {
        url : "/finance",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/finance/_res/html/index.html",
                controller:"financeCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/finance/_res/html/menu.html",
                controller:"financeMenuCtrl"
            }
        }
    }).state("root.file.finance.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.finance":{
                templateUrl : "root/file/finance/collect/_res/html/index.html",
                controller:'financeCollectCtrl'
            }
        }
    })
});