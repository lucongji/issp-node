var app = angular.module('customSumServer',[]);
app.factory('customSumSer',function ($http) {
    return {
        menuPermission:menuPermission,
        ectSummaryInvestor:ectSummaryInvestor,
        getInvestorContent:getInvestorContent
    };
    function menuPermission(data) {
        return $http.get('/customSum/guidePermission/'+data);
    }
     function ectSummaryInvestor(data) {
        return $http.post('/customSum/ectSummaryInvestor',data)
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/getInvestorContent/getInvestor')
    }
});
