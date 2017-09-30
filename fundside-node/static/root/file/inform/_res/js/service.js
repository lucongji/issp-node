var app = angular.module('informwServer',[]);
app.factory('informwSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        allInnerProject:allInnerProject,
        listProject:listProject,
        addApplyInv:addApplyInv
    };
    function menuPermission(data) {
        return $http.get('/inform/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/inform/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/inform/count')
    }
    function deleteContent(data){
        return $http.get('/inform/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/inform/add',data)
    }
    function getOneById(data) {
        return $http.get('/inform/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/inform/edit',data)
    }
    //内部项目名称
    function allInnerProject(){
        return $http.get('/allInnerProject/name')
    }
    //获取信息
    function listProject(data) {
        return $http.get('/listProject/list',{
            params:data
        })
    }
    function addApplyInv(data){
        return $http.post('/addApplyInv/apply',data)
    }
});
