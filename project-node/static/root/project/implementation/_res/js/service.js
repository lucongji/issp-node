var app = angular.module('implementationServer',[]);
app.factory('implementationSer',function ($http) {
    return {
        listImplementation : listImplementation,
        countImplementation:countImplementation,
        deleteImplementation:deleteImplementation,
        addProjectCarry:addProjectCarry,
        editImplementationProject:editImplementationProject,
        getImplementationOneById:getImplementationOneById,
        allImplementProjects:allImplementProjects,
    };
    //列表
    function listImplementation(data) {
        return $http.get('/project/listImplementation/list',{
            params:data
        })
    }
    //分页
    function countImplementation(data){
        return $http.get('/countImplementation/count',{
            params:data
        })
    }
//删除
    function deleteImplementation(data){
        return $http.get('/project/deleteImplementation/delete',{
            params:data
        })
    }
    //添加
    function addProjectCarry(data){
        return $http.post('/project/addProjectCarry/add',data)
    }
    //编辑
    function editImplementationProject(data){
        return $http.post('/project/editImplementationProject/edit',data)
    }
    //id编辑
    function getImplementationOneById(data){
        return $http.get('/project/getImplementationOneById',{
            params:data
        })
    }
    function allImplementProjects(){
        return $http.get('/allImplementProjects/id')
    }
});
