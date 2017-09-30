var app = angular.module('proportionServer',[]);
app.factory('proportionSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,

    };
    function menuPermission(data) {
        return $http.get('/proportion/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/proportion/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/proportion/count')
    }
    function deleteContent(data){
        return $http.get('/proportion/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/proportion/add',data)
    }
    function getOneById(data) {
        return $http.get('/proportion/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/proportion/edit',data)
    }
});
