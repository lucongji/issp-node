var app = angular.module('shareholderServer',[]);
app.factory('shareholderSer',function ($http) {
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
        return $http.get('/shareholder/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/shareholder/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/shareholder/count')
    }
    function deleteContent(data){
        return $http.get('/shareholder/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/shareholder/add',data)
    }
    function getOneById(data) {
        return $http.get('/shareholder/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/shareholder/edit',data)
    }
    //获取所有一级科目
    function firstSubject(){
        return $http.get('/firstSubject/count')
    }
    //获取所有二级科目
    function secondSubject(data){
        return $http.get('/secondSubject/count',{params:data})
    }
    //获取所有三级科目
    function thirdSubject(data){
        return $http.get('/thirdSubject/count',{params:data})
    }
    //汇总
    function collectWorks(data){
        return $http.post('/collectWorks/collect',data)
    }
});
