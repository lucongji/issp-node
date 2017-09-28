var app = angular.module('allotmentServer',[]);
app.factory('allotmentSer',function ($http) {
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
        return $http.get('/allotment/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/allotment/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/allotment/count')
    }
    function deleteContent(data){
        return $http.get('/allotment/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/allotment/add',data)
    }
    function getOneById(data) {
        return $http.get('/allotment/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/allotment/edit', data)
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
