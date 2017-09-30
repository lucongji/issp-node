var app = angular.module('signServer',[]);
app.factory('signSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        auditContent:auditContent,
        getInvestorContent:getInvestorContent
    };
    function menuPermission(data) {
        return $http.get('/sign/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/sign/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/sign/count')
    }
    function deleteContent(data){
        return $http.get('/sign/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/sign/add',data)
    }
    function getOneById(data) {
        return $http.get('/sign/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/sign/edit', data)
    }
    //审批
    function auditContent(data) {
        return $http.post('/sign/auditContent', data)
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
});
