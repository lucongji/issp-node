var app = angular.module('checkinModel',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.checkin", {
        url: "/checkin",
        views: {
            "content@root": {
                templateUrl: "root/checkin/_res/html/index.html",
                controller: "checkinCtrl"
            },"nav@root":{
                templateUrl: "root/checkin/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});
