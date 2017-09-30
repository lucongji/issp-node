var app = angular.module('payfinance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.payfinance", {
        url : "/payfinance",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/payfinance/_res/html/index.html",
                controller:"payfinanceCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/payfinance/_res/html/menu.html",
                controller:"payfinanceMenuCtrl"
            }
        }
    }).state("root.file.payfinance.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.file.payfinance":{
                templateUrl : "root/file/payfinance/collect/_res/html/index.html",
                controller:'payfinanceCollectCtrl'
            }
        }
    })
});