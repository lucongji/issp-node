var app = angular.module('creditorServer',[]);
app.factory('creditorSer',function ($http) {
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
        return $http.get('/creditor/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/creditor/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/creditor/count')
    }
    function deleteContent(data){
        return $http.get('/creditor/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/creditor/add',data)
    }
    function getOneById(data) {
        return $http.get('/creditor/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/creditor/edit',data)
    }
    function viewFiles(data){
        return $http.get('/creditor/listFile',{params:data})
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
});
