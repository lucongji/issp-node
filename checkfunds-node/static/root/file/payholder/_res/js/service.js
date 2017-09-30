var app = angular.module('payholderServer',[]);
app.factory('payholderSer',function ($http) {
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
        return $http.get('/payholder/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/payholder/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/payholder/count')
    }
    function deleteContent(data){
        return $http.get('/payholder/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/payholder/add',data)
    }
    function getOneById(data) {
        return $http.get('/payholder/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/payholder/edit',data)
    }
    //获取所有一级科目
    function firstSubject(){
        return $http.get('/firstSubject/payholder')
    }
    //获取所有二级科目
    function secondSubject(data){
        return $http.get('/secondSubject/payholder',{params:data})
    }
    //获取所有三级科目
    function thirdSubject(data){
        return $http.get('/thirdSubject/payholder',{params:data})
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/payholder',data)
    }
});
