var app = angular.module('teamServer',[]);
app.factory('teamSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        countTarget:countTarget,
        getOneByNumber:getOneByNumber
    };
    function menuPermission(data) {
        return $http.get('/team/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/team/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/team/count')
    }
    function deleteContent(data){
        return $http.get('/team/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/team/add',data)
    }
    function getOneById(data) {
        return $http.get('/team/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/team/edit',data)
    }
    function countTarget(){
        return $http.get('/countTarget/userName')
    }
    //查询
    function getOneByNumber(data) {
        return $http.get('/team/getOneByNumber',{params:data})
    }
});
