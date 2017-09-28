var app = angular.module('applyServer',[]);
app.factory('applySer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        auditContent:auditContent,
        getInvestorContent:getInvestorContent,
        ectSummaryInvestor:ectSummaryInvestor,
        ectSummaryToFund:ectSummaryToFund,
        summaryTime:summaryTime,
        viewFiles:viewFiles
    };
    function menuPermission(data) {
        return $http.get('/apply/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/apply/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/apply/count')
    }
    function deleteContent(data){
        return $http.get('/apply/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/apply/add',data)
    }
    function getOneById(data) {
        return $http.get('/apply/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/apply/edit',data)
    }
    //审核
    function auditContent(data){
        return $http.get('/apply/audit',{params:data})
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
    function ectSummaryInvestor(data) {
        return $http.post('/apply/ectSummaryInvestor',data)
    }
    //资金进入方式
    function ectSummaryToFund(data) {
        return $http.post('/apply/ectSummaryToFund',data)
    }
    //资金进入时间
    function summaryTime(data) {
        return $http.post('/apply/summaryTime',data)
    }
    function viewFiles(data){
        return $http.get('/apply/listFile',{params:data})
    }
});
