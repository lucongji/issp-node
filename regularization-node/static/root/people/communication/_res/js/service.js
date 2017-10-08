var app = angular.module('communServer',[]);
app.factory('communSer',function ($http) {
    return {
        communEdit : communEdit,
        communDlete:communDlete,
        communPermission:communPermission,
        communAdd:communAdd,
        communId:communId,
        communCount:communCount,
        communList:communList
    };
    //编辑
    function communEdit(data){
        return $http.post('/communEdit/edit',data)
    }
    //删除
    function communDlete(data){
        return $http.get('/communDlete/delete',{
            params: data
        })
    }
    //功能导航权限
    function communPermission(data){
        return $http.get('/communPermission/permission/'+data);
    }
    //添加
    function communAdd(data){
        return $http.post('/communAdd/add',data)
    }
    //id查询
    function communId(data){
        return $http.get('/communId/Id',{
            params:data
        })
    }
    //分页总条数
    function communCount(){
        return $http.get('/communCount/count')
    }
    function communList(data) {
        return $http.get('/communList/list',{
            params: data
        })
    }
});
