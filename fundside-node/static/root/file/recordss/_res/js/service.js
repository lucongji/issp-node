var app = angular.module('recordssServer',[]);
app.factory('recordssSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
    };
    function menuPermission(data) {
        return $http.get('/recordss/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/recordss/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/recordss/count')
    }
    function deleteContent(data){
        return $http.get('/recordss/delete',{params:data})
    }
});
