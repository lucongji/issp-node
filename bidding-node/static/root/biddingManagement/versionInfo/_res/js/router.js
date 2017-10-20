var app = angular.module('versionInfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.biddingManagement.versionInfo", {
        url: "/versionInfo",
        views: {
            "content@root.biddingManagement": {
                templateUrl: "root/biddingManagement/versionInfo/_res/html/index.html",
                controller: "versionInfoCtrl"
            }
        }
    })
})