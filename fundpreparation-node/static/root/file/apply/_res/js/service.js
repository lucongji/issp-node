var app = angular.module('applyServer',[]);
app.factory('applySer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editAuContent:editAuContent,
        getRecordById:getRecordById

    };
    function menuPermission(data) {
        return $http.get('/apply/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/apply/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/apply/count')
    }
    function deleteContent(data){
        return $http.get('/apply/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/apply/add',data)
    }
    function getOneById(data) {
        return $http.get('/apply/getOneById',{params:data})
    }
    function editAuContent(data){
        return $http.post('/editAuContent/audit',data)
    }
    //查看记录
    function getRecordById(data) {
        return $http.get('/apply/getRecordById',{params:data})
    }
});
