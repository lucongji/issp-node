var app = angular.module('accountBalanceServer',[]);
app.factory('accountBalanceSer',function ($http) {
    return {
        menuPermission:menuPermission,
        collectWorks:collectWorks
    };
    function menuPermission(data) {
        return $http.get('/accountBalance/guidePermission/'+data);
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/accountBalance',data)
    }
});
