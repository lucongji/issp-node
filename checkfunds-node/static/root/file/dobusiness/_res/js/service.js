var app = angular.module('doServer',[]);
app.factory('doSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        collectWorks:collectWorks,
        allType:allType
    };
    function menuPermission(data) {
        return $http.get('/do/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/do/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/do/count')
    }
    function deleteContent(data){
        return $http.get('/do/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/do/add',data)
    }
    function getOneById(data) {
        return $http.get('/do/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/do/edit',data)
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/dobusiness',data)
    }
    //获取所有类型
    function allType(){
        return $http.get('/allType/type')
    }
});
