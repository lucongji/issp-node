var app = angular.module('initBalanceServer',[]);
app.factory('initBalanceSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
    };
    function menuPermission(data) {
        return $http.get('/initBalance/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/initBalance/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/initBalance/count')
    }
    function deleteContent(data){
        return $http.get('/initBalance/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/initBalance/add',data)
    }
    function getOneById(data) {
        return $http.get('/initBalance/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/initBalance/edit',data)
    }
});
