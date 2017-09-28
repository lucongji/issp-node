var app = angular.module('stockServer',[]);
app.factory('stockSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        viewFiles:viewFiles,
        getInvestorContent:getInvestorContent
    };
    function menuPermission(data) {
        return $http.get('/stock/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/stock/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/stock/count')
    }
    function deleteContent(data){
        return $http.get('/stock/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/stock/add',data)
    }
    function getOneById(data) {
        return $http.get('/stock/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/stock/edit',data)
    }
    function viewFiles(data){
        return $http.get('/stock/listFile',{params:data})
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
});
