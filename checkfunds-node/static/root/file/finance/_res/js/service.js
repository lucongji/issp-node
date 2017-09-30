var app = angular.module('financeServer',[]);
app.factory('financeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        collectWorks:collectWorks
    };
    function menuPermission(data) {
        return $http.get('/finance/guidePermission/'+data);
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/finance',data)
    }
});
