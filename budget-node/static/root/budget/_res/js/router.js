var app = angular.module('budget',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.budget", {
        url: "/budget",
        views: {
            "content@root": {
                templateUrl: "root/budget/_res/html/index.html",
                controller: "budgetCtrl"
            },"nav@root": {
                templateUrl: "root/budget/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})