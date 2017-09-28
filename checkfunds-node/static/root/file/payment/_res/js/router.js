var app = angular.module('payment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.payment", {
        url : "/payment",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/payment/_res/html/index.html",
                controller:"paymentCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/payment/_res/html/menu.html",
                controller:"paymentMenuCtrl"
            }
        }
    }).state("root.file.payment.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.payment":{
                templateUrl : "root/file/payment/list/_res/html/index.html",
                controller:'paymentListCtrl'
            }
        }
    }).state("root.file.payment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.payment":{
                templateUrl : "root/file/payment/add/_res/html/index.html",
                controller:'paymentAddCtrl'
            }
        }
    }).state("root.file.payment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.payment":{
                templateUrl : "root/file/payment/edit/_res/html/index.html",
                controller:'paymentEditCtrl'
            }
        }
    }).state("root.file.payment.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.file.payment":{
                templateUrl : "root/file/payment/import/_res/html/index.html",
                controller:'paymentImportCtrl'
            }
        }
    })
});