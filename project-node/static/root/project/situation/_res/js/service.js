var app = angular.module('situationServer',[]);
app.factory('situationSer',function ($http) {
    return {
        listProjectSituationCap : listProjectSituationCap,
        countProjectBaseInfo:countProjectBaseInfo,
        deleteProjectSit:deleteProjectSit,
        addProjectSituation:addProjectSituation,
        editProjectSituation:editProjectSituation,
        getOneById:getOneById,
    };
    //列表
    function listProjectSituationCap(data) {
        return $http.get('/project/listProjectSituationCap/list',{
            params:data
        })
    }
    //分页
    function countProjectBaseInfo(data){
        return $http.get('/countProjectBaseInfo/count',{params:data})
    }
    //删除
    function deleteProjectSit(data){
        return $http.post('/project/deleteProjectSit/delete',data)
    }
    //添加
    function addProjectSituation(data){
        return $http.post('/project/addProjectSituation/add',data)
    }
    //编辑
    function editProjectSituation(data){
        return $http.post('/project/editProjectSituation/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/project/getOneById',data)
    }
});
