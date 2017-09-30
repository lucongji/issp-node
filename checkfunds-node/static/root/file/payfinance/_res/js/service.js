var app = angular.module('payfinanceServer',[]);
app.factory('payfinanceSer',function ($http) {
    return {
        menuPermission:menuPermission,
        collectWorks:collectWorks
    };
    function menuPermission(data) {
        return $http.get('/payfinance/guidePermission/'+data);
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/payfinance',data)
    }
});
