var app = angular.module('otherServer',[]);
app.factory('otherSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        firstSubject:firstSubject,
        secondSubject:secondSubject,
        thirdSubject:thirdSubject,
        collectWorks:collectWorks

    };
    function menuPermission(data) {
        return $http.get('/other/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/other/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/other/count')
    }
    function deleteContent(data){
        return $http.get('/other/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/other/add',data)
    }
    function getOneById(data) {
        return $http.get('/other/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/other/edit',data)
    }
    //获取所有一级科目
    function firstSubject(){
        return $http.get('/firstSubject/other')
    }
    //获取所有二级科目
    function secondSubject(data){
        return $http.get('/secondSubject/other',{params:data})
    }
    //获取所有三级科目
    function thirdSubject(data){
        return $http.get('/thirdSubject/other',{params:data})
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/other',data)
    }
});
