var app = angular.module('paymentServer',[]);
app.factory('paymentSer',function ($http) {
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
        return $http.get('/payment/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/payment/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/payment/count')
    }
    function deleteContent(data){
        return $http.get('/payment/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/payment/add',data)
    }
    function getOneById(data) {
        return $http.get('/payment/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/payment/edit',data)
    }
});
