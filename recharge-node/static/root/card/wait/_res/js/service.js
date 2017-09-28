var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        listWait : listWait,
        countWait:countWait,
        payWait:payWait,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addWait:addWait,
        deleteWait:deleteWait,
        editWait:editWait
    };
    //列表
    function listWait(data) {
        return $http.get('/wait/list',{
            params:data
        })
    }
    //分页
    function countWait(){
        return $http.get('/wait/count')
    }

    function payWait(data){
        return $http.post('/payWait/pay',data)
    }
    function getOneById(data) {
        return $http.get('/payWait/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/wait/guidePermission/'+data);
    }
    //添加
    function addWait(data){
        return $http.post('/addWait/add',data)
    }
    //删除
    function deleteWait(data){
        return $http.get('/deleteWait/delete',{params:data})
    }
    //编辑
    function editWait(data){
        return $http.post('/editWait/edit',data)
    }
});
