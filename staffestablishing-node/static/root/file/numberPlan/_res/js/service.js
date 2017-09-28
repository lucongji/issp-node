var app = angular.module('numServer',[]);
app.factory('numSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        allClassify:allClassify,
        departContent:departContent

    };
    function menuPermission(data) {
        return $http.get('/number/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/number/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/number/count')
    }
    function deleteContent(data){
        return $http.get('/number/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/number/add',data)
    }
    //获取所有分类
    function allClassify() {
        return $http.get('/allClassify/classify')
    }
//查找对应的部门
    function departContent(data){
        return $http.get('/departContent/depart',{params:data})
    }
    function getOneById(data) {
        return $http.get('/number/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/number/edit',data)
    }
});
