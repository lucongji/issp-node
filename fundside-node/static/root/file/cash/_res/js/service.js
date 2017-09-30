var app = angular.module('cashServer',[]);
app.factory('cashSer',function ($http) {
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
        return $http.get('/cash/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/cash/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/cash/count')
    }
    function deleteContent(data){
        return $http.get('/cash/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/cash/add',data)
    }
    function getOneById(data) {
        return $http.get('/cash/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/cash/edit',data)
    }
    function viewFiles(data){
        return $http.get('/cash/listFile',{params:data})
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
});
