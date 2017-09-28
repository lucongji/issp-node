var app = angular.module('profitServer',[]);
app.factory('profitSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        getInvestorContent:getInvestorContent,
        getProjectContent:getProjectContent
    };
    function menuPermission(data) {
        return $http.get('/profit/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/profit/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/profit/count')
    }
    function deleteContent(data){
        return $http.get('/profit/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/profit/add',data)
    }
    function getOneById(data) {
        return $http.get('/profit/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/profit/edit', data)
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
    //获取内部项目名称
    function getProjectContent(){
        return $http.get('/apply/getProject')
    }
});
