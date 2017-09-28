var app = angular.module('transferServer',[]);
app.factory('transferSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        viewFiles:viewFiles
    };
    function menuPermission(data) {
        return $http.get('/transfer/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/transfer/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/transfer/count')
    }
    function deleteContent(data){
        return $http.get('/transfer/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/transfer/add',data)
    }
    function getOneById(data) {
        return $http.get('/transfer/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/transfer/edit',data)
    }
    function viewFiles(data){
        return $http.get('/transfer/listFile',{params:data})
    }
});
