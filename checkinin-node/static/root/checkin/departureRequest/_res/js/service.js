var app = angular.module('departureServer',[]);
app.factory('departureSer',function ($http) {
    return {
        menuPermission : menuPermission,
        departureList : departureList,
        countDeparture : countDeparture,
        addDeparture : addDeparture,
        findDepartureId : findDepartureId,
        editGetDeparture : editGetDeparture,
        deleteDeparture : deleteDeparture,
        auditDepartures : auditDepartures,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/hostapply/guidePermission/'+data);
    }
    //分页查询列表
    function departureList(data) {
        return $http.get('/hostapply/list',{
            params: data
        })
    }
  //获取总记录数
    function countDeparture(data){
        return $http.get('/hostapply/count',{
            params:data
        })
    }
    //添加
    function addDeparture(data){
        return $http.post('/hostapply/add',data)
    }
    //id查询
    function findDepartureId(data){
        return $http.get('/hostapply/host',{
            params:data
        })
    }
    //编辑
    function editGetDeparture(data){
        return $http.post('/hostapply/edit',data)
    }
    //删除
    function deleteDeparture(data){
        return $http.get('/hostapply/delete',{
            params: data
        })
    }
    //审核
    function auditDepartures(data){
        return $http.post('/hostapply/audit',data)
    }
});
