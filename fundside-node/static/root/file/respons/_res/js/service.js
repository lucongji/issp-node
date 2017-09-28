var app = angular.module('responsServer',[]);
app.factory('responsSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        getInvestorContent:getInvestorContent
    };
    function menuPermission(data) {
        return $http.get('/respons/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/respons/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/respons/count')
    }
    function deleteContent(data){
        return $http.get('/respons/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/respons/add',data)
    }
    function getOneById(data) {
        return $http.get('/respons/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/respons/edit', data)
    }
    //获取投资人
    function getInvestorContent(){
        return $http.get('/apply/getInvestor')
    }
});
