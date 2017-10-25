var app = angular.module('revenueServer',[]);
app.factory('revenueSer',function ($http) {
    return {
        revenDelete:revenDelete,
        revenList:revenList,
        revenCount:revenCount,
        revenAdd:revenAdd,
        revenEdit:revenEdit,
        revenId:revenId,
        revenSummary:revenSummary,
        revenPermission:revenPermission
    };
    function revenList(data) {
        return $http.get('/revenList/list',{
            params: data
        })
    }
    //分页总条数
    function revenCount(){
        return $http.get('/revenCount/count')
    }
    //添加
    function revenAdd(data){
        return $http.post('/revenAdd/add',data)
    }
    //编辑
    function revenEdit(data){
        return $http.post('/revenEdit/edit',data)
    }
    //id查询
    function revenId(data){
        return $http.get('/revenId/id',{
            params:data
        })
    }
    //删除
    function revenDelete(data){
        return $http.get('/revenDelete/delete',{
            params: data
        })
    }
    //汇总
    function revenSummary(data){
        return $http.post('/revenSummary/summary',data)
    }
    //菜单权限
    function revenPermission(data) {
        return $http.get('/revenue/guidePermission/'+data);
    }
});
