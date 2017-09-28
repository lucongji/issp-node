var app = angular.module('recordsServer',[]);
app.factory('recordsSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
    };
    function menuPermission(data) {
        return $http.get('/records/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/records/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/records/count')
    }
    function deleteContent(data){
        return $http.get('/records/delete',{params:data})
    }
});
