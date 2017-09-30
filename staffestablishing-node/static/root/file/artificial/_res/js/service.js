var app = angular.module('artificialServer',[]);
app.factory('artificialSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        listContent2:listContent2,
        addContent2:addContent2,
        allSalary:allSalary

    };
    function menuPermission(data) {
        return $http.get('/artificial/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/artificial/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/artificial/count')
    }
    function deleteContent(data){
        return $http.get('/artificial/delete',{params:data})
    }
    //列表详细字段
    function listContent2() {
        return $http.get('/listContent2/list')
    }
//添加详细字段
    function addContent2(){
        return $http.get('/addContent2/add')
    }
    function addContent(data){
        return $http.post('/artificial/add',data)
    }
    //获取薪水
    function allSalary() {
        return $http.get('/allSalary/salary')
    }

    function getOneById(data) {
        return $http.get('/artificial/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/artificial/edit',data)
    }
});
