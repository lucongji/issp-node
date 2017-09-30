var app = angular.module('payotherServer',[]);
app.factory('payotherSer',function ($http) {
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
        return $http.get('/payother/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/payother/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/payother/count')
    }
    function deleteContent(data){
        return $http.get('/payother/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/payother/add',data)
    }
    function getOneById(data) {
        return $http.get('/payother/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/payother/edit',data)
    }
    //获取所有一级科目
    function firstSubject(){
        return $http.get('/firstSubject/payother')
    }
    //获取所有二级科目
    function secondSubject(data){
        return $http.get('/secondSubject/payother',{params:data})
    }
    //获取所有三级科目
    function thirdSubject(data){
        return $http.get('/thirdSubject/payother',{params:data})
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/payother',data)
    }
});
