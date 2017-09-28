var app = angular.module('actServer',[]);
app.factory('actSer',function ($http) {
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
        return $http.get('/act/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/act/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/act/count')
    }
    function deleteContent(data){
        return $http.get('/act/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/act/add',data)
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
        return $http.get('/act/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/act/edit',data)
    }
});
