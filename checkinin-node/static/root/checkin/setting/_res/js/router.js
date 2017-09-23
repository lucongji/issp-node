var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.checkin.setting", {
        url : "/setting",
        views : {
            "content@root.checkin":{
                templateUrl : "root/checkin/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.checkin":{
                templateUrl : "root/checkin/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.checkin.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.checkin.setting":{
                templateUrl : "root/checkin/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    }).state("root.checkin.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.checkin.setting":{
                templateUrl : "root/checkin/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    })
});