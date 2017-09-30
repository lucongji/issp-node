var app = angular.module('investment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.investment", {
        url : "/investment",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/investment/_res/html/index.html",
                controller:"investmentCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/investment/_res/html/menu.html",
                controller:"investmentMenuCtrl"
            }
        }
    }).state("root.file.investment.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.investment":{
                templateUrl : "root/file/investment/list/_res/html/index.html",
                controller:'investmentListCtrl'
            }
        }
    }).state("root.file.investment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.investment":{
                templateUrl : "root/file/investment/add/_res/html/index.html",
                controller:'investmentAddCtrl'
            }
        }
    }).state("root.file.investment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.investment":{
                templateUrl : "root/file/investment/edit/_res/html/index.html",
                controller:'investmentEditCtrl'
            }
        }
    })
});