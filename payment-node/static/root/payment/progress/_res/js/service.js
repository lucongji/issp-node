var app = angular.module('progressServer',[]);
app.factory('progressSer',function ($http) {
    return {
        progDelete:progDelete,
        progList:progList,
        progCount:progCount,
        progId:progId,
        progAdd:progAdd,
        progEdit:progEdit,
        progSummary:progSummary,
        progPermission:progPermission,
        //----------------------
        getUnit:getUnit,
        getArea:getArea,
        getType:getType,
        getMajors:getMajors,
        getOperator:getOperator,
        getTasking:getTasking,
        getState:getState
    };
    function progList(data) {
        return $http.get('/progList/list',{
            params: data
        })
    }
    //分页总条数
    function progCount(){
        return $http.get('/progCount/count')
    }
    //添加
    function progAdd(data){
        return $http.post('/progAdd/add',data)
    }
    //编辑
    function progEdit(data){
        return $http.post('/progEdit/edit',data)
    }
    //id查询
    function progId(data){
        return $http.get('/progId/id',{
            params:data
        })
    }
    //删除
    function progDelete(data){
        return $http.get('/progDelete/delete',{
            params: data
        })
    }
    //汇总
    function progSummary(data){
        return $http.post('/progSummary/summary',data)
    }
    //菜单权限
    function progPermission(data) {
        return $http.get('/progPermission/guidePermission/'+data);
    }
    //-------------------------------
    //外包单位
    function getUnit(data){
        return $http.get('/getUnit/unit',{
            params: data
        })
    }
    //地区
    function getArea(data){
        return $http.get('/getArea/area',{
            params: data
        })
    }
    //类型
    function getType(data){
        return $http.get('/getType/type',{
            params: data
        })
    }
    //专业
    function getMajors(data){
        return $http.get('/getMajors/majors',{
            params: data
        })
    }
    //运营商名称
    function getOperator(data){
        return $http.get('/getOperator/operator',{
            params: data
        })
    }
    //派工情况
    function getTasking(data){
        return $http.get('/getTasking/tasking',{
            params: data
        })
    }
    //实际完工状态
    function getState(data){
        return $http.get('/getState/state',{
            params: data
        })
    }
});
